// src/components/sheet/AbilitySelector.tsx
import Card from "@/components/sheet/utils/Card.tsx";
import { bookAbilities } from "@/data/abilities/wizard.ts";
import { useState, type FormEventHandler } from "react";
import Button from "../ui/questbutton.tsx";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog.tsx";
import type { Ability } from "@/data/interface.ts";
import { Plus, X } from "lucide-react";

interface AbilitySelectorProps {
  selectedAbilities: string[]; // Array de IDs
  onToggleAbility: (id: string) => void;
}

export default function AbilitySelector({
  selectedAbilities,
  onToggleAbility,
}: AbilitySelectorProps) {
  const roles = [
    "Fighter",
    "Invoker",
    "Ranger",
    "Naturalist",
    "Doctor",
    "Spy",
    "Magician",
    "Wizard",
    "Custom Abilities",
  ];
  const [selectedRole, setSelectedRole] = useState<string>("Wizard");
  const [requiresRoll, setRequiresRoll] = useState(false);
  const [effectBlocks, setEffectBlocks] = useState([Date.now()]); 
  const [rollBlocks, setRollBlocks] = useState([Date.now() + 1]);

  const filteredAbilities = bookAbilities.filter(
    (a) => a.role === selectedRole,
  );
  const currentPaths = Array.from(
    new Set(filteredAbilities.map((a) => a.path)),
  );
  
 const handleCreateCustomAbility = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const dynamicEffects = effectBlocks.map((_, index) => {
      const costVal = formData.get(`cost_${index}`) as string;
      const parsedCost = costVal && !isNaN(Number(costVal)) ? Number(costVal) : (costVal || 0);
      
      return {
        cost: parsedCost,
        description: formData.get(`effect_${index}`) as string,
      };
    });

    const rollTable: { value: string | number; description: string }[] = [];
    if (requiresRoll) {
      rollBlocks.forEach((_, index) => {
        const rVal = formData.get(`roll_val_${index}`) as string;
        const rDesc = formData.get(`roll_desc_${index}`) as string;
        
        
        if (rVal?.trim() && rDesc?.trim()) {
          rollTable.push({ value: rVal, description: rDesc });
        }
      });
    }

    const newAbility: Ability = {
      id: `custom_ability_${Date.now()}`,
      role: "Custom Abilities",
      path: "Custom",
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      rollTheDie: requiresRoll,
      effects: dynamicEffects, 
      ...(rollTable.length > 0 && { rollTable }) 
    };

    console.log("Custom Ability Criada!", newAbility);
    // TODO: Salvar no Firebase
  };

  return (
    <div className="flex flex-col max-w-[90vw] w-full mx-auto gap-4">
      {/* BARRA DE FILTROS */}
      <div className="flex flex-row justify-center gap-2 flex-wrap">
        {roles.map((role) => (
          <div
            key={role}
            onClick={() => setSelectedRole(role)}
            className={`px-2 py-0 font-alegraya-sans lowercase text-xl cursor-pointer transition-all ${
              selectedRole === role
                ? "border-2 opacity-100 border-black"
                : "border opacity-60 hover:opacity-80"
            }`}
          >
            {role}
          </div>
        ))}
      </div>

      {/* ÁREA DE CARTAS */}
      <div className="bg-gray-200 overflow-auto gap-4 flex flex-row p-4 border w-250 max-sm:w-full border-gray-300 rounded-lg min-h-100">
        {currentPaths.length === 0 && (
          <div className="w-full flex gap-4 flex-col items-center justify-center text-gray-500 font-alegraya-sans text-xl h-full">
            No abilities found for {selectedRole}.
            {selectedRole === "Custom Abilities" && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-white font-bold text-black border-2 border-black hover:bg-gray-100">
                    <Plus className="size-4 mr-2" /> Create Custom Ability
                  </Button>
                </DialogTrigger>

                {/* max-w-2xl deixa o modal mais largo pra caber o grid confortavelmente */}
                <DialogContent className="sm:max-w-md max-h-[85vh] overflow-y-auto bg-white">
                  <form onSubmit={handleCreateCustomAbility} className="flex flex-col gap-4">
                    <DialogHeader>
                      <DialogTitle className="font-alegraya font-extrabold text-3xl">Custom Ability</DialogTitle>
                    </DialogHeader>

                    <div className="grid grid-cols-10 gap-2">
                      {/* NOME */}
                      <div className="flex flex-col col-span-7">
                        <label className="font-alegraya-sans ml-1 font-bold lowercase text-base ">Ability Name</label>
                        <input 
                          name="name" 
                          required 
                          autoComplete="off"
                          className="border border-gray-300 p-2 rounded-lg font-ovo text-xl focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple" 
                          placeholder="e.g. Fireball" 
                        />
                      </div>
                      
                      {/* ROLL THE DIE - BOTOES SEGMENTADOS */}
                      <div className="flex flex-col col-span-3 gap-1 mt-2">
                        <label className="font-alegraya-sans ml-1 font-bold lowercase text-base">
                          Roll the die?
                        </label>
                        <div className="flex w-full border border-black rounded-lg overflow-hidden font-alegraya-sans font-bold text-lg">
                          <button
                            type="button"
                            onClick={() => setRequiresRoll(true)}
                            className={`flex-1 py-1 text-center transition-all ${
                              requiresRoll 
                                ? "bg-black text-white" 
                                : "bg-white text-gray-400 hover:bg-gray-100"
                            }`}
                          >
                            YES
                          </button>
                          
                          <div className="w-px bg-black"></div>
                          
                          <button
                            type="button"
                            onClick={() => setRequiresRoll(false)}
                            className={`flex-1 py-1 text-center transition-all ${
                              !requiresRoll 
                                ? "bg-black text-white" 
                                : "bg-white text-gray-400 hover:bg-gray-100"
                            }`}
                          >
                            NO
                          </button>
                        </div>
                      </div>

                      {/* DESCRIÇÃO GERAL */}
                      <div className="flex col-span-full flex-col gap-1">
                        <label className="font-alegraya-sans ml-1 font-bold lowercase text-base">General Description</label>
                        <textarea 
                          name="description" 
                          className="border border-gray-300 p-2 rounded-lg font-ovo text-lg h-28 resize-none focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple" 
                          placeholder="Describe what the ability does generally..."
                        ></textarea>
                      </div>
                      
                      <hr className="col-span-full mt-2 border-gray-200"></hr>

                      {/* LOOP DE EFEITOS DINÂMICOS (SEM DAMAGE) */}
                      {effectBlocks.map((blockId, index) => (
                        <div key={blockId} className="col-span-full flex flex-col gap-2 relative mt-2">
                          
                          {effectBlocks.length > 1 && (
                            <button 
                              type="button" 
                              onClick={() => setEffectBlocks(effectBlocks.filter(id => id !== blockId))}
                              className="absolute top-0 right-1 text-red-400 hover:text-red-600 font-alegraya-sans lowercase text-sm font-bold"
                            >
                              Remove effect
                            </button>
                          )}

                          <div className="flex flex-col w-1/4 gap-1">
                            <label className="font-alegraya-sans ml-1 font-bold lowercase text-base">AP Cost</label>
                            <input 
                              name={`cost_${index}`} 
                              type="text" 
                              required
                              className="border border-gray-300 p-2 rounded-lg font-alegraya-sans text-xl focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple text-center" 
                              placeholder="e.g. 2" 
                            />
                          </div>

                          <div className="flex flex-col gap-1">
                            <label className="font-alegraya-sans ml-1 font-bold lowercase text-base">Effect Description</label>
                            <textarea 
                              name={`effect_${index}`} 
                              required 
                              className="border border-gray-300 p-2 rounded-lg font-ovo text-lg h-20 resize-none focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple" 
                              placeholder="What does this AP cost do?"
                            ></textarea>
                          </div>

                          {index < effectBlocks.length - 1 && <hr className="col-span-full mt-4 border-gray-200"></hr>}
                        </div>
                      ))}
                      
                      {/* BOTÃO ADD ANOTHER EFFECT */}
                      <div className="col-span-full mt-1">
                        <Button 
                          type="button" 
                          onClick={() => setEffectBlocks([...effectBlocks, Date.now()])}
                          className="w-full bg-white text-black border-2 border-dashed border-gray-300 shadow-none hover:bg-gray-50 hover:border-gray-400"
                        >
                          <Plus className="size-4 mr-2" /> Add another effect
                        </Button>
                      </div>

                      {/* TABELA DE ROLAGEM DINÂMICA (Só aparece se YES) */}
                      {requiresRoll && (
                        <>
                          <hr className="col-span-full mt-2 border-gray-200"></hr>
                          <div className="col-span-full flex flex-col gap-3 mt-2 bg-purple/5 p-3 border border-purple/20 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
                            <label className="font-alegraya-sans ml-1 font-bold lowercase text-base text-purple">Roll Outcomes</label>
                            
                            {rollBlocks.map((blockId, index) => (
                              <div key={blockId} className="flex gap-2 relative group items-start">
                                {/* CAMPO DO VALOR DO DADO (Ex: 12-14) */}
                                <input 
                                  name={`roll_val_${index}`} 
                                  type="text" 
                                  required 
                                  className="w-1/4 border border-gray-300 p-2 rounded-lg font-alegraya-sans text-xl text-center focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple" 
                                  placeholder="e.g. 20" 
                                />
                                
                                {/* DESCRIÇÃO DA ROLAGEM */}
                                <textarea 
                                  name={`roll_desc_${index}`} 
                                  required 
                                  className="w-3/4 border border-gray-300 p-2 rounded-lg font-ovo text-lg h-14 resize-none focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple" 
                                  placeholder="What happens?"
                                ></textarea>
                                
                                {/* BOTÃO DE REMOVER ROLAGEM */}
                                {rollBlocks.length > 1 && (
                                  <button 
                                    type="button" 
                                    onClick={() => setRollBlocks(rollBlocks.filter(id => id !== blockId))}
                                    className="absolute -right-2 -top-2 text-red-400 hover:text-red-600 bg-white border border-gray-200 rounded-full p-1 shadow-sm"
                                  >
                                    <X className="size-4" />
                                  </button>
                                )}
                              </div>
                            ))}
                            
                            {/* BOTÃO ADD OUTCOME */}
                            <Button 
                              type="button" 
                              onClick={() => setRollBlocks([...rollBlocks, Date.now()])}
                              className="w-full bg-white text-purple border-2 border-dashed border-purple/40 shadow-none hover:bg-purple/10"
                            >
                              <Plus className="size-4 mr-2" /> Add another roll outcome
                            </Button>
                          </div>
                        </>
                      )}

                    </div>

                    {/* BOTÕES */}
                    <DialogFooter className="mt-4 sm:justify-end gap-4">
                      <DialogClose asChild>
                        <Button type="button" className="text-black bg-transparent shadow-none hover:bg-gray-100">
                          Cancel
                        </Button>
                      </DialogClose>
                      <Button type="submit" className="bg-purple text-black border border-black hover:opacity-80">
                        Create Ability
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            )}
          </div>
        )}
        {currentPaths.map((path) => (
          <div key={path} className="flex shrink-0 flex-col max-w-70">
            <div className="font-alegraya-sans text-xl lowercase text-center bg-white border">
              {path}
            </div>
            <div className="mt-27 pb-0">
              {filteredAbilities
                .filter((a) => a.path === path)
                .map((ability, index, array) => (
                  <Card
                    key={ability.id}
                    ability={ability}
                    editing
                    isSelected={selectedAbilities.includes(ability.id)}
                    onClick={() => onToggleAbility(ability.id)}
                    isLast={index === array.length - 1}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
