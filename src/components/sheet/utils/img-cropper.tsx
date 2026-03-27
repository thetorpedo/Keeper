import { useGlobalAlert } from "@/app/contexts/alertContext/AlertProvider.tsx";
import { storage } from "@/app/firebase/firebase.ts";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog.tsx";
import Button from "@/components/ui/questbutton.tsx";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import CropperOriginal from "react-easy-crop";

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
            ctx.drawImage(
                image,
                pixelCrop.x,
                pixelCrop.y,
                pixelCrop.width,
                pixelCrop.height,
                0,
                0,
                pixelCrop.width,
                pixelCrop.height,
            );
            canvas.toBlob(
                (blob) => {
                    if (!blob) return reject(new Error("Canvas is empty"));
                    resolve(blob);
                },
                "image/jpeg",
                0.7,
            );
        };
        image.onerror = (error) => reject(error);
    });
};

export function ImgCropper({
    id,
    imageToCrop,
    setImageToCrop,
    updateField,
}: {
    id: string | undefined;
    imageToCrop: string | null;
    setImageToCrop: (v: string | null) => void;
    updateField: (f: string, v: string) => Promise<void>;
}) {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
    const [uploadingImage, setUploadingImage] = useState(false);
    const { showAlert } = useGlobalAlert();

    const onCropComplete = (_croppedArea: any, croppedAreaPixels: any) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

    const handleCropAndUpload = async () => {
        if (!imageToCrop || !croppedAreaPixels || !id) return;
        try {
            setUploadingImage(true);
            const croppedBlob = await getCroppedImg(
                imageToCrop,
                croppedAreaPixels,
            );
            const imageRef = ref(storage, `characters/${id}/profile.jpg`);
            await uploadBytes(imageRef, croppedBlob);
            const downloadURL = await getDownloadURL(imageRef);
            await updateField("profileImage", downloadURL);
            setImageToCrop(null);
        } catch (error) {
            showAlert(
                "Failed to upload image. Please try again.",
                "Upload Error",
                "error",
            );
        } finally {
            setUploadingImage(false);
        }
    };

    return (
        <Dialog
            open={!!imageToCrop}
            onOpenChange={(open) => !open && setImageToCrop(null)}
        >
            <DialogContent className="sm:max-w-md bg-white">
                <DialogHeader>
                    <DialogTitle className="font-alegraya text-3xl font-extrabold">
                        Adjust Picture
                    </DialogTitle>
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
                    <label className="text-base font-alegraya-sans font-bold lowercase">
                        Zoom
                    </label>
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
                    <Button
                        onClick={() => setImageToCrop(null)}
                        className="bg-transparent shadow-none text-black hover:shadow-btn!"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleCropAndUpload}
                        className="bg-purple text-black"
                        disabled={uploadingImage}
                    >
                        {uploadingImage ? "Saving..." : "Save Image"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
