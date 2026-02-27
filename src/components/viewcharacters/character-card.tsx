import { RiShareFill } from "react-icons/ri";
import Button from "../ui/button.tsx";

export default function CharacterCard() {
    return (
        <div className='flex flex-col mt-5 justify-center'>
                        <Button className='border rounded-lg relative p-5 w-full col-span-1 flex flex-col justify-center sm:pt-8 pt-5 items-center gap-1 sm:pb-4'>
                            <div className='font-alegraya-sans flex justify-center items-center absolute -top-[14.5px]  text-white font-bold'>
                                <img 
                                src="../../src/assets/StatVector.svg" 
                                className="h-7 w-auto block object-contain" 
                                alt=""
                                />
                                <div className=' text-xl bg-black px-1 sm:px-4 h-7 sm:h-10 flex items-center -mx-px leading-none'>
                                <span className="max-sm:text-[16px] text-[25px]">Merlim</span>
                                </div>
                                <img 
                                src="../../src/assets/StatVector.svg" 
                                className="h-7 w-auto block object-contain rotate-180" 
                                alt=""
                                />
                            </div>
                             <span className='font-alegraya-sans font-semibold text-gray-400 lowercase text-sm sm:text-xl'>the wizard</span>
                            <div className="aspect-square shrink-0 w-24 sm:w-48 flex justify-center items-center border rounded-lg overflow-hidden">
                                <img src="src/assets/placeholderPfp.png" className="object-contain" />
                            </div>
                            <div className='flex flex-col justify-between'>
                                    <span className='font-alegraya-sans pt-1 text-gray-400 lowercase text-sm sm:text-lg'>Created on <span className="max-sm:block max-sm:-mt-2">28/03/2023</span></span>
                            </div>
                        </Button>
                    <div className='flex flex-col justify-center items-center'>
                        <Button className='font-medium rounded-lg mt-3 flex w-full items-center justify-center'><RiShareFill className='inline-block mr-2 size-3' /><span className='text-lg'>Share</span></Button>     
                    </div>
                    </div>
    )
}