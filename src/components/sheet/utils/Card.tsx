import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog.tsx";
import Button from "@/components/ui/questbutton.tsx";
import type { Ability } from "@/data/interface.ts";
import { Plus, X } from "lucide-react";

interface CardProps {
  ability: Ability;
  isSelected: boolean;
  onClick: () => void;
  isLast: boolean;
  editing: boolean;
  onDeductAP?: (cost: number) => void;
}

export default function Card({
  ability,
  isSelected,
  onClick,
  isLast,
  editing,
  onDeductAP,
}: CardProps) {
  const baseCost = ability.effects?.[0]?.cost ?? undefined;

  const roleColor = ability.role.toLowerCase().replace(/\s+/g, "-");


  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative h-38 z-9 cursor-pointer -mt-23 overflow-hidden w-full border-b group bg-white rounded-t-lg hover:h-50 hover:-mt-35 transition-all duration-300">
          <div className="w-full h-full relative rounded-t-lg border border-b-0 border-gray-400 p-2.5 pt-2">
            {isLast ? (
              <div
                className={`absolute pointer-events-none justify-center items-center bg-linear-to-t to-transparent bottom-0 left-0 -mb-20 w-full z-9 transition-all animate-in fade-in duration-500 ${isSelected && editing ? `from-${roleColor}/50 h-60` : `from-black/20 h-35`}`}
              ></div>
            ) : (
              <div
                className={`absolute pointer-events-none justify-center items-center bg-linear-to-t to-transparent bottom-0 left-0 w-full z-9 transition-all animate-in fade-in duration-500 ${isSelected && editing ? `from-${roleColor} h-35` : `from-black/50 h-25`}`}
              ></div>
            )}

            {editing && (
            <Button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClick();
              }}
              // bottom-[110px] mantém ele sempre na mesma altura independente da animação
              className={`absolute ${isLast ? "bottom-5" : "bottom-27.5"}  right-5 z-20 size-9 p-0! hidden group-hover:flex animate-in fade-in duration-200 justify-center items-center text-center text-4xl font-bold rounded-lg border  ${isSelected ? "bg-purple text-black" : "bg-white text-black hover:bg-gray-200"}`}
            >
              {isSelected ? (
                <X className="mx-auto size-5" />
              ) : (
                <Plus className="mx-auto size-5" />
              )}
            </Button>
            )}
            

            <div className="flex justify-center -mb-4">
              <div className="px-2 max-w-full">
                <div className="flex items-center justify-center gap-2 px-2 relative max-w-full bg-white">
                  {/* AP */}
                  {baseCost ? (
                    <div className="flex shrink-0 items-center group relative">
                      <button
                        onClick={(e) => {
                          if (editing) return;
                          e.preventDefault(); 
                          e.stopPropagation();
                          if (onDeductAP && typeof baseCost === 'number') {
                            onDeductAP(baseCost);
                          }
                        }}
                        className={`flex items-center tooltip relative h-full cursor-pointer ${editing ? ('') : ('hover:opacity-50 hover:scale-115 transition-all active:scale-95')}`}
                      >
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
                  ) : (
                    ""
                  )}

                  {/* Name */}
                  <div className="flex flex-1 min-w-0 truncate items-center h-full">
                    <span className="font-alegraya-sans lowercase truncate block w-full font-extrabold text-2xl text-center ">
                      {ability.name}
                    </span>
                  </div>

                  {/* Roll */}
                  {ability.path === "Item"
                    ? ability.damage && (
                        <div className="border-3 border-damage px-1.5 text-base/4 font-extrabold font-alegraya-sans text-damage">
                          {ability.damage}
                        </div>
                      )
                    : ability.rollTheDie && (
                        <div className="flex shrink-0 items-center h-full">
                          <button 
                          onClick={editing ? () => {} : () => console.log("!")}
                          className={`font-alegraya-sans cursor-pointer ${editing ? ('') : ('hover:opacity-50 hover:scale-115 transition-all active:scale-95')} lowercase  text-[14px] leading-none flex items-center justify-center bg-gray-50`}>
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
            <div
              className={`border-4 min-h-70 border-${roleColor} rounded-lg text-justify p-3 pt-4`}
            >
              {ability.path === "Item" && (
                <div className="flex flex-wrap justify-center gap-1.5 mb-2 px-1">
                  {/* Tag de Raridade (Role) */}
                  <span className="border border-black px-1.5 py-0.5 text-[10px] font-alegraya-sans font-bold uppercase tracking-wider leading-none">
                    {ability.role}
                  </span>

                  {/* Tag de Espaço  */}
                  <span className="border border-black px-1.5 py-0.5 text-[10px] font-alegraya-sans font-bold uppercase tracking-wider leading-none">
                    {ability.slots === 1 ? "1 slot" : `${ability.slots} slots`}
                  </span>

                  {/* Tag de Rolar o Dado */}
                  {ability.rollTheDie && (
                    <button 
                    onClick={editing ? () => {} : () => console.log("!")}
                    className={`border border-black px-1.5 py-0.5 text-[10px] ${editing ? ('') : ('hover:opacity-50 hover:scale-115 transition-all active:scale-95')} font-alegraya-sans font-bold uppercase tracking-wider leading-none`}>
                      ROLL THE DIE
                    </button>
                  )}
                </div>
              )}
              {/* Description */}
              <div>
                <p className="text-sm mb-1">
                  {ability.description || ability.effects?.[0]?.description}
                </p>
                <div className="space-y-2">
                  {ability.effects?.map((effect, index) => (
                    <div key={index} className="font-ovo text-sm">
                      <div className="font-bold mr-2 inline-block gap-2 items-center">
                        <span className="flex shrink-0 items-center group relative">
                          <span
                            onClick={() => console.log("!")}
                            className="flex items-center tooltip relative h-full transition-all "
                          >
                            <span className="bg-black px-1.5 py-0.5 h-5 text-white font-alegraya-sans font-bold leading-none flex items-center justify-center">
                              {effect.cost}
                            </span>
                            <img
                              src="../../src/assets/APVector.svg"
                              className="h-5 w-auto block"
                              alt=""
                            />
                          </span>
                        </span>
                      </div>
                      {effect.description}
                    </div>
                  ))}
                  {ability.rollTable && (
                    <div className="p-2 pb-0 text-base font-ovo">
                      {ability.rollTable?.map((roll, index, array) => (
                        <div
                          className={`${index === array.length - 1 ? "" : "border-b"} border-gray-300`}
                        >
                          <span className="font-semibold font-alegraya-sans text-lg">
                            {roll.value}:{" "}
                          </span>
                          {roll.description}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Title */}
        </div>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-md max-h-[80vh] gap-0 z-100 overflow-y-auto font-alegraya-sans p-0 font-medium text-lg"
      >
        <div className="flex flex-col relative m-3 mt-7 justify-center items-center">
          <div className="flex items-center justify-center gap-2 px-2 relative -mb-8 grow-0 w-fit -top-4 max-w-full bg-white">
            {/* Name */}
            <div className="flex shrink-0 min-w-0 truncate items-center h-full">
              <span className="font-alegraya-sans lowercase truncate block w-full font-extrabold text-2xl text-center ">
                {ability.name}
              </span>
            </div>
            {ability.path === "Item"
              ? ability.damage && (
                  <div className="border-3 border-damage px-1.5 text-base/4 font-extrabold font-alegraya-sans text-damage">
                    {ability.damage}
                  </div>
                )
              : ""}
          </div>
          <div
            className={`border-4  w-full border-${roleColor} rounded-lg text-justify p-3 pt-0`}
          >
            
              <div className="flex flex-wrap justify-center gap-2 mb-2 mt-4 px-1">
                {ability.path === "Item" && (<>
                {/* Tag de Raridade (Role) */}
                <span className="border border-black px-2 py-1 text-base font-alegraya-sans lowercase tracking-wider leading-none">
                  {ability.role}
                </span>

                {/* Tag de Espaço  */}
                <span className="border border-black px-2 py-1 text-base font-alegraya-sans lowercase tracking-wider leading-none">
                  {ability.slots === 1 ? "1 slot" : `${ability.slots} slots`}
                </span></>
                )}
                {/* Tag de Rolar o Dado */}
                {ability.rollTheDie && (
                  <button 
                    onClick={editing ? () => {} : () => console.log("!")}
                    className={`border border-black px-2 py-1 text-base ${editing ? ('') : ('cursor-pointer hover:opacity-50 hover:scale-110 transition-all active:scale-95')} font-alegraya-sans lowercase tracking-wider leading-none`}>
                      ROLL THE DIE
                    </button>
                )}
              </div>
            
            <div className="space-y-4 my-4">
              {ability.description && (
                <p className="font-ovo text-base">{ability.description}</p>
              )}

              <div className="space-y-2">
                {ability.effects?.map((effect, index) => (
                  <div key={index} className="font-ovo text-base/snug">
                    <div className="font-bold mr-2 inline-block gap-2 items-center">
                      <span className="flex shrink-0 items-center group relative">
                        <button
                          onClick={(e) => {
                          if (editing) return;
                          e.preventDefault(); 
                          e.stopPropagation();
                          if (onDeductAP && typeof baseCost === 'number') {
                            onDeductAP(baseCost);
                          }
                        }}
                          className={`flex items-center tooltip relative h-full ${editing ? ('') : ('hover:opacity-50 cursor-pointer hover:scale-115 transition-all active:scale-95')}  `}
                        >
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
                  </div>
                ))}
                {ability.rollTable && (
                  <div className="p-2 pb-0 text-base font-ovo">
                    {ability.rollTable?.map((roll, index, array) => (
                      <div
                        className={`${index === array.length - 1 ? "" : "border-b"} border-gray-300`}
                      >
                        <span className="font-semibold font-alegraya-sans text-lg">
                          {roll.value}:{" "}
                        </span>
                        {roll.description}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 p-4 border-t border-gray-200">
        <DialogClose asChild>
            <Button type="button" className="shrink rounded-lg text-lg">Close</Button>
                </DialogClose>
            
            <DialogClose asChild>
                <Button 
                    onClick={onClick} 
                    className={isSelected ? `bg-purple hover:opacity-80 text-black border w-full rounded-lg text-lg/3` : 'w-full rounded-lg grow text-lg'}
                >
                    {isSelected ? 'Remove from Character' : 'Add to Character'}
                </Button>
            </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
