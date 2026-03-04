import { Button } from "@/components/ui/button.tsx";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog.tsx";
import type { Ability } from "@/data/abilities/wizard.ts";

interface CardProps {
    ability: Ability;
    isSelected: boolean;
    onClick: () => void;
    isLast: boolean;
    
}

export default function Card({ ability, isSelected, onClick, isLast}: CardProps) {
    const baseCost = ability.effects[0]?.cost ?? 0;

    return (
        // <div className=" ">
        <Dialog>
            <DialogTrigger asChild>
            <div
            className="relative h-38 z-9 cursor-pointer -mt-23 overflow-hidden w-full border-b group bg-white rounded-t-lg hover:h-50 hover:-mt-35 transition-all duration-300">
                
                {/* Outer Box */}
                <div className="w-full rounded-lg border border-gray-400 p-2.5 pt-2">

                    {isLast ? (
                        <div className="absolute justify-center items-center bg-linear-to-t  from-black/50 to-transparent bottom-0 left-0 h-25 -mb-20 w-full z-9 group-hover:from-black/50  transition-all animate-in fade-in duration-500">
                        </div>
                    ) : (
                        <div className="absolute justify-center items-center bg-linear-to-t  from-black/50 to-transparent bottom-0 left-0 h-25 w-full z-9 group-hover:from-black  transition-all animate-in fade-in duration-500">
                        </div>
                    )}
                    

                    <div className="flex justify-center -mb-4">
                        <div className="px-2 max-w-full">
                        <div className="flex items-center justify-center gap-2 px-2 relative max-w-full bg-white">
                            
                            {/* AP */}
                            <div className="flex shrink-0 items-center group relative"> 
                                <button 
                                onClick={() => console.log("!")}
                                className="flex items-center tooltip relative h-full hover:opacity-50 hover:scale-115 transition-all active:scale-95 cursor-pointer">
                                <span className="bg-black px-1.5 py-0.5 text-white font-alegraya-sans font-bold leading-none flex items-center justify-center">
                                    {baseCost}
                                </span>
                                <img 
                                    src="../../src/assets/APVector.svg" 
                                    className="h-5 w-auto block"
                                    alt=""
                                />     
                                </button>
                            </div>

                            {/* Name */}
                            <div className="flex flex-1 min-w-0 truncate items-center h-full">
                                <span className="font-alegraya-sans lowercase truncate block w-full font-extrabold text-2xl text-center ">
                                {ability.name}
                                </span>
                            </div>

                            {/* Roll */}
                            {ability.rollTheDie && (
                                    <div className="flex shrink-0 items-center h-full">
                                        <button className="font-alegraya-sans cursor-pointer hover:opacity-50 hover:scale-108 transition-all active:scale-100 lowercase  text-[14px] leading-none flex items-center justify-center bg-gray-50">
                                            <img 
                                    src="../../src/assets/d20.png" 
                                    className="size-5"
                                    alt=""
                                />  
                                        </button>
                                    </div>
                                )}

                        </div>
                        </div>
                    </div>
                    {/* Inner Box */}
                    <div className="border-4 min-h-70 border-amber-300 rounded-lg text-justify p-3 pt-4">
                        {/* Description */}
                        <div>
                            <p className="text-sm">{ability.description || ability.effects[0]?.description}</p>
                        </div>
                    </div>
                </div>
                {/* Title */}
                
            </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md max-h-[80vh] z-100 overflow-y-auto font-alegraya-sans p-0 font-medium text-lg">
                <div className="flex justify-center flex-col relative m-3 mt-8 justify-center items-center">
                <div className="flex items-center justify-center gap-2 px-2 relative -mb-8 grow-0 w-fit -top-4 max-w-full bg-white">
                    {/* Name */}
                    <div className="flex shrink-0 min-w-0 truncate items-center h-full">
                        <span className="font-alegraya-sans lowercase truncate block w-full font-extrabold text-2xl text-center ">
                        {ability.name}
                        </span>
                    </div>
                    {ability.rollTheDie && (
                                    <div className="flex shrink-0 justify-center items-center mb-0 h-full">
                                        <button className="font-alegraya-sans cursor-pointer hover:opacity-50 hover:scale-108 transition-all active:scale-100 lowercase border text-[16px] leading-none px-1.5 py-1 flex items-center justify-center bg-gray-50">
                                            Roll the die
                                        </button>
                                    </div>
                                )}
                </div>
                <div className="border-4  w-full border-amber-300 rounded-lg text-justify p-3 pt-0">
                    
                    <div className="space-y-4 my-4">
                    {ability.description && <p className="font-ovo text-base">{ability.description}</p>}
                    
                    <div className="space-y-4">
                        
                        {ability.effects.map((effect, index) => (
                            <div key={index} className="font-ovo text-base/snug">
                                <div className="font-bold mr-2 inline-block gap-2 items-center mb-1">
                                    <span className="flex shrink-0 items-center group relative"> 
                                        <button 
                                        onClick={() => console.log("!")}
                                        className="flex items-center tooltip relative h-full hover:opacity-50 hover:scale-115 transition-all active:scale-95 cursor-pointer">
                                        <span className="bg-black px-1.5 py-0.5 text-white font-alegraya-sans font-bold leading-none flex items-center justify-center">
                                            {effect.cost}
                                        </span>
                                        <img 
                                            src="../../src/assets/APVector.svg" 
                                            className="h-5 w-auto block"
                                            alt=""
                                        />     
                                        </button>
                                    </span>
                                </div>
                                {effect.description} 
                                {effect.rollTable && (
                                    <div className="p-2 pb-0">
                                        {effect.rollTable?.map((roll,index,array) => (
                                            <div className={`${index === array.length - 1 ? '' : 'border-b'} border-gray-300`}>
                                                <span className='font-semibold font-alegraya-sans text-lg'>{roll.value}:{' '}</span>
                                                {roll.description}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                
                            </div>
                        ))}
                    </div>
                </div>
                </div>
                </div>
                {/* <DialogHeader>
                    <DialogTitle className="font-alegraya font-extrabold text-3xl flex items-center gap-3">
                        {ability.name}
                        {ability.rollTheDie && (
                            <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-md uppercase font-bold tracking-wider">
                                Roll the die
                            </span>
                        )}
                    </DialogTitle>
                    <div className="text-gray-500 uppercase text-sm font-bold tracking-widest">
                        {ability.role} • {ability.path}
                    </div>
                </DialogHeader>

                <div className="space-y-4 my-4">
                    {ability.description && <p className="text-gray-700">{ability.description}</p>}
                    
                    <div className="space-y-3">
                        {ability.effects.map((effect, index) => (
                            <div key={index} className="bg-gray-100 p-3 rounded-lg border border-gray-200">
                                <div className="font-bold flex gap-2 items-center mb-1">
                                    <span className="bg-black text-white px-1.5 py-0.5 rounded text-sm">
                                        {effect.cost} AP
                                    </span>
                                    {effect.name && <span className="uppercase">{effect.name}</span>}
                                </div>
                                <p className="text-gray-800 text-base">{effect.description}</p>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* Botão para escolher a habilidade */}
                <div className="flex justify-end p-4 border-t border-gray-200">
                    <Button 
                        onClick={onClick} 
                        className={isSelected ? 'bg-purple hover:bg-purple text-black border' : ''}
                    >
                        {isSelected ? 'Remove from Character' : 'Add to Character'}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>    
        // </div>
        
    )
}