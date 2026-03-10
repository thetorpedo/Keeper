import d20Icon from '@/assets/d20.png';
import placeholderPfp from '@/assets/placeholderPfp.png';
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
// Adicionado onSnapshot na importação do firestore
import { deleteDoc, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { CircleArrowLeft, Pencil, Upload } from "lucide-react";
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
import type { Ability } from "@/data/interface.ts";

function CharacterSheet() {
  const { id } = useParams();
  const { currentUser } = useAuth(); // NOVO: Pegando o usuário logado

  const [character, setCharacter] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [uploadingImage, setUploadingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // NOVO: Estados para guardar os dados customizados do jogador
  const [userCustomAbilities, setUserCustomAbilities] = useState<Ability[]>([]);
  const [userCustomItems, setUserCustomItems] = useState<Ability[]>([]);

  // 1. Busca os dados do Personagem
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

  // 2. NOVO: Busca os itens e habilidades customizadas do Usuário em tempo real
  useEffect(() => {
    if (!currentUser?.uid) return;
    
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


  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !id) return;

    if (!file.type.startsWith('image/') || file.size > 5 * 1024 * 1024) {
      alert("Please upload a valid image file under 5MB.");
      return;
    }

    try {
      setUploadingImage(true);
      const imageRef = ref(storage, `characters/${id}/profile.jpg`);
      await uploadBytes(imageRef, file);
      const downloadURL = await getDownloadURL(imageRef);
      await updateCharacterField("profileImage", downloadURL);
    } catch (error) {
      console.error("Error uploading image:", error);
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

  // A MÁGICA ACONTECE AQUI:
  // Juntamos os arrays do Livro com os arrays Customizados do Usuário
  const allAbilities = [...bookAbilities, ...userCustomAbilities];
  const allItems = [...bookItems, ...userCustomItems];

  // Agora o filtro procura na lista gigante (Livro + Custom)
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
    
    // Atualiza a tela instantaneamente
    setCharacter((prev: any) => ({
        ...prev,
        notes: newNotes
    }));
    
    // Salva no Firebase
    await updateDoc(doc(db, "characters", id), { notes: newNotes });
  };

  return (
    <div className="flex max-sm:justify-start flex-col justify-between items-center bg-white h-full">
      <Navbar />

      {/* Desktop */}
      <div className="hidden md:block">
        <Button className="p-4! fixed bottom-10 right-10 z-999 bg-white">
          <img src={d20Icon} className="w-12 h-12 rounded-full" />
        </Button>
        <div className="my-10 max-w-280 w-full flex flex-col gap-3 items-center">
          <a href="/" className="text-gray-400 flex flex-row gap-2 w-full">
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
              <Button className="font-medium flex flex-row justify-center items-center py-3 mr-1">
                <RiShareFill className="inline-block mr-3" />
                <span>Share</span>
              </Button>
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
                          src={character.profileImage || placeholderPfp}
                          className="object-cover w-full h-full transition-all group-hover:scale-105 group-hover:opacity-90"
                          alt="Profile"
                        />

                        {/* Overlay */}
                        <div 
                          className="absolute inset-0 bg-gradient-to-t  from-black/40 to-transparent 
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
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden" 
                />
              </div>
                <Stat 
                  id="hp" 
                  name="HP" 
                  value={character.hp ?? 10} 
                  onUpdate={updateCharacterStat} 
                />
                <Stat 
                  id="ap" 
                  name="AP" 
                  value={character.ap ?? 10}
                  onUpdate={updateCharacterStat} 
                />
              </section>
              {/* Notes */}
              <NotesManager 
                  notes={character.notes || []} 
                  onUpdateNotes={handleUpdateNotes} 
                />
              {/* <section className="border grow border-gray-400 rounded-lg p-4">
                <div className="mb-3 flex w-full justify-center font-alegraya-sans lowercase  text-xl text-center">
                  Notes
                </div>
                
              </section> */}
            </div>
            <div className="col-span-7 flex flex-col w-full gap-2">
              {/* Characteristics */}
              <section className="border border-gray-400 rounded-lg p-4">
                <CharacterProfile
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
                    </div>
                  </div>
                  <div className="flex flex-row justify-between w-full items-center">
                    <div className="pl-1 relative font-alegraya-sans lowercase font-semibold text-2xl">
                      Inventory
                      <div className="absolute top-6 font-alegraya-sans opacity-40 lowercase text-lg">{`(${usedSlots}/12)`}</div>
                    </div>

                    <div className="mr-1">
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
                            onClick={() => removeAbility(ability.id)}
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
          
        </div>
      </div>
      <span className="max-sm:hidden w-full">
        <Footer />
      </span>

      {/* Mobile */}
      <div className="block md:hidden pb-20">
        <div className="flex flex-row w-full px-5 justify-between items-center align-middle pb-5 ">
          <div className="flex flex-col gap-2 pb-5 border-b">
            <div className="flex flex-row w-full gap-4 justify-between items-center">
              <div className="flex flex-col h-full w-2/3 items-between gap-2">
                <a
                  href="/"
                  className="text-gray-400 flex flex-row gap-2 w-full"
                >
                  <CircleArrowLeft />
                  <span className="uppercase text-lg font-medium font-alegraya-sans">
                    Back
                  </span>
                </a>
                <div>
                  <h1 className="font-alegraya font-bold line-clamp-2 text-3xl/8">{character.name}</h1>
                  <h2 className="font-alegraya-sans text-gray-500 uppercase font-medium">
                    The {character.role}
                  </h2>
                </div>
                
              </div>

              <div className='flex flex-col h-full w-1/3 items-between gap-2'>       
                <div className=" w-full aspect-square shrink-0 h-full flex justify-center items-center border rounded-lg overflow-hidden">
                  {uploadingImage ? (
                        <span className="font-alegraya-sans lowercase text-base font-bold animate-pulse">Uploading...</span>
                      ) : (
                        <div className="relative group w-full h-full overflow-hidden">
                          {/* Imagem de Perfil */}
                          <img
                            src={character.profileImage || placeholderPfp}
                            className="object-cover w-full h-full transition-all group-hover:scale-105 group-hover:opacity-90"
                            alt="Profile"
                          />

                          {/* Overlay */}
                          <div 
                            className="absolute inset-0 bg-gradient-to-t  from-black/40 to-transparent 
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
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden" 
                />
              </div>
              <Button className="font-medium mr-1 px-3! w-full  flex items-center justify-center">
                  <RiShareFill className="inline-block mr-2 size-3" />
                  <span className="text-sm">Share</span>
                </Button>
                </div>  
            </div>

            <div className="mt-5 flex flex-col gap-4">
              <Stat 
                id="hp" 
                name="HP" 
                value={character.hp ?? 10} 
                onUpdate={updateCharacterStat} 
              />
              <Stat 
                id="ap" 
                name="AP" 
                value={character.ap ?? 10}
                onUpdate={updateCharacterStat} 
              />
            </div>
          </div>
        </div>
        <Tabs defaultValue="characteristics">
          <TabsList className="fixed w-full bottom-0 left-0 z-99">
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
            <Button className="p-3! fixed bottom-3 right-3 z-999 bg-white">
              <img src={d20Icon} className="size-8.5" />
            </Button>
          </TabsList>
          <TabsContent value="characteristics" className="px-5">
            <CharacterProfile
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
                      isSelected={true}
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
                      isSelected={true}
                      onClick={() => {}}
                      isLast={index === array.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="notes" className="px-5">
            <NotesManager 
                  notes={character.notes || []} 
                  onUpdateNotes={handleUpdateNotes} 
                />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default CharacterSheet;