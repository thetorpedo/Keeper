import { useGlobalAlert } from "@/app/contexts/alertContext/AlertProvider.tsx";
import { useAuth } from "@/app/contexts/authContext/AuthProvider.tsx";
import { db } from "@/app/firebase/firebase.ts";
import indicatorImg from "@/assets/indicator.png";
import Card from "@/components/sheet/utils/card.tsx";
import { bookAbilities } from "@/data/abilities/index.ts";
import type { Ability } from "@/data/interface.ts";
import {
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { Plus, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog.tsx";
import Button from "../ui/questbutton.tsx";

interface AbilitySelectorProps {
  selectedAbilities: string[];
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [customAbilities, setCustomAbilities] = useState<Ability[]>([]);
  const [editingAbilityId, setEditingAbilityId] = useState<string | null>(null);
  const [editingAbilityData, setEditingAbilityData] = useState<Ability | null>(
    null,
  );
  const formRef = useRef<HTMLFormElement>(null);

  const { currentUser } = useAuth();
  const { showAlert } = useGlobalAlert();

  useEffect(() => {
    if (!currentUser?.uid) return;

    const docRef = doc(db, "users", currentUser.uid);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setCustomAbilities(data.custom_abilities || []);
      }
    });

    return () => unsubscribe();
  }, [currentUser]);

  const displayedAbilities =
    selectedRole === "Custom Abilities"
      ? customAbilities
      : bookAbilities.filter((a) => a.role === selectedRole);

  const currentPaths = Array.from(
    new Set(displayedAbilities.map((a) => a.path)),
  );

  const handleCreateCustomAbility = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const dynamicEffects = effectBlocks.map((_, index) => {
      const costVal = formData.get(`cost_${index}`) as string;
      const parsedCost =
        costVal && !isNaN(Number(costVal)) ? Number(costVal) : costVal || 0;

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
      id:
        editingAbilityId ||
        `ability_${currentUser?.uid.substring(0, 6)}_${Date.now()}`,
      role: "Custom Abilities",
      path: "Custom",
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      rollTheDie: requiresRoll,
      effects: dynamicEffects,
      ...(rollTable.length > 0 && { rollTable }),
    };

    await createAbility(newAbility, editingAbilityId);
  };

  const createAbility = async (
    ability: Ability,
    isEditingId: string | null,
  ) => {
    try {
      if (!currentUser?.uid) throw new Error("User not authenticated");
      const docRef = doc(db, "users", currentUser.uid);

      if (isEditingId) {
        const oldAbility = customAbilities.find((a) => a.id === isEditingId);
        if (oldAbility) {
          await updateDoc(docRef, {
            custom_abilities: arrayRemove(oldAbility),
          });
        }
      }

      await setDoc(
        docRef,
        {
          custom_abilities: arrayUnion(ability),
        },
        { merge: true },
      );

      closeDialog();
    } catch (error) {
      showAlert("Failed to save custom ability.", "Error", "error");
    }
  };

  const itemsPerColumn = 5;
  const itemColumns: Ability[][] = [];

  if (selectedRole === "Custom Abilities") {
    displayedAbilities.forEach((item, index) => {
      const columnIndex = Math.floor(index / itemsPerColumn);
      if (!itemColumns[columnIndex]) itemColumns[columnIndex] = [];
      itemColumns[columnIndex].push(item);
    });
  }

  const deleteAbility = async (id: string) => {
    try {
      if (!id || !currentUser?.uid) return;

      const abilityToDelete = customAbilities.find((a) => a.id === id);
      if (!abilityToDelete) return;

      const docRef = doc(db, "users", currentUser.uid);
      await updateDoc(docRef, {
        custom_abilities: arrayRemove(abilityToDelete),
      });

      if (selectedAbilities.includes(id)) {
        onToggleAbility(id);
      }
    } catch (error) {
      console.error("Error deleting ability:", error);
    }
  };

  const handleEditAbility = (id: string) => {
    const abilityToEdit = customAbilities.find((a) => a.id === id);
    if (!abilityToEdit) return;

    setEditingAbilityData(abilityToEdit);
    setEditingAbilityId(id);

    const newEffectBlocks = abilityToEdit.effects?.map(
      (_, i) => Date.now() + i,
    ) || [Date.now()];
    setEffectBlocks(newEffectBlocks);

    setRequiresRoll(abilityToEdit.rollTheDie || false);
    const newRollBlocks = abilityToEdit.rollTable?.map(
      (_, i) => Date.now() + 100 + i,
    ) || [Date.now() + 1];
    setRollBlocks(newRollBlocks);

    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setEditingAbilityId(null);
    setEditingAbilityData(null);
    setEffectBlocks([Date.now()]);
    setRollBlocks([Date.now() + 1]);
    setRequiresRoll(false);
    if (formRef.current) formRef.current.reset();
  };

  return (
    <div className="flex flex-col relative max-w-[90vw] w-full mx-auto gap-4">
      {/* Filters */}
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

      {/* Cards Area */}
      <div className=" relative">
        {selectedRole !== "Custom Abilities" && (
          <img
            src={indicatorImg}
            className="h-100 absolute max-md:hidden -left-8 top-1/2 transform -translate-y-1/2"
          ></img>
        )}
        <div
          className={`bg-gray-200 overflow-auto ${selectedRole === "Custom Abilities" ? "" : "p-4"} gap-4 flex flex-row border w-250 max-sm:w-full border-gray-300 rounded-lg min-h-100`}
        >
          {currentPaths.length === 0 && selectedRole !== "Custom Abilities" && (
            <div className="w-full flex gap-4 flex-col items-center justify-center text-gray-500 font-alegraya-sans text-xl h-full">
              No abilities found for {selectedRole}.
            </div>
          )}

          {/* Custom Abilities */}
          {selectedRole === "Custom Abilities" && (
            <div className="flex relative flex-col items-center gap-6 w-full h-full">
              <div className="flex flex-col w-full just shrink-0 max-w-70 gap-4">
                <Dialog
                  open={isDialogOpen}
                  onOpenChange={(open) => {
                    setIsDialogOpen(open);
                    if (!open) closeDialog();
                  }}
                >
                  <DialogTrigger asChild>
                    <Button
                      onClick={() => {
                        setEditingAbilityId(null);
                        setEditingAbilityData(null);
                        setEffectBlocks([Date.now()]);
                        setRollBlocks([Date.now() + 1]);
                        setRequiresRoll(false);
                      }}
                      className="bg-white absolute mt-4 max-sm:text-base max-sm:w-[90%] max-sm:left-[5%] w-1/3 left-1/3 top-1 font-bold flex flex-row justify-center items-center text-black border border-black hover:bg-gray-100"
                    >
                      <Plus className="size-4 mr-2" /> Create Custom Ability
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-xl max-h-[85vh] overflow-y-auto bg-white">
                    <form
                      key={editingAbilityId || "new"}
                      onSubmit={handleCreateCustomAbility}
                      className="flex flex-col gap-4"
                    >
                      <DialogHeader>
                        <DialogTitle className="font-alegraya font-extrabold text-3xl">
                          {editingAbilityId
                            ? "Editing ability"
                            : "Creating a new ability"}
                        </DialogTitle>
                      </DialogHeader>

                      <div className="grid grid-cols-10 gap-2">
                        {/* Ability Name */}
                        <div className="flex flex-col col-span-7">
                          <label className="font-alegraya-sans ml-1 font-bold lowercase text-base ">
                            Ability Name
                          </label>
                          <input
                            name="name"
                            required
                            autoComplete="off"
                            defaultValue={editingAbilityData?.name}
                            className="border border-gray-300 p-2 rounded-lg font-ovo text-xl focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple"
                            placeholder="Fireball"
                          />
                        </div>

                        {/* Roll? */}
                        <div className="flex flex-col col-span-3 h-full">
                          <label className="font-alegraya-sans ml-1 font-bold lowercase text-base">
                            Roll the die?
                          </label>
                          <div className="flex w-full border h-full border-black rounded-lg overflow-hidden font-alegraya-sans font-bold text-lg">
                            <button
                              type="button"
                              onClick={() => setRequiresRoll(true)}
                              className={`flex-1 py-1 h-full cursor-pointer text-center transition-all ${
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
                              className={`flex-1 py-1 h-full cursor-pointer text-center transition-all ${
                                !requiresRoll
                                  ? "bg-black text-white"
                                  : "bg-white text-gray-400 hover:bg-gray-100"
                              }`}
                            >
                              NO
                            </button>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="flex col-span-full flex-col gap-1">
                          <label className="font-alegraya-sans ml-1 font-bold lowercase text-base">
                            General Description
                          </label>
                          <textarea
                            name="description"
                            defaultValue={editingAbilityData?.description}
                            className="border border-gray-300 p-2 rounded-lg font-ovo text-base/5 h-28 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple"
                            placeholder="You point your finger, and a ball of fire is hurled at that direction."
                          ></textarea>
                        </div>

                        <hr className="col-span-full mt-2 border-gray-200"></hr>

                        {/* Effects */}
                        {effectBlocks.map((blockId, index) => (
                          <div
                            key={blockId}
                            className="col-span-full flex flex-col gap-2 relative mt-2"
                          >
                            {effectBlocks.length > 1 && (
                              <button
                                type="button"
                                onClick={() =>
                                  setEffectBlocks(
                                    effectBlocks.filter((id) => id !== blockId),
                                  )
                                }
                                className="absolute top-0 cursor-pointer right-1 text-red-400 hover:text-red-600 font-alegraya-sans lowercase text-sm font-bold"
                              >
                                <Trash2 className="size-5" />
                              </button>
                            )}

                            <div className="flex flex-col w-1/4">
                              <label className="font-alegraya-sans ml-1 font-bold lowercase text-base">
                                AP Cost
                              </label>
                              <input
                                name={`cost_${index}`}
                                type="text"
                                required
                                defaultValue={
                                  editingAbilityData?.effects?.[index]?.cost
                                }
                                className="border border-gray-300 p-2 rounded-lg font-alegraya-sans text-xl focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple text-center"
                                placeholder="3"
                              />
                            </div>

                            <div className="flex flex-col">
                              <label className="font-alegraya-sans ml-1 font-bold lowercase text-base">
                                Effect Description
                              </label>
                              <textarea
                                name={`effect_${index}`}
                                required
                                defaultValue={
                                  editingAbilityData?.effects?.[index]
                                    ?.description
                                }
                                className="border border-gray-300 p-2 rounded-lg font-ovo text-base/5 h-20 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple"
                                placeholder="The fireball explodes on impact dealing 2 points of damage to everyone nearby."
                              ></textarea>
                            </div>

                            {index < effectBlocks.length - 1 && (
                              <hr className="col-span-full mt-4 border-gray-200"></hr>
                            )}
                          </div>
                        ))}

                        <div className="col-span-full mt-1">
                          <Button
                            type="button"
                            onClick={() =>
                              setEffectBlocks([...effectBlocks, Date.now()])
                            }
                            className="w-full shadow-none text-base flex flex-row justify-center items-center border"
                          >
                            <Plus className="size-4 mr-2" /> Add another effect
                          </Button>
                        </div>

                        {/* Roll Table */}
                        {requiresRoll && (
                          <>
                            <hr className="col-span-full mt-2 border-gray-200"></hr>
                            <div className="col-span-full flex flex-col gap-3 mt-2 bg-gray-100 p-3 border border-gray-200 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
                              <label className="font-alegraya-sans ml-1 font-bold lowercase text-base">
                                Roll Outcomes
                              </label>

                              {rollBlocks.map((blockId, index) => (
                                <div
                                  key={blockId}
                                  className="flex gap-2 relative group items-start"
                                >
                                  {/* Value */}
                                  <input
                                    name={`roll_val_${index}`}
                                    type="text"
                                    required
                                    defaultValue={
                                      editingAbilityData?.rollTable?.[index]
                                        ?.value
                                    }
                                    className="w-1/4 border bg-white p-2 h-14 rounded-lg font-alegraya-sans text-xl text-center"
                                    placeholder="20"
                                  />

                                  {/* Roll Effect */}
                                  <textarea
                                    name={`roll_desc_${index}`}
                                    required
                                    defaultValue={
                                      editingAbilityData?.rollTable?.[index]
                                        ?.description
                                    }
                                    className="w-3/4 border bg-white p-2 rounded-lg font-ovo text-sm/4 h-14"
                                    placeholder="The fireball is hurled perfectly..."
                                  ></textarea>

                                  {/* Remove Effect */}
                                  {rollBlocks.length > 1 && (
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setRollBlocks(
                                          rollBlocks.filter(
                                            (id) => id !== blockId,
                                          ),
                                        )
                                      }
                                      className="absolute cursor-pointer -right-2 -top-2 text-red-400 hover:text-red-600 bg-white border rounded-none p-1"
                                    >
                                      <Trash2 className="size-4" />
                                    </button>
                                  )}
                                </div>
                              ))}

                              <Button
                                type="button"
                                onClick={() =>
                                  setRollBlocks([...rollBlocks, Date.now()])
                                }
                                className="w-full bg-white flex flex-row text-base justify-center items-center shadow-none border"
                              >
                                <Plus className="size-4 mr-2" /> Add another
                                roll outcome
                              </Button>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Save */}
                      <DialogFooter className="mt-4 sm:justify-end gap-4">
                        <Button
                          type="button"
                          onClick={closeDialog}
                          className="text-black bg-transparent hover:bg-gray-100"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          className="bg-purple text-black border border-black hover:opacity-80"
                        >
                          {editingAbilityId ? "Save Changes" : "Create Ability"}
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>

                {customAbilities.length === 0 && (
                  <div className="text-gray-500 font-alegraya-sans mt-4 text-center">
                    You haven't created any custom abilities yet.
                  </div>
                )}
              </div>

              <div className="flex flex-row w-full overflow-x-auto p-4 pt-35 gap-4">
                {itemColumns.map((col, colIndex) => (
                  <div
                    key={colIndex}
                    className="flex shrink-0 flex-col max-w-70 w-full"
                  >
                    <div className="mt-0.75">
                      {col.map((item, index, array) => (
                        <Card
                          key={item.id}
                          ability={item}
                          editing
                          isSelected={selectedAbilities.includes(item.id)}
                          onClick={() => onToggleAbility(item.id)}
                          isLast={index === array.length - 1}
                          onDelete={deleteAbility}
                          onEdit={handleEditAbility}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Default Abilities */}
          {selectedRole !== "Custom Abilities" &&
            currentPaths.map((path) => (
              <div key={path} className="flex shrink-0 flex-col max-w-70">
                <div className="font-alegraya-sans text-xl lowercase text-center bg-white border">
                  {path}
                </div>
                <div className="mt-27 pb-0">
                  {displayedAbilities
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
    </div>
  );
}
