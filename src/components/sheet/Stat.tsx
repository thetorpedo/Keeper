import { doc, increment, updateDoc } from "firebase/firestore";
import { Minus, Plus } from "lucide-react";
import { useEffect, useRef, useState } from 'react';
import '../../app/css/style.css';
import { db } from '../../app/firebase/firebase.ts';

interface StatProps {
  id: string;
  name: string;
  value: number;
}

export default function Stat({ id, name, value }: StatProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState<string | number>(value);
  const inputRef = useRef<HTMLInputElement>(null);

  // Se o valor do Firestore mudar, atualize o nosso valor de input
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // Foca no input quando entramos no modo de edição
  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [isEditing]);

  const handleIncrement = async () => {
    const statRef = doc(db, "stats", id);
    await updateDoc(statRef, { value: increment(1) });
  };

  const handleDecrement = async () => {
    const statRef = doc(db, "stats", id);
    await updateDoc(statRef, { value: increment(-1) });
  };

  const handleUpdate = async () => {
    const newValue = parseInt(inputValue.toString(), 10);
    if (!isNaN(newValue) && newValue !== value) {
      const statRef = doc(db, "stats", id);
      await updateDoc(statRef, { value: newValue });
    }
    setIsEditing(false);
  };

  const handleInputKeyDown = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      handleUpdate();
    }
    if (e.key === 'Escape') {
      setInputValue(value); // Reverte a edição
      setIsEditing(false);
    }
  };

  return (
    <div className='flex flex-row justify-center items-center gap-3'>
      <div className="pb-4"><div className='bg-black rounded-lg cursor-pointer transition-all hover:bg-black/60 hover:scale-105 active:scale-95 text-white p-1.5' onClick={handleDecrement}><Minus /></div></div>
      <div className='w-full'>
        <div className="border rounded-xl" onClick={() => setIsEditing(true)}>
          {isEditing ? (
            <input
              ref={inputRef}
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onBlur={handleUpdate}
              onKeyDown={handleInputKeyDown}
              className='text-center font-alegraya-sans w-full border-none font-extrabold appearance-none focus:outline-none focus:bg-purple/50 focus:rounded-xl StatInput text-4xl pb-3 pt-0.5'
            />
          ) : (
            <div className='flex justify-center hover:bg-purple/30 items-center font-alegraya-sans font-extrabold text-4xl pb-3 pt-0.5'><span>{value}</span></div>
          )}
        </div>
        <div className='font-alegraya-sans flex justify-center items-center -mt-3.5 text-white font-bold'>
            <img 
              src="../../src/assets/StatVector.svg" 
              className="h-7 w-auto block object-contain" 
              alt=""
            />
            
            <div className='text-xl bg-black px-2 h-7 flex items-center -mx-px leading-none'>
              <span className="uppercase text-[18px]">{name}</span>
            </div>

            <img 
              src="../../src/assets/StatVector.svg" 
              className="h-7 w-auto block object-contain rotate-180" 
              alt=""
            />
          </div>
      </div>
      <div className="pb-4 "><button className='bg-black rounded-lg cursor-pointer transition-all hover:bg-black/60 hover:scale-105 active:scale-95 text-white p-1.5' onClick={handleIncrement}><Plus /></button></div>
    </div>
  )
}
