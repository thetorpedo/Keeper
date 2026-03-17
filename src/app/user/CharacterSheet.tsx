import d20Icon from '@/assets/d20.png';
import defaultPfp from '@/assets/defaultpfp.png';
import AbilitySelector from "@/components/sheet/AbilitySelector.tsx";
import ItemSelector from "@/components/sheet/ItemSelector.tsx";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.tsx";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs.tsx";
import { bookAbilities } from "@/data/abilities/wizard.ts";
import { bookItems } from "@/data/items/items.ts";
import { deleteDoc, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Check, CircleArrowLeft, Copy, Pencil, Upload } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BsFillBackpack2Fill, BsFillFileTextFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { RiShareFill, RiSparkling2Fill } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import CharacterProfile from "../../components/sheet/CharacterProfile.tsx";
import Stat from "../../components/sheet/Stat.tsx";
import Card from "../../components/sheet/utils/Card.tsx";
import Footer from "../../components/ui/footer.tsx";
import Navbar from "../../components/ui/navbar.tsx";
import Button from "../../components/ui/questbutton.tsx";
import { db, storage } from "../firebase/firebase.ts";
// NOVO: Importando a tipagem de Ability e o AuthProvider
import { useAuth } from "@/app/contexts/authContext/authProvider.tsx";
import NotesManager, { type Note } from '@/components/sheet/NotesManager.tsx';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.tsx';
import type { Ability } from "@/data/interface.ts";
import CropperOriginal from 'react-easy-crop';
const Cropper = CropperOriginal as any;

 const getCroppedImg = (imageSrc: string, pixelCrop: any): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageSrc;
      image.setAttribute('crossOrigin', 'anonymous'); // Evita erros de CORS
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (!ctx) return reject(new Error("No 2d context"));

        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;

        // Desenha só a parte cortada no canvas
        ctx.drawImage(
          image,
          pixelCrop.x,
          pixelCrop.y,
          pixelCrop.width,
          pixelCrop.height,
          0,
          0,
          pixelCrop.width,
          pixelCrop.height
        );

        // COMPRESSÃO AQUI: Exporta como JPEG com 70% de qualidade
        canvas.toBlob((blob) => {
          if (!blob) return reject(new Error("Canvas is empty"));
          resolve(blob);
        }, "image/jpeg", 0.7); 
      };
      image.onerror = (error) => reject(error);
    });
};


function CharacterSheet() {
  const { id } = useParams();
  const { currentUser } = useAuth(); 

  const [character, setCharacter] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [isRolling, setIsRolling] = useState(false);
  const [rollResult, setRollResult] = useState(0);

  const [userCustomAbilities, setUserCustomAbilities] = useState<Ability[]>([]);
  const [userCustomItems, setUserCustomItems] = useState<Ability[]>([]);

  const rollTimeoutRef = useRef<any>(null);
  const [spinKey, setSpinKey] = useState(0);

  const [uploadingImage, setUploadingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageToCrop, setImageToCrop] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  const isOwner = Boolean(currentUser && character && (character.ownerId === currentUser.uid));

  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const fetchCharacter = async () => {
      if (!id) return;
      try {
        const docRef = doc(db, "characters", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCharacter(docSnap.data());
        } else {
          console.log("Ficha não encontrada!");
        }
      } catch (error) {
        console.error("Erro ao buscar personagem:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  useEffect(() => {
    if (!currentUser?.uid) {
      return;
    }
   
    
    const docRef = doc(db, "users", currentUser.uid);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setUserCustomAbilities(data.custom_abilities || []);
        setUserCustomItems(data.custom_items || []);

      }
    });

    return () => unsubscribe();
  }, [currentUser]);


  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert("Please upload a valid image file.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setImageToCrop(imageUrl);
    
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const onCropComplete = (_croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleCropAndUpload = async () => {
    if (!imageToCrop || !croppedAreaPixels || !id) return;
    
    try {
      setUploadingImage(true);
      
      const croppedBlob = await getCroppedImg(imageToCrop, croppedAreaPixels);
      
      const imageRef = ref(storage, `characters/${id}/profile.jpg`);
      await uploadBytes(imageRef, croppedBlob);
      const downloadURL = await getDownloadURL(imageRef);
      
      await updateCharacterField("profileImage", downloadURL);
      
      setImageToCrop(null);
    } catch (error) {
      console.error("Error cropping/uploading image:", error);
      alert("Failed to upload image.");
    } finally {
      setUploadingImage(false);
    }
  };


  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center font-alegraya text-2xl">
        Carregando ficha...
      </div>
    );
  }

  if (!character) {
    return (
      <div className="h-screen flex items-center justify-center font-alegraya text-2xl text-red-500">
        Personagem não encontrado.
      </div>
    );
  }


  const allAbilities = [...bookAbilities, ...userCustomAbilities];
  const allItems = [...bookItems, ...userCustomItems];

  const myAbilities = allAbilities.filter((ability) =>
    character.abilities?.includes(ability.id),
  );
  
  const myItems = allItems.filter((item) =>
    character.items?.includes(item.id),
  );

  const usedSlots = myItems.reduce(
    (total, item) => total + (item.slots || 1),
    0,
  );

  const removeAbility = async (abilityId: string) => {
    if (!character || !id) return;
    const updatedAbilities = character.abilities.filter(
      (a: string) => a !== abilityId,
    );
    setCharacter({ ...character, abilities: updatedAbilities });
    await updateDoc(doc(db, "characters", id), { abilities: updatedAbilities });
  };

  const removeItem = async (itemId: string) => {
    if (!character || !id) return;
    const updatedItems = character.items.filter((i: string) => i !== itemId);
    setCharacter({ ...character, items: updatedItems });
    await updateDoc(doc(db, "characters", id), { items: updatedItems });
  };

  const toggleAbility = async (abilityId: string) => {
    if (!character || !id) return;
    const currentAbilities = character.abilities || [];
    const updatedAbilities = currentAbilities.includes(abilityId)
      ? currentAbilities.filter((a: string) => a !== abilityId)
      : [...currentAbilities, abilityId];

    setCharacter({ ...character, abilities: updatedAbilities });
    await updateDoc(doc(db, "characters", id), { abilities: updatedAbilities });
  };

  const toggleItem = async (itemId: string) => {
    if (!character || !id) return;
    const currentItems = character.items || [];
    const updatedItems = currentItems.includes(itemId)
      ? currentItems.filter((i: string) => i !== itemId)
      : [...currentItems, itemId];

    setCharacter({ ...character, items: updatedItems });
    await updateDoc(doc(db, "characters", id), { items: updatedItems });
  };

  const updateCharacterField = async (field: string, newValue: string) => {
    if (!character || !id) return;
    if (newValue.replace(/\s+/g, "") === "") {
      newValue = field;
      newValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);
    }
    setCharacter((prev: any) => ({
        ...prev,
        [field]: newValue
    }));
    await updateDoc(doc(db, "characters", id), { [field]: newValue });
  };

  const updateCharacterStat = async (field: string, newValue: number) => {
    if (!character || !id) return;

    setCharacter((prev: any) => ({
        ...prev,
        [field]: newValue
    }));
    
    await updateDoc(doc(db, "characters", id), { [field]: newValue });
  };

  const handleDeductAP = async (cost: number) => {
    if (!character || !id) return;
    
    const currentAP = character.ap ?? 10;
    const newAP = currentAP - cost; 
    
    await updateCharacterStat("ap", newAP);
  };

  const deleteCharacter = async () => {
    try {
      if (!id) return;
      await deleteDoc(doc(db, "characters", id));
      
      navigate('/view');
    } catch (error) {
      console.error("Error deleting character:", error);
      alert("There was an error deleting the character. Please try again.");
    }
  };

  const handleUpdateNotes = async (newNotes: Note[]) => {
    if (!character || !id) return;
    
    setCharacter((prev: any) => ({
        ...prev,
        notes: newNotes
    }));
    
    await updateDoc(doc(db, "characters", id), { notes: newNotes });
  };

 const rollD20 = () => {
    if (rollTimeoutRef.current) {
      clearTimeout(rollTimeoutRef.current);
    }

    setSpinKey(prev => prev + 1);
    setIsRolling(true);
    setRollResult(Math.floor(Math.random() * 20) + 1);
    
    rollTimeoutRef.current = setTimeout(() => {
      setIsRolling(false);
    }, 5000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="flex max-sm:justify-start relative flex-col justify-between items-center bg-white h-full">
      <Navbar />

      <Dialog open={!!imageToCrop} onOpenChange={(open) => !open && setImageToCrop(null)}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="font-alegraya text-3xl font-extrabold">Adjust Picture</DialogTitle>
          </DialogHeader>
          
          <div className="relative w-full h-72 bg-black rounded-lg overflow-hidden">
            <Cropper
              image={imageToCrop || ""}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          
          <div className="flex flex-col gap-1 mt-2">
            <label className="text-base font-alegraya-sans font-bold lowercase">Zoom</label>
            <input
              type="range"
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="w-full accent-purple"
            />
          </div>
          
          <DialogFooter className="mt-4 sm:justify-between gap-4">
            <Button onClick={() => setImageToCrop(null)} className="bg-transparent shadow-none text-black hover:shadow-btn!">Cancel</Button>
            <Button onClick={handleCropAndUpload} className="bg-purple text-black" disabled={uploadingImage}>
              {uploadingImage ? "Saving..." : "Save Image"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Alert 
        className={`
          fixed bottom-5 z-9999 w-fit text-center shadow-btn text-xl sm:text-3xl p-2 mx-2 max-sm:bottom-20 sm:p-5
          transition-all duration-500 ease-in-out
          font-alegraya
          ${isRolling 
            ? 'translate-y-0 opacity-100 visible' 
            : 'translate-y-20 opacity-0 invisible'}
        `}
      >
        <AlertTitle>You rolled {[8,11,18].includes(rollResult) ? 'an  ' : 'a  '}<span className='font-extrabold font-alegraya-sans text-2xl sm:text-4xl mx-1 -mt-1'>{rollResult}</span>{'  '}- 
          <span className='font-bold'>
          {rollResult === 20 && ' Triumph!'}
          {rollResult >= 11 && rollResult <= 19 && ' Success'}
          {rollResult >= 6 && rollResult <= 10 && ' Tough Choice'}
          {rollResult >= 2 && rollResult <= 5 && ' Failure'}
          {rollResult === 1 && ' Catastrophe'}
          </span>
        </AlertTitle>
        <AlertDescription className='text-center w-full text-sm sm:text-base whitespace-pre-line'>
          {rollResult === 20 && 'This is an exciting moment!\nYou automatically succeed at what you were trying to do, and you may even find added fortune.\nIf you’re dealing damage, double it.'}
          {rollResult >= 11 && rollResult <= 19 && 'You accomplish what you were trying to do without any compromises.\nIf you’re dealing damage, you deal the standard amount.'}
          {rollResult >= 6 && rollResult <= 10 && 'You succeed in your action, but there’s a cost.\nThe Guide will give you a choice between two setbacks.'}
          {rollResult >= 2 && rollResult <= 5 && 'You fail your intended action and face a setback of the Guide’s choice.\nYou might lose equipment, take damage from an enemy counterattack, or face some other misfortune.'}
          {rollResult === 1 && 'Oh no.\nYou automatically fail, and you may suffer a severe setback.'}
        </AlertDescription>
      </Alert>

      {/* Desktop */}
      <div className="hidden md:block">
        <Button 
          onClick={rollD20}
          className={`p-4! fixed bottom-10 right-10 z-999 bg-white `}>
          <img key={`roll-${spinKey}`} src={d20Icon} className={`${spinKey > 0 ? 'animate-[spin_0.7s_ease-out]' : ''} w-12 h-12 rounded-full`} />
        </Button>
        <div className="my-10 max-w-280 w-full flex flex-col gap-3 items-center">
          <a href="/view" className="text-gray-400 flex flex-row gap-2 w-full">
            <CircleArrowLeft />
            <span className="uppercase text-xl font-medium font-alegraya-sans">
              Back
            </span>
          </a>
          <div className="flex flex-row w-full justify-between items-center align-middle pb-5 border-b ">
            <div className="flex flex-col">
              <h1 className="font-alegraya font-bold text-5xl">{character.name}</h1>
              <h2 className="font-alegraya-sans text-gray-500 uppercase font-medium text-xl">
                The {character.role}
              </h2>
            </div>
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="font-medium flex flex-row justify-center items-center py-3 mr-1">
                    <RiShareFill className="inline-block mr-3" />
                    <span>Share</span>
                  </Button> 
                </DialogTrigger>
                
                <DialogContent className="sm:max-w-md p-6 gap-0 bg-white border- border-black rounded-xl">
                  <DialogHeader className="mb-2">
                    <DialogTitle className="text-3xl font-alegraya font-extrabold text-black">
                      Share this character!
                    </DialogTitle>
                    <DialogDescription className="text-lg font-alegraya-sans text-gray-600">
                      Anyone with this link can view this character.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="flex items-center w-full mt-2 mb-4 border border-black overflow-hidden bg-gray-50 focus-within:ring-2 focus-within:ring-purple/50 transition-all">
                    
                    <input
                      className="flex-1 bg-transparent px-3 py-2 font-ovo text-[17px] text-gray-700 outline-none cursor-text truncate"
                      readOnly
                      value={window.location.href.replace("http://", "").replace("https://", "")}
                    />
                    <button
                      onClick={handleCopyLink}
                      className={`px-4 py-3 font-bold font-alegraya-sans border-l border-black transition-colors flex items-center gap-2 cursor-pointer w-28 justify-center
                        ${isCopied ? "bg-purple text-black hover:bg-purple/80" : "bg-purple text-black hover:bg-purple/80"}
                      `}
                    >
                      {isCopied ? <Check className="size-5" /> : <Copy className="size-4" />}
                      {isCopied ? "COPIED!" : "COPY"}
                    </button>
                  </div>

                  <DialogFooter className="sm:justify-start">
                    <p className="text-base/tight font-ovo text-gray-500 italic">
                      Viewers cannot edit any character information or read their notes.
                    </p>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              
            </div>
          </div>
          <div className="grid grid-cols-10 w-full gap-2">
            <div className="col-span-3 flex flex-col w-full gap-2">
              {/* Stats */}
              <section className="border border-gray-400 rounded-lg p-4 flex flex-col gap-2">
                <div className="w-full flex aspect-square justify-center items-center border mb-3 rounded-lg overflow-hidden"
                >
                    {uploadingImage ? (
                      <span className="font-alegraya-sans lowercase text-base font-bold animate-pulse">Uploading...</span>
                    ) : (
                      <div className="relative group w-full h-full overflow-hidden">
                        {/* Imagem de Perfil */}
                        <img
                          src={character.profileImage || defaultPfp}
                          className="object-cover w-full h-full transition-all group-hover:scale-105 group-hover:opacity-90"
                          alt="Profile"
                        />

                        {/* Overlay */}
                        <div 
                          className="absolute inset-0 bg-linear-to-t  from-black/40 to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                    flex items-center justify-center"
                        >
                          <Button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="flex items-center bg-white border px-4 py-2 cursor-pointer text-sm font-bold font-alegraya-sans 
                                      uppercase tracking-wider transition-all"
                          >
                            <Upload className="size-4 mr-2" />
                            Upload Image
                          </Button>
                        </div>
                      </div>
                    )}
                
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  accept="image/*"
                  className="hidden" 
                />
              </div>
                <Stat 
                  id="hp" 
                  isOwner={isOwner} 
                  name="HP" 
                  value={character.hp ?? 10} 
                  onUpdate={updateCharacterStat} 
                />
                <Stat 
                  id="ap" 
                  isOwner={isOwner} 
                  name="AP" 
                  value={character.ap ?? 10}
                  onUpdate={updateCharacterStat} 
                />
              </section>
              {/* Notes */}
              <NotesManager 
                  isOwner={isOwner} 
                  notes={character.notes || []} 
                  onUpdateNotes={handleUpdateNotes} 
                />
            </div>
            <div className="col-span-7 flex flex-col w-full gap-2">
              {/* Characteristics */}
              <section className="border border-gray-400 rounded-lg p-4">
                <CharacterProfile
                  isOwner={isOwner} 
                  characterData={character}
                  updateField={updateCharacterField}
                />
              </section>
              {/* Abilities & Inventory */}
              <section className="border border-gray-400 rounded-lg w-full gap-9 flex items-between flex-col p-4">
                <div className="flex flex-row gap-5 justify-between">
                  <div className="flex flex-row justify-between w-full items-center">
                    <div className="pl-1 font-alegraya-sans lowercase font-semibold text-2xl">
                      Abilities
                    </div>
                    <div className="mr-1">
                      {isOwner && (
                       <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex text-lg py-0.5! items-center cursor-pointer">
                            <Pencil className="size-4 mr-2" /> Edit
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="w-fit max-w-[90vw]! max-h-[90vh] overflow-y-auto p-10 bg-white">
                          <AbilitySelector
                            selectedAbilities={character.abilities || []}
                            onToggleAbility={toggleAbility}
                          />
                        </DialogContent>
                      </Dialog> 
                      )}
                      
                    </div>
                  </div>
                  <div className="flex flex-row justify-between w-full items-center">
                    <div className="pl-1 relative font-alegraya-sans lowercase font-semibold text-2xl">
                      Inventory
                      <div className="absolute top-6 font-alegraya-sans opacity-40 lowercase text-lg">{`(${usedSlots}/12)`}</div>
                    </div>

                    <div className="mr-1">
                      {isOwner && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex text-lg py-0.5! items-center cursor-pointer">
                            <Pencil className="size-4 mr-2" /> Edit
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="w-fit max-w-[90vw]! max-h-[90vh] overflow-y-auto p-10 bg-white">
                          <ItemSelector
                            selectedItems={character.items || []}
                            onToggleItem={toggleItem}
                          />
                        </DialogContent>
                      </Dialog>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-4 justify-between">
                  <div className="flex flex-col gap-4 justify-start h-full w-1/2 ">
                    <div className="p-5 bg-gray-100 rounded-lg w-full h-full border min-h-125 border-gray-300">
                      <div className="mt-23 flex-col grow-0">
                        {myAbilities.length === 0 && (
                          <p className="text-gray-500 font-alegraya-sans text-center">
                            No abilities yet.
                          </p>
                        )}
                        {myAbilities.map((ability, index, array) => (
                          <Card
                            key={ability.id}
                            ability={ability}
                            editing={false}
                            isSelected={true}
                            isOwner={isOwner}
                            onClick={() => removeAbility(ability.id)}
                            onRoll={rollD20}
                            isLast={index === array.length - 1}
                            onDeductAP={handleDeductAP}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 justify-start h-full w-1/2">
                    <div className="p-5 bg-gray-100 rounded-lg w-full h-full border min-h-125 border-gray-300 ">
                      <div className="mt-23 flex-col grow-0">
                        {myItems.length === 0 && (
                          <p className="text-gray-500 font-alegraya-sans text-center">
                            No items yet.
                          </p>
                        )}
                        {myItems.map((item, index, array) => (
                          <Card
                            key={item.id}
                            ability={item}
                            editing={false}
                            isSelected={true}
                            isOwner={isOwner}
                            onRoll={rollD20}
                            onClick={() => removeItem(item.id)}
                            isLast={index === array.length - 1}
                            onDeductAP={handleDeductAP}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {isOwner && (
           <Dialog>
            <DialogTrigger asChild>
              <button className="font-alegraya-sans lowercase text-left w-full ml-1 cursor-pointer hover:underline transition-all hover:text-red-400 font-medium text-xl text-red-500 ">
              Delete this character
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Are you sure you want to delete this character?</DialogTitle>
                <DialogDescription className='text-base pb-5'>
                  This action CANNOT be undone!
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="sm:justify-between">
                <DialogClose asChild>
                  <Button className='bg-red-400 text-white'
                  onClick={deleteCharacter}
                  >Delete</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button>Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>   
            )}
          
          
        </div>
      </div>
      <span className="max-sm:hidden w-full">
        <Footer />
      </span>

      {/* Mobile */}
      <div className="block md:hidden pb-20">
        <div className="flex flex-row w-full px-5 justify-between items-center align-middle pb-5 ">
          <div className="flex flex-col gap-2 w-full pb-5 border-b">
            <div className="flex flex-row w-full gap-4 justify-between items-center">
              <div className="flex flex-col h-full w-2/3 justify-between items-between gap-1">
                <div>
                  <h1 className={`font-alegraya font-bold line-clamp-2 ${character.name.length < 11 ? 'text-5xl/8 pb-3 pt-1' : 'text-3xl/8'}`}>{character.name}</h1>
                  <h2 className="font-alegraya-sans line-clamp-1 text-gray-500 uppercase font-medium">
                    The {character.role}
                  </h2>
                </div>
                <Button className="font-medium mr-1 px-3! w-fit flex items-center justify-center">
                  <RiShareFill className="inline-block mr-2 size-3" />
                  <span className="text-sm">Share</span>
                </Button>
                
              </div>

              <div className='flex flex-col h-full w-2/5 items-between gap-2'>       
                <div className=" w-full aspect-square shrink-0 h-full flex justify-center items-center border rounded-lg overflow-hidden">
                  {uploadingImage ? (
                        <span className="font-alegraya-sans lowercase text-base font-bold animate-pulse">Uploading...</span>
                      ) : (
                        <div className="relative group w-full h-full overflow-hidden">
                          {/* Imagem de Perfil */}
                          <img
                            src={character.profileImage || defaultPfp}
                            className="object-cover w-full h-full transition-all group-hover:scale-105 group-hover:opacity-90"
                            alt="Profile"
                          />

                          {/* Overlay */}
                          <div 
                            className="absolute inset-0 bg-linear-to-t  from-black/40 to-transparent 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                      flex items-center justify-center"
                          >
                            <Button
                              type="button"
                              onClick={() => fileInputRef.current?.click()}
                              className="flex items-center bg-white border px-4 py-2 cursor-pointer text-sm font-bold font-alegraya-sans 
                                        uppercase tracking-wider transition-all"
                            >
                              <Upload className="size-4 mr-2" />
                              Upload Image
                            </Button>
                          </div>
                      </div>
                    )}
                
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  accept="image/*"
                  className="hidden" 
                />
              </div>
              
                </div>  
            </div>

            <div className="mt-5 flex flex-col gap-4">
              <Stat 
                id="hp" 
                name="HP" 
                isOwner={isOwner} 
                value={character.hp ?? 10} 
                onUpdate={updateCharacterStat} 
              />
              <Stat 
                id="ap" 
                name="AP" 
                isOwner={isOwner} 
                value={character.ap ?? 10}
                onUpdate={updateCharacterStat} 
              />
            </div>
          </div>
        </div>
        <Tabs defaultValue="characteristics">
          <TabsList className="fixed w-full bottom-0 left-0 z-10">
            <TabsTrigger
              value="characteristics"
              className="group active:scale-95 transition-transform"
            >
              <FaUser className="size-6 group-data-[state=active]:-mt-2 group-data-[state=active]:size-6.5" />
            </TabsTrigger>
            <TabsTrigger
              value="abilities"
              className="group active:scale-95 transition-transform"
            >
              <RiSparkling2Fill className="size-6 group-data-[state=active]:-mt-2 group-data-[state=active]:size-7" />
            </TabsTrigger>
            <TabsTrigger
              value="inventory"
              className="group active:scale-95 transition-transform"
            >
              <BsFillBackpack2Fill className="size-6 group-data-[state=active]:-mt-2 group-data-[state=active]:size-7" />
            </TabsTrigger>
            <TabsTrigger
              value="notes"
              className="group mr-18 active:scale-95 transition-transform"
            >
              <BsFillFileTextFill className="size-6 group-data-[state=active]:-mt-2 group-data-[state=active]:size-7" />
            </TabsTrigger>
            <Button
              onClick={rollD20}
              className="p-3! fixed bottom-3 right-3 z-999 bg-white">
              <img key={`roll-${spinKey}`} src={d20Icon} className={`${spinKey > 0 ? 'animate-[spin_0.7s_ease-out]' : ''} size-8.5`} />
            </Button>
          </TabsList>
          <TabsContent value="characteristics" className="px-5">
            <CharacterProfile
              isOwner={isOwner} 
              characterData={character}
              updateField={updateCharacterField}
            />{" "}
          </TabsContent>
          <TabsContent value="abilities" className="px-5">
            <div className="flex flex-col gap-4 justify-center grow">
              <div className="flex flex-row justify-between items-center">
                <div className="pl-1 font-alegraya-sans lowercase font-semibold text-xl">
                  Abilities
                </div>
                <div className="mr-1">
                  {isOwner && (
                  <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex text-lg py-0! items-center cursor-pointer">
                            <Pencil className="size-4 mr-2" /> Edit
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="w-fit max-w-[95vw]! max-h-[85vh] p-2 pt-8 max-sm:w-[95vw] -mt-8 overflow-y-auto sm:p-10 bg-white">
                          <AbilitySelector
                            selectedAbilities={character.abilities || []}
                            onToggleAbility={toggleAbility}
                          />
                        </DialogContent>
                      </Dialog>  
                  )}
                  
                </div>
              </div>

              <div className="max-sm:p-0 max-sm:bg-white max-sm:border-0 p-5 bg-gray-100 rounded-lg w-fit border border-gray-300">
                <div className="mt-23 flex-col grow-0">
                  {myAbilities.length === 0 && (
                    <p className="text-gray-500 font-alegraya-sans text-center">
                      No abilities yet.
                    </p>
                  )}
                  {myAbilities.map((ability, index, array) => (
                    <Card
                      key={ability.id}
                      ability={ability}
                      editing={false}
                      isOwner={isOwner} 
                      isSelected={true}
                      onRoll={rollD20}
                      onClick={() => {}}
                      isLast={index === array.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="inventory" className="px-5">
            <div className="flex flex-col gap-4 justify-center grow">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col ">
                  <div className="pl-1 font-alegraya-sans lowercase font-semibold text-xl">
                    Inventory
                  </div>
                  <div className="pl-1 -mt-2 font-alegraya-sans lowercase font-semibold opacity-50 text-xl">{`(${usedSlots}/12)`}</div>
                </div>

                <div className="mr-1">
                  {isOwner && (
                   <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex text-lg py-0! items-center cursor-pointer">
                            <Pencil className="size-4 mr-2" /> Edit
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="w-fit max-w-[95vw]! max-h-[85vh] p-2 pt-8 max-sm:w-[95vw] -mt-8 overflow-y-auto sm:p-10 bg-white">
                          <ItemSelector
                            selectedItems={character.items || []}
                            onToggleItem={toggleItem}
                          />
                        </DialogContent>
                      </Dialog> 
                  )}
                  
                </div>
              </div>

              <div className="max-sm:p-0 max-sm:bg-white max-sm:border-0 p-5 bg-gray-100 rounded-lg w-fit border border-gray-300">
                <div className="mt-23 flex-col grow-0">
                  {myItems.length === 0 && (
                    <p className="text-gray-500 font-alegraya-sans text-center">
                      No items yet.
                    </p>
                  )}
                  {myItems.map((item, index, array) => (
                    <Card
                      key={item.id}
                      ability={item}
                      editing={false}
                      isOwner={isOwner} 
                      isSelected={true}
                      onRoll={rollD20}
                      onClick={() => {}}
                      isLast={index === array.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="notes" className="px-5 flex gap-2 justify-between flex-col h-full">
            <NotesManager 
                  isOwner={isOwner} 
                  notes={character.notes || []} 
                  onUpdateNotes={handleUpdateNotes} 
                />
            {isOwner && (
           <Dialog>
            <DialogTrigger asChild>
              <button className="font-alegraya-sans lowercase text-left w-full ml-1 cursor-pointer hover:underline transition-all hover:text-red-400 font-medium text-xl text-red-500 ">
              Delete this character
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Are you sure you want to delete this character?</DialogTitle>
                <DialogDescription className='text-base pb-5'>
                  This action CANNOT be undone!
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="sm:justify-between">
                <DialogClose asChild>
                  <Button className='bg-red-400 text-white'
                  onClick={deleteCharacter}
                  >Delete</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button>Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>   
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default CharacterSheet;