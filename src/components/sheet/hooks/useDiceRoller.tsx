import { useRef, useState } from "react";

export function useDiceRoller() {
    const [isRolling, setIsRolling] = useState(false);
    const [rollResult, setRollResult] = useState(0);
    const [spinKey, setSpinKey] = useState(0);
    const rollTimeoutRef = useRef<any>(null);

    const rollD20 = () => {
        if (rollTimeoutRef.current) clearTimeout(rollTimeoutRef.current);
        setSpinKey((prev) => prev + 1);
        setIsRolling(true);
        setRollResult(Math.floor(Math.random() * 20) + 1);
        rollTimeoutRef.current = setTimeout(() => setIsRolling(false), 5000);
    };

    return { isRolling, rollResult, spinKey, rollD20 };
}
