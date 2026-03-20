import { useGlobalAlert } from "@/app/contexts/alertContext/AlertProvider.tsx";
import { useAuth } from "@/app/contexts/authContext/AuthProvider.tsx";
import { db } from "@/app/firebase/firebase.ts";
import Card from "@/components/sheet/utils/card.tsx";
import type { Ability } from "@/data/interface.ts";
import { bookItems } from "@/data/items/index.ts";
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

interface ItemSelectorProps {
  selectedItems: string[];
  onToggleItem: (id: string) => void;
}

export default function ItemSelector({
  selectedItems,
  onToggleItem,
}: ItemSelectorProps) {
  const itemCategories = [
    "All items",
    "Weapons",
    "Useful",
    "Uncommon",
    "Rare",
    "Legendary",
    "Supreme",
    "Custom Items",
  ];

  const [selectedItemCategory, setSelectedItemCategory] =
    useState<string>("All items");

  const [requiresRoll, setRequiresRoll] = useState(false);
  const [rollBlocks, setRollBlocks] = useState([Date.now()]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [customItems, setCustomItems] = useState<Ability[]>([]);

  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [editingItemData, setEditingItemData] = useState<Ability | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const { currentUser } = useAuth();
  const { showAlert } = useGlobalAlert();

  useEffect(() => {
    if (!currentUser?.uid) return;

    const docRef = doc(db, "users", currentUser.uid);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setCustomItems(data.custom_items || []);
      }
    });

    return () => unsubscribe();
  }, [currentUser]);

  const displayedItems = (() => {
    let baseItems = [];
    
    if (selectedItemCategory === "Custom Items") {
      baseItems = customItems;
    } else if (selectedItemCategory === "All items") {
      baseItems = bookItems;
    } else {
      baseItems = bookItems.filter((i) => i.role === selectedItemCategory);
    }
  
    return [...baseItems].sort((a, b) => a.name.localeCompare(b.name));
  })();

  const handleCreateCustomItem = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

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

    const damageInput = formData.get("damage") as string;
    const hasDamage = damageInput && damageInput.trim() !== "";

    const newItem: Ability = {
      id:
        editingItemId ||
        `item_${currentUser?.uid.substring(0, 6)}_${Date.now()}`,
      role: "Custom Items",
      path: "Item",
      name: formData.get("name") as string,
      slots: Number(formData.get("slots")) || 1,
      description: formData.get("description") as string,
      rollTheDie: requiresRoll,
      ...(hasDamage && { damage: Number(damageInput) }),
      ...(rollTable.length > 0 && { rollTable }),
    };

    await createItem(newItem, editingItemId);
  };

  const createItem = async (item: Ability, isEditingId: string | null) => {
    try {
      if (!currentUser?.uid) throw new Error("User not authenticated");
      const docRef = doc(db, "users", currentUser.uid);

      if (isEditingId) {
        const oldItem = customItems.find((i) => i.id === isEditingId);
        if (oldItem) {
          await updateDoc(docRef, {
            custom_items: arrayRemove(oldItem),
          });
        }
      }

      await setDoc(
        docRef,
        {
          custom_items: arrayUnion(item),
        },
        { merge: true },
      );

      closeDialog();
    } catch (error) {
      showAlert("Failed to save custom item.", "Error", "error");
    }
  };

  const deleteItem = async (id: string) => {
    try {
      if (!id || !currentUser?.uid) return;

      const itemToDelete = customItems.find((i) => i.id === id);
      if (!itemToDelete) return;

      const docRef = doc(db, "users", currentUser.uid);
      await updateDoc(docRef, {
        custom_items: arrayRemove(itemToDelete),
      });

      if (selectedItems.includes(id)) {
        onToggleItem(id);
      }
    } catch (error) {
      showAlert("Error deleting item.", "Error", "error");
    }
  };

  const handleEditItem = (id: string) => {
    const itemToEdit = customItems.find((i) => i.id === id);
    if (!itemToEdit) return;

    setEditingItemData(itemToEdit);
    setEditingItemId(id);

    setRequiresRoll(itemToEdit.rollTheDie || false);
    const newRollBlocks = itemToEdit.rollTable?.map(
      (_, i) => Date.now() + 100 + i,
    ) || [Date.now() + 1];
    setRollBlocks(newRollBlocks);

    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setEditingItemId(null);
    setEditingItemData(null);
    setRollBlocks([Date.now() + 1]);
    setRequiresRoll(false);
    if (formRef.current) formRef.current.reset();
  };

  const itemsPerColumn = 5;
  const itemColumns: Ability[][] = [];

  displayedItems.forEach((item, index) => {
    const columnIndex = Math.floor(index / itemsPerColumn);
    if (!itemColumns[columnIndex]) {
      itemColumns[columnIndex] = [];
    }
    itemColumns[columnIndex].push(item);
  });

  return (
    <div className="flex flex-col max-w-[85vw] sm:max-w-[70vw] w-full mx-auto gap-4">
      {/* Filters */}
      <div className="flex flex-row justify-center gap-2 z-20 flex-wrap">
        {itemCategories.map((category) => (
          <div
            key={category}
            onClick={() => setSelectedItemCategory(category)}
            className={`px-2 py-0 font-alegraya-sans lowercase text-xl cursor-pointer bg-white transition-all ${
              selectedItemCategory === category
                ? "border-2 opacity-100 border-black"
                : "border opacity-60 hover:opacity-80"
            }`}
          >
            {category}
          </div>
        ))}
      </div>

      {/* Card Area */}
      <div className="relative w-full min-h-110">
        <div className="absolute top-4 left-0 right-0 bottom-0 w-full bg-gray-200 border border-gray-300 rounded-lg h-[92%]"></div>
        <div
          className={`relative z-10 flex flex-row gap-4 ${selectedItemCategory === "Custom Items" ? "" : "px-4"} pb-4 mb-4 pt-9 -mt-4 overflow-y-clip overflow-x-auto w-full h-full`}
        >
          {displayedItems.length === 0 &&
            selectedItemCategory !== "Custom Items" && (
              <div className="w-full flex items-center justify-center text-gray-500 font-alegraya-sans text-xl h-75">
                No items found for {selectedItemCategory}.
              </div>
            )}

          {/* Custom Items */}
          {selectedItemCategory === "Custom Items" && (
            <div className="flex relative flex-col items-center w-full h-full">
              <div className="flex flex-col w-full shrink-0 gap-4">
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
                        setEditingItemId(null);
                        setEditingItemData(null);
                        setRollBlocks([Date.now() + 1]);
                        setRequiresRoll(false);
                      }}
                      className="bg-white absolute mt-4 max-sm:text-base max-sm:w-[90%] max-sm:left-[5%] w-1/3 left-1/3 top-1 font-bold flex flex-row justify-center items-center text-black border border-black hover:bg-gray-100"
                    >
                      <Plus className="size-4 mr-2" /> Create Custom Item
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-xl max-h-[85vh] overflow-y-auto bg-white">
                    <form
                      ref={formRef}
                      key={editingItemId || "new"}
                      onSubmit={handleCreateCustomItem}
                      className="flex flex-col gap-4"
                    >
                      <DialogHeader>
                        <DialogTitle className="font-alegraya font-extrabold text-3xl">
                          {editingItemId
                            ? "Editing item"
                            : "Creating a new item"}
                        </DialogTitle>
                      </DialogHeader>

                      <div className="grid grid-cols-10 gap-2">
                        {/* Item Name */}
                        <div className="flex flex-col col-span-7">
                          <label className="font-alegraya-sans ml-1 font-bold lowercase text-base">
                            Item Name
                          </label>
                          <input
                            name="name"
                            required
                            autoComplete="off"
                            defaultValue={editingItemData?.name}
                            className="border border-gray-300 p-2 rounded-lg font-ovo text-xl focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple"
                            placeholder="Enchanted Sword"
                          />
                        </div>

                        {/* Roll? */}
                        <div className="flex flex-col col-span-3 h-full">
                          <label className="font-alegraya-sans ml-1 font-bold lowercase text-base">
                            Roll the die?
                          </label>
                          <div className="flex w-full border border-black rounded-lg h-10.5 overflow-hidden font-alegraya-sans font-bold text-lg">
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

                        {/* Slots & Damage */}
                        <div className="flex flex-row col-span-full gap-4 mt-2">
                          <div className="flex flex-col w-1/2 gap-1">
                            <label className="font-alegraya-sans ml-1 font-bold lowercase text-base">
                              Inventory Slots
                            </label>
                            <input
                              name="slots"
                              type="number"
                              min="0"
                              defaultValue={editingItemData?.slots || 1}
                              required
                              className="border border-gray-300 p-2 rounded-lg font-alegraya-sans text-xl focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple text-center"
                            />
                          </div>
                          <div className="flex flex-col w-1/2 gap-1">
                            <label className="font-alegraya-sans ml-1 font-bold lowercase text-base text-gray-600">
                              Damage (Optional)
                            </label>
                            <input
                              name="damage"
                              type="number"
                              min="0"
                              defaultValue={editingItemData?.damage}
                              className="border border-gray-300 p-2 rounded-lg font-alegraya-sans text-xl focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple text-center"
                              placeholder="e.g. 2"
                            />
                          </div>
                        </div>

                        {/* Description */}
                        <div className="flex col-span-full flex-col gap-1 mt-2">
                          <label className="font-alegraya-sans ml-1 font-bold lowercase text-base">
                            Item Description
                          </label>
                          <textarea
                            name="description"
                            required
                            defaultValue={editingItemData?.description}
                            className="border border-gray-300 p-2 rounded-lg font-ovo text-base/5 h-28 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple"
                            placeholder="A glowing sword that emits a faint blue light. It feels warm to the touch."
                          ></textarea>
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
                                  <input
                                    name={`roll_val_${index}`}
                                    type="text"
                                    required
                                    defaultValue={
                                      editingItemData?.rollTable?.[index]?.value
                                    }
                                    className="w-1/4 border bg-white p-2 h-14 rounded-lg font-alegraya-sans text-xl text-center"
                                    placeholder="20"
                                  />
                                  <textarea
                                    name={`roll_desc_${index}`}
                                    required
                                    defaultValue={
                                      editingItemData?.rollTable?.[index]
                                        ?.description
                                    }
                                    className="w-3/4 border bg-white p-2 rounded-lg font-ovo text-sm/4 h-14 resize-none"
                                    placeholder="You strike true, dealing double damage."
                                  ></textarea>
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
                                className="w-full bg-white flex flex-row text-base justify-center items-center shadow-none border border-gray-300"
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
                          {editingItemId ? "Save Changes" : "Create Item"}
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>

                {customItems.length === 0 && (
                  <div className="text-gray-500 font-alegraya-sans mt-24 text-center w-full">
                    You haven't created any custom items yet.
                  </div>
                )}
              </div>

              <div  className="flex flex-row w-full overflow-x-auto p-4 pt-43 gap-4">
                {itemColumns.map((col, colIndex) => (
                  <div
                    key={colIndex}
                    className="flex shrink-0 flex-col max-w-70 w-full"
                  >
                    <div className="mt-0">
                      {col.map((item, index, array) => (
                        <Card
                          key={item.id}
                          ability={item}
                          editing
                          isSelected={selectedItems.includes(item.id)}
                          onClick={() => onToggleItem(item.id)}
                          isLast={index === array.length - 1}
                          onDelete={deleteItem}
                          onEdit={handleEditItem}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Default Items */}
          {selectedItemCategory !== "Custom Items" &&
            itemColumns.map((col, colIndex) => (
              <div
                key={colIndex}
                className="flex shrink-0 flex-col max-w-70 w-full"
              >
                <div className="mt-27">
                  {col.map((item, index, array) => (
                    <Card
                      key={item.id}
                      ability={item}
                      editing
                      isSelected={selectedItems.includes(item.id)}
                      onClick={() => onToggleItem(item.id)}
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
