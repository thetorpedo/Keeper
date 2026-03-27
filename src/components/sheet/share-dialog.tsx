import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { RiShareFill } from "react-icons/ri";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog.tsx";
import Button from "../ui/questbutton.tsx";

export function ShareDialog() {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="font-medium flex flex-row justify-center items-center sm:py-3 mr-1 max-sm:w-fit max-sm:px-3!">
                    <RiShareFill className="inline-block mr-3 max-sm:size-3" />
                    <span className="max-sm:text-sm">Share</span>
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md p-6 gap-0 bg-white border-black rounded-xl">
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
                        className="shrink bg-transparent px-3 py-2 min-w-0 w-full font-ovo text-[17px] text-gray-700 outline-none cursor-text truncate"
                        readOnly
                        value={window.location.href
                            .replace("http://", "")
                            .replace("https://", "")}
                    />
                    <button
                        onClick={handleCopyLink}
                        className="px-4 py-3 font-bold font-alegraya-sans border-l flex-none border-black transition-colors flex items-center gap-2 cursor-pointer w-28 justify-center bg-purple text-black hover:bg-purple/80"
                    >
                        {isCopied ? (
                            <Check className="size-5" />
                        ) : (
                            <Copy className="size-4" />
                        )}
                        {isCopied ? "COPIED!" : "COPY"}
                    </button>
                </div>

                <DialogFooter className="sm:justify-start">
                    <p className="text-base/tight font-ovo text-gray-500 italic">
                        Viewers cannot edit any character information or read
                        their notes.
                    </p>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
