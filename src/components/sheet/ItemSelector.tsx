// src/components/sheet/ItemSelector.tsx
import Card from "@/components/sheet/utils/Card.tsx";
import type { Ability } from "@/data/interface.ts";
import { bookItems } from "@/data/items/items.ts";
import { useState } from "react";

interface ItemSelectorProps {
  selectedItems: string[]; // Array de IDs
  onToggleItem: (id: string) => void;
}

export default function ItemSelector({
  selectedItems,
  onToggleItem,
}: ItemSelectorProps) {
  const itemCategories = [
    "All items",
    "Useful",
    "Uncommon",
    "Rare",
    "Legendary",
    "Custom Items",
  ];
  const [selectedItemCategory, setSelectedItemCategory] =
    useState<string>("All items");

  const filteredItems =
    selectedItemCategory === "All items"
      ? bookItems
      : bookItems.filter((i) => i.role === selectedItemCategory);

  const ITEMS_PER_COL = 5;
  const itemColumns: Ability[][] = [];

  filteredItems.forEach((item, index) => {
    const columnIndex = Math.floor(index / ITEMS_PER_COL);
    if (!itemColumns[columnIndex]) {
      itemColumns[columnIndex] = [];
    }
    itemColumns[columnIndex].push(item);
  });

  return (
    <div className="flex flex-col max-w-[90vw] w-full mx-auto gap-4">
      {/* BARRA DE FILTROS DE ITENS */}
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

      {/* ÁREA DE CARTAS DOS ITENS */}
      <div className="relative sm:w-250 min-h-110">
        <div className="absolute top-4 left-0 right-0 bottom-0 w-full bg-gray-200 border border-gray-300 rounded-lg h-[92%]"></div>
        <div className="relative z-10 flex flex-row gap-4 px-4 pb-4 mb-4 pt-9 -mt-4 overflow-y-clip overflow-x-auto w-full h-full">
          {filteredItems.length === 0 && (
            <div className="w-full flex items-center justify-center text-gray-500 font-alegraya-sans text-xl h-75">
              No items found for {selectedItemCategory}.
            </div>
          )}
          {itemColumns.map((col, colIndex) => (
            <div
              key={colIndex}
              className="flex shrink-0 flex-col max-w-70 w-full"
            >
              <div className="mt-27">
                {col.map((item, index, array) => (
                  <Card
                    key={item.id}
                    ability={item}
                    addShortcut
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
