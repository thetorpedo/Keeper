import { useEffect, useRef, useState } from "react";

interface EditableTextProps {
  value: string;
  onSave: (newValue: string) => void; 
  type?: "text" | "number";
  name?: boolean;   
  isOwner?: boolean;       
}

export default function EditableText({ value, onSave, name = false, isOwner }: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current && !isEditing) {
      textRef.current.innerText = value;
    }
  }, [value, isEditing]);


  useEffect(() => {
    if (isEditing && textRef.current) {
      textRef.current.focus();
      
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(textRef.current);
      range.collapse(false); 
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
  }, [isEditing]);

  const handleUpdate = () => {
    if (textRef.current) {
      const newValue = textRef.current.innerText.trim();
      if (newValue !== value && newValue !== "") {
        onSave(newValue);
      } else {
        textRef.current.innerText = value;
      }
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      handleUpdate();
    }
    if (e.key === 'Escape') {
      if (textRef.current) textRef.current.innerText = value;
      setIsEditing(false);
    }
  };

  const fontClasses = `font-alegraya-sans ${!name && 'lowercase'} max-sm:text-[18px] text-[22px] font-bold`;

  return (
    <span
      ref={textRef}
      contentEditable={isEditing}
      suppressContentEditableWarning={true}
      spellCheck={false} 
      onClick={isOwner && !isEditing ? () => setIsEditing(true) : undefined}
      onBlur={isEditing ? handleUpdate : undefined}
      onKeyDown={isEditing ? handleKeyDown : undefined}
      className={`${fontClasses} inline wrap-break-word outline-none px-1 py-1 transition-colors
        ${isEditing 
          ? 'bg-purple/50 rounded cursor-text'
          : `border-b border-transparent underline decoration-1 underline-offset-3 decoration-gray-400 ${isOwner ? 'hover:decoration-2 hover:decoration-black cursor-pointer' : ''}`
        }
      `}
    >
      {value}
    </span>
  );
}