import "@/app/css/style.css";
import statVector from "@/assets/StatVector.svg";
import { Minus, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface StatProps {
  id: string;
  name: string;
  value: number;
  onUpdate: (field: string, newValue: number) => void;
  isOwner?: boolean;
}

export default function Stat({
  id,
  name,
  value,
  onUpdate,
  isOwner,
}: StatProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState<string | number>(value);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isJumping, setIsJumping] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    setInputValue(value);
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setIsJumping(true);
    const timer = setTimeout(() => setIsJumping(false), 200);
    return () => clearTimeout(timer);
  }, [value]);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [isEditing]);

  const handleIncrement = () => {
    onUpdate(id, value + 1);
  };

  const handleDecrement = () => {
    onUpdate(id, value - 1);
  };

  const handleUpdate = () => {
    const newValue = parseInt(inputValue.toString(), 10);
    if (!isNaN(newValue) && newValue !== value) {
      onUpdate(id, newValue);
    }
    setIsEditing(false);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleUpdate();
    }
    if (e.key === "Escape") {
      setInputValue(value);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex flex-row justify-center items-center gap-3">
      {isOwner && (
        <div className="pb-4">
          <button
            className="bg-black rounded-lg cursor-pointer select-none transition-all hover:bg-black/60 hover:scale-105 active:scale-95 text-white p-1.5"
            onClick={handleDecrement}
          >
            <Minus />
          </button>
        </div>
      )}
      <div className="w-full">
        <div
          className={`border rounded-xl overflow-hidden ${isOwner ? "cursor-pointer" : ""}`}
          onClick={isOwner ? () => setIsEditing(true) : undefined}
        >
          {isEditing ? (
            <input
              ref={inputRef}
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onBlur={handleUpdate}
              onKeyDown={handleInputKeyDown}
              className="text-center font-alegraya-sans w-full border-none font-extrabold appearance-none focus:outline-none focus:bg-purple/50 focus:rounded-xl StatInput text-4xl pb-3 pt-0.5"
            />
          ) : (
            <div
              className={`flex justify-center hover:bg-purple/30 items-center font-alegraya-sans transition-transform font-extrabold text-4xl pb-3 pt-0.5`}
            >
              <span
                className={`transition-transform ${isJumping && "scale-125"}`}
              >
                {value}
              </span>
            </div>
          )}
        </div>
        <div className="font-alegraya-sans flex justify-center items-center -mt-3.5 text-white font-bold">
          <img
            src={statVector}
            className="h-7 w-auto block object-contain"
            alt=""
          />

          <div className="text-xl bg-black px-2 h-7 flex items-center -mx-px leading-none">
            <span className="uppercase text-[18px]">{name}</span>
          </div>

          <img
            src={statVector}
            className="h-7 w-auto block object-contain rotate-180"
            alt=""
          />
        </div>
      </div>
      {isOwner && (
        <div className="pb-4 ">
          <button
            className="bg-black rounded-lg cursor-pointer select-none transition-all hover:bg-black/60 hover:scale-105 active:scale-95 text-white p-1.5"
            onClick={handleIncrement}
          >
            <Plus />
          </button>
        </div>
      )}
    </div>
  );
}
