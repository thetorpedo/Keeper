import { useState, useEffect, useRef } from 'react';
import '../../css/Stat.css';
import { db } from '../../firebase';
import { doc, updateDoc, increment } from "firebase/firestore";

export default function Stat({ id, name, value }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef(null);

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
    const newValue = parseInt(inputValue, 10);
    if (!isNaN(newValue) && newValue !== value) {
      const statRef = doc(db, "stats", id);
      await updateDoc(statRef, { value: newValue });
    }
    setIsEditing(false);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleUpdate();
    }
    if (e.key === 'Escape') {
      setInputValue(value); // Reverte a edição
      setIsEditing(false);
    }
  };

  return (
    <div className='Stat'>
      <div className='Decrement' onClick={handleDecrement}></div>
      <div className='StatMain'>
        <div className="StatBox" onClick={() => setIsEditing(true)}>
          {isEditing ? (
            <input
              ref={inputRef}
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onBlur={handleUpdate} // Salva quando o input perde o foco
              onKeyDown={handleInputKeyDown} // Salva com Enter, cancela com Esc
              className='StatInput'
            />
          ) : (
            <div className='StatValue'><span>{value}</span></div>
          )}
        </div>
        <div className='StatNameBox'>
          <div className='LeftVector'></div>
          <div className='StatName'><span>{name}</span></div>
          <div className='RightVector'></div>
        </div>
      </div>
      <div className='Increment' onClick={handleIncrement}></div>
    </div>
  )
}
