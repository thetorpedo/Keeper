import { useEffect, useRef, useState } from "react";

interface EditableTextProps {
  value: string;
  onSave: (newValue: string) => void; 
  type?: "text" | "number";
  name?: boolean;   
  isOwner?: boolean;       
}

export default function EditableText({ value, onSave, type = "text", name = false, isOwner }: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState<string>(value);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputWidth, setInputWidth] = useState<number>(0);
  const measureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    if (isEditing && measureRef.current) {
        setInputWidth(measureRef.current.offsetWidth);
    }
  }, [inputValue, isEditing]);

  const handleUpdate = () => {
    if (inputValue !== value) {
      onSave(inputValue);
    }
    setIsEditing(false);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleUpdate();
    }
    if (e.key === 'Escape') {
      setInputValue(value); 
      setIsEditing(false);
    }
  };

const fontClasses = `font-alegraya-sans ${!name && 'lowercase'} max-sm:text-[18px] text-[22px] font-bold`;

  return (
    
    <span className={`inline-flex items-center ${isOwner && 'cursor-pointer'} group relative`}>
      {isEditing && (
        <span
            ref={measureRef}
            className={`${fontClasses} absolute opacity-0 -z-50 pointer-events-none whitespace-pre px-1`}
            aria-hidden="true"
        >
            {inputValue || ' '}
        </span>
      )}

      {isEditing ? (
        <input
          ref={inputRef}
          type={type}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleUpdate}
          onKeyDown={handleInputKeyDown}
          style={{ width: inputWidth ? `${inputWidth}px` : 'auto' }}
          className={`${fontClasses} bg-purple/50 border-transparent border-b focus:outline-none rounded-md px-1 text-left m-0`}
        />
      ) : (
        <span
          onClick={isOwner ? (() => setIsEditing(true)) : undefined}
          className={`${fontClasses} border-b border-transparent underline decoration-1 underline-offset-3 decoration-gray-400 ${isOwner && 'hover:decoration-2 hover:decoration-black'} transition-colors px-1`}
        >
          {value}
        </span>
      )}
    </span>
  );
}