import { useGlobalAlert } from "@/app/contexts/alertContext/AlertProvider.tsx";
import { useAuth } from "@/app/contexts/authContext/AuthProvider.tsx";
import d20Icon from "@/assets/d20.png";
import { DesktopSheet } from "@/components/sheet/desktop-sheet.tsx";
import { useCharacter } from "@/components/sheet/hooks/useCharacter.tsx";
import { useDiceRoller } from "@/components/sheet/hooks/useDiceRoller.tsx";
import { MobileSheet } from "@/components/sheet/mobile-sheet.tsx";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert.tsx";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog.tsx";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRef, useState } from "react";
import CropperOriginal from "react-easy-crop";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Footer from "../../components/ui/footer.tsx";
import Navbar from "../../components/ui/navbar.tsx";
import Button from "../../components/ui/questbutton.tsx";
import { storage } from "../firebase/firebase.ts";

const Cropper = CropperOriginal as any;

const getCroppedImg = (imageSrc: string, pixelCrop: any): Promise<Blob> => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = imageSrc;
        image.setAttribute("crossOrigin", "anonymous");
        image.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (!ctx) return reject(new Error("No 2d context"));
            canvas.width = pixelCrop.width;
            canvas.height = pixelCrop.height;
            ctx.drawImage(image, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height);
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
    const { showAlert } = useGlobalAlert();
    
    const characterData = useCharacter(id, currentUser);
    const diceData = useDiceRoller();

    const [uploadingImage, setUploadingImage] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imageToCrop, setImageToCrop] = useState<string | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith("image/")) {
            showAlert("Please upload a valid image file.", "Invalid Format", "error");
            return;
        }
        setImageToCrop(URL.createObjectURL(file));
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleCropAndUpload = async () => {
        if (!imageToCrop || !croppedAreaPixels || !id) return;
        try {
            setUploadingImage(true);
            const croppedBlob = await getCroppedImg(imageToCrop, croppedAreaPixels);
            const imageRef = ref(storage, `characters/${id}/profile.jpg`);
            await uploadBytes(imageRef, croppedBlob);
            const downloadURL = await getDownloadURL(imageRef);
            await characterData.updateField("profileImage", downloadURL);
            setImageToCrop(null);
        } catch (error) {
            showAlert("Failed to upload image. Please try again.", "Upload Error", "error");
        } finally {
            setUploadingImage(false);
        }
    };

    if (characterData.loading) {
        return (
            <div className="flex flex-col min-h-screen bg-white">
                <Navbar />
                <div className="flex-1 flex items-center justify-center font-alegraya text-2xl">Loading Character...</div>
                <Footer />
            </div>
        );
    }

    if (!characterData.character) {
        return (
            <div className="flex flex-col h-screen bg-white">
                <Navbar />
                <div className="flex-1 flex items-center justify-center font-alegraya text-2xl text-red-500">Character not found!</div>
                <Footer />
            </div>
        );
    }

    const sheetActions = {
        updateField: characterData.updateField,
        updateStat: characterData.updateStat,
        handleDeductAP: characterData.handleDeductAP,
        toggleAbility: characterData.toggleAbility,
        toggleItem: characterData.toggleItem,
        handleUpdateNotes: characterData.handleUpdateNotes,
        deleteCharacter: characterData.deleteCharacter,
        rollD20: diceData.rollD20,
        handleFileSelect: handleFileSelect
    };

    return (
        <div className="flex max-sm:justify-start relative flex-col justify-between items-center bg-white min-h-screen w-full">
            <Helmet>
                <title>{`${characterData.character.name} | Keeper`}</title>
                <meta name="description" content={`View the character sheet of ${characterData.character.name} in Keeper.`} />
                <meta property="og:title" content={`${characterData.character.name} - The ${characterData.character.role}`} />
                <meta property="og:description" content="Manage your Quest RPG character sheet with Keeper." />
                <meta property="og:image" content={characterData.character.profileImage || "/defaultpfp.png"} />
            </Helmet>
            
            <Navbar />

            {/* Img Cropper */}
            <Dialog open={!!imageToCrop} onOpenChange={(open) => !open && setImageToCrop(null)}>
                <DialogContent className="sm:max-w-md bg-white">
                    <DialogHeader>
                        <DialogTitle className="font-alegraya text-3xl font-extrabold">Adjust Picture</DialogTitle>
                    </DialogHeader>
                    <div className="relative w-full h-72 bg-black rounded-lg overflow-hidden">
                        <Cropper image={imageToCrop || ""} crop={crop} zoom={zoom} aspect={1} onCropChange={setCrop} onCropComplete={(_a:any, p:any) => setCroppedAreaPixels(p)} onZoomChange={setZoom} />
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                        <label className="text-base font-alegraya-sans font-bold lowercase">Zoom</label>
                        <input type="range" value={zoom} min={1} max={3} step={0.1} onChange={(e) => setZoom(Number(e.target.value))} className="w-full accent-purple" />
                    </div>
                    <DialogFooter className="mt-4 sm:justify-between gap-4">
                        <Button onClick={() => setImageToCrop(null)} className="bg-transparent shadow-none text-black hover:shadow-btn!">Cancel</Button>
                        <Button onClick={handleCropAndUpload} className="bg-purple text-black" disabled={uploadingImage}>{uploadingImage ? "Saving..." : "Save Image"}</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Dice Roll Alert */}
            <Alert className={`fixed bottom-5 z-120! w-fit text-center shadow-btn text-xl sm:text-3xl p-2 mx-2 max-sm:bottom-20 sm:p-5 transition-all duration-500 ease-in-out font-alegraya ${diceData.isRolling ? "translate-y-0 opacity-100 visible" : "translate-y-20 opacity-0 invisible"}`}>
                <AlertTitle>
                    You rolled {[8, 11, 18].includes(diceData.rollResult) ? "an  " : "a  "}
                    <span className="font-extrabold font-alegraya-sans text-2xl sm:text-4xl mx-1 -mt-1">{diceData.rollResult}</span> -
                    <span className="font-bold">
                        {diceData.rollResult === 20 && " Triumph!"}
                        {diceData.rollResult >= 11 && diceData.rollResult <= 19 && " Success"}
                        {diceData.rollResult >= 6 && diceData.rollResult <= 10 && " Tough Choice"}
                        {diceData.rollResult >= 2 && diceData.rollResult <= 5 && " Failure"}
                        {diceData.rollResult === 1 && " Catastrophe"}
                    </span>
                </AlertTitle>
                <AlertDescription className="text-center w-full text-sm sm:text-base whitespace-pre-line">
                    {diceData.rollResult === 20 && "This is an exciting moment!\nYou automatically succeed at what you were trying to do, and you may even find added fortune.\nIf you’re dealing damage, double it."}
                    {diceData.rollResult >= 11 && diceData.rollResult <= 19 && "You accomplish what you were trying to do without any compromises.\nIf you’re dealing damage, you deal the standard amount."}
                    {diceData.rollResult >= 6 && diceData.rollResult <= 10 && "You succeed in your action, but there’s a cost.\nThe Guide will give you a choice between two setbacks."}
                    {diceData.rollResult >= 2 && diceData.rollResult <= 5 && "You fail your intended action and face a setback of the Guide’s choice.\nYou might lose equipment, take damage from an enemy counterattack, or face some other misfortune."}
                    {diceData.rollResult === 1 && "Oh no.\nYou automatically fail, and you may suffer a severe setback."}
                </AlertDescription>
            </Alert>

            {/* Character Sheets */}
            <main className="flex-1 w-full flex flex-col items-center">
                <DesktopSheet 
                    character={characterData.character}
                    isOwner={characterData.isOwner}
                    notes={characterData.notes}
                    myAbilities={characterData.myAbilities}
                    myItems={characterData.myItems}
                    usedSlots={characterData.usedSlots}
                    uploadingImage={uploadingImage}
                    fileInputRef={fileInputRef}
                    actions={sheetActions}
                />
                <MobileSheet 
                    character={characterData.character}
                    isOwner={characterData.isOwner}
                    notes={characterData.notes}
                    myAbilities={characterData.myAbilities}
                    myItems={characterData.myItems}
                    usedSlots={characterData.usedSlots}
                    uploadingImage={uploadingImage}
                    fileInputRef={fileInputRef}
                    actions={sheetActions}
                    spinKey={diceData.spinKey}
                />
            </main>

            <span className="max-md:hidden w-full"><Footer /></span>

            <div className="hidden md:block">
                <Button onClick={diceData.rollD20} className={`p-4! fixed bottom-10 right-10 z-10 bg-white `}>
                    <img key={`roll-${diceData.spinKey}`} src={d20Icon} alt="Roll d20 die" className={`${diceData.spinKey > 0 ? "animate-[spin_0.7s_ease-out]" : ""} w-12 h-12 rounded-full`} />
                </Button>
            </div>
        </div>
    );
}

export default CharacterSheet;