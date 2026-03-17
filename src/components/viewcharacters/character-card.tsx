import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { RiShareFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog.tsx";
import Button from "../ui/questbutton.tsx";

interface CharacterCardProps {
  name: string;
  role: string;
  createdAt: Date;
  id: string;
  pfp: string;
}

export default function CharacterCard({ name, role, createdAt, id, pfp }: CharacterCardProps) {
    const [isCopied, setIsCopied] = useState(false);

    const formatDate = (date: any) => {
        if (!date) return 'Unknown';
        
        if (date.toDate && typeof date.toDate === 'function') {
            return date.toDate().toLocaleDateString();
        }
        
        return 'Unknown';
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href.replace("/view",`/character/${id}`));
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className='flex flex-col mt-5 justify-center'>
            <Link to={`/character/${id}`}>
            <Button className='border rounded-lg relative p-5 w-full col-span-1 flex flex-col justify-center sm:pt-8 pt-5 items-center gap-1 sm:pb-4'>
                <div className='font-alegraya-sans flex justify-center w-full max-w-[90%] items-center absolute sm:-top-[20.5px] -top-[14.5px]  text-white font-bold'>
                    <img 
                    src="../../src/assets/StatVector.svg" 
                    className="h-7 w-auto shrink-0 block object-contain" 
                    alt=""
                    />
                    <div className='text-xl bg-black px-1 sm:px-4 h-7 sm:h-10 flex items-center min-w-0 -mx-px leading-none'>
                      <span className="max-sm:text-[16px] truncate block text-[25px]">{name}</span>
                    </div>
                    <img 
                    src="../../src/assets/StatVector.svg" 
                    className="h-7 w-auto shrink-0 block object-contain rotate-180" 
                    alt=""
                    />
                </div>
                    <span className='font-alegraya-sans font-semibold text-gray-500 min-w-0 max-w-[90%] lowercase truncate text-sm sm:text-xl'><div className="truncate block">The {role}</div></span>
                <div className="aspect-square shrink-0 w-24 sm:w-48 flex justify-center items-center border rounded-lg overflow-hidden">
                    <img src={pfp} className="object-contain" />
                </div>
                <div className='flex flex-col justify-between'>
                        <span className='font-alegraya-sans pt-1 text-gray-400 lowercase text-sm sm:text-lg'>Created on <span className="max-sm:block max-sm:-mt-2">{formatDate(createdAt)}</span></span>
                </div>
            </Button>
            </Link>
        <div className='flex flex-col justify-center items-center'>
            <Dialog>
                <DialogTrigger asChild>
                  <Button className='font-medium rounded-lg mt-3 flex w-full items-center justify-center'><RiShareFill className='inline-block mr-2 size-3' /><span className='text-lg'>Share</span></Button>
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
                      value={window.location.href.replace("http://", "").replace("https://", "").replace("/view",`/character/${id}`)}
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
    )
}