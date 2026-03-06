// src/components/sheet/AbilitySelector.tsx
import Card from "@/components/sheet/utils/Card.tsx";
import { bookAbilities } from "@/data/abilities/wizard.ts";
import { useState } from "react";

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

  const filteredAbilities = bookAbilities.filter(
    (a) => a.role === selectedRole,
  );
  const currentPaths = Array.from(
    new Set(filteredAbilities.map((a) => a.path)),
  );

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
          <div className="w-full flex items-center justify-center text-gray-500 font-alegraya-sans text-xl h-75">
            No abilities found for {selectedRole}.
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
