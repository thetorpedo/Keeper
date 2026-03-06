import { RiShareFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Button from "../ui/questbutton.tsx";

interface CharacterCardProps {
  name: string;
  role: string;
  createdAt: Date;
  id: string;
}

export default function CharacterCard({ name, role, createdAt, id }: CharacterCardProps) {
    const formatDate = (date: any) => {
        if (!date) return 'Unknown';
        
        if (date.toDate && typeof date.toDate === 'function') {
            return date.toDate().toLocaleDateString();
        }
        
        return 'Unknown';
    };

    return (
        <div className='flex flex-col mt-5 justify-center'>
            <Link to={`/character/${id}`}>
            <Button className='border rounded-lg relative p-5 w-full col-span-1 flex flex-col justify-center sm:pt-8 pt-5 items-center gap-1 sm:pb-4'>
                <div className='font-alegraya-sans flex justify-center items-center absolute sm:-top-[20.5px] -top-[14.5px]  text-white font-bold'>
                    <img 
                    src="../../src/assets/StatVector.svg" 
                    className="h-7 w-auto block object-contain" 
                    alt=""
                    />
                    <div className=' text-xl bg-black px-1 sm:px-4 h-7 sm:h-10 flex items-center -mx-px leading-none'>
                    <span className="max-sm:text-[16px] text-[25px]">{name}</span>
                    </div>
                    <img 
                    src="../../src/assets/StatVector.svg" 
                    className="h-7 w-auto block object-contain rotate-180" 
                    alt=""
                    />
                </div>
                    <span className='font-alegraya-sans font-semibold text-gray-500 lowercase text-sm sm:text-xl'>The {role}</span>
                <div className="aspect-square shrink-0 w-24 sm:w-48 flex justify-center items-center border rounded-lg overflow-hidden">
                    <img src="src/assets/placeholderPfp.png" className="object-contain" />
                </div>
                <div className='flex flex-col justify-between'>
                        <span className='font-alegraya-sans pt-1 text-gray-400 lowercase text-sm sm:text-lg'>Created on <span className="max-sm:block max-sm:-mt-2">{formatDate(createdAt)}</span></span>
                </div>
            </Button>
            </Link>
        <div className='flex flex-col justify-center items-center'>
            <Button className='font-medium rounded-lg mt-3 flex w-full items-center justify-center'><RiShareFill className='inline-block mr-2 size-3' /><span className='text-lg'>Share</span></Button>     
        </div>
        </div>
    )
}