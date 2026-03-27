import { useGlobalAlert } from "@/app/contexts/alertContext/AlertProvider.tsx";
import { db } from "@/app/firebase/firebase.ts";
import type { Note } from "@/components/sheet/notes-manager.tsx";
import { bookAbilities } from "@/data/abilities/index.ts";
import type { Ability } from "@/data/interface.ts";
import { bookItems } from "@/data/items/index.ts";
import {
    deleteDoc,
    doc,
    getDoc,
    onSnapshot,
    setDoc,
    updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useCharacter(id: string | undefined, currentUser: any) {
    const [character, setCharacter] = useState<any>(null);
    const [notes, setNotes] = useState<Note[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { showAlert } = useGlobalAlert();

    const [userCustomAbilities, setUserCustomAbilities] = useState<Ability[]>(
        [],
    );
    const [userCustomItems, setUserCustomItems] = useState<Ability[]>([]);

    const isOwner = Boolean(
        currentUser && character && character.ownerId === currentUser.uid,
    );

    useEffect(() => {
        if (!id) return;
        const fetchCharacter = async () => {
            try {
                const docRef = doc(db, "characters", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setCharacter(docSnap.data());
                } else {
                    console.log("Ficha não encontrada!");
                }
            } catch (error) {
                console.error("Erro ao buscar personagem:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCharacter();
    }, [id]);

    useEffect(() => {
        const ownerId =
            character?.ownerId || character?.userId || character?.uid;
        if (!ownerId) return;
        const unsubscribe = onSnapshot(doc(db, "users", ownerId), (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data();
                setUserCustomAbilities(data.custom_abilities || []);
                setUserCustomItems(data.custom_items || []);
            }
        });
        return () => unsubscribe();
    }, [character]);

    useEffect(() => {
        if (!id || !isOwner || !currentUser) {
            setNotes([]);
            return;
        }
        const notesRef = doc(db, "characters", id, "private", "notes");
        const unsubscribe = onSnapshot(notesRef, (docSnap) => {
            if (docSnap.exists()) {
                setNotes(docSnap.data().content || []);
            }
        });
        return () => unsubscribe();
    }, [id, isOwner, currentUser]);

    const updateField = async (field: string, newValue: string) => {
        if (!character || !id) return;
        if (newValue.replace(/\s+/g, "") === "") {
            newValue = field;
            newValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);
        }
        setCharacter((prev: any) => ({ ...prev, [field]: newValue }));
        await updateDoc(doc(db, "characters", id), { [field]: newValue });
    };

    const updateStat = async (field: string, newValue: number) => {
        if (!character || !id) return;
        setCharacter((prev: any) => ({ ...prev, [field]: newValue }));
        await updateDoc(doc(db, "characters", id), { [field]: newValue });
    };

    const handleDeductAP = async (cost: number) => {
        if (!character || !id) return;
        const currentAP = character.ap ?? 10;
        await updateStat("ap", currentAP - cost);
    };

    const toggleAbility = async (abilityId: string) => {
        if (!character || !id) return;
        const currentAbilities = character.abilities || [];
        const updatedAbilities = currentAbilities.includes(abilityId)
            ? currentAbilities.filter((a: string) => a !== abilityId)
            : [...currentAbilities, abilityId];
        setCharacter({ ...character, abilities: updatedAbilities });
        await updateDoc(doc(db, "characters", id), {
            abilities: updatedAbilities,
        });
    };

    const toggleItem = async (itemId: string) => {
        if (!character || !id) return;
        const currentItems = character.items || [];
        const updatedItems = currentItems.includes(itemId)
            ? currentItems.filter((i: string) => i !== itemId)
            : [...currentItems, itemId];
        setCharacter({ ...character, items: updatedItems });
        await updateDoc(doc(db, "characters", id), { items: updatedItems });
    };

    const handleUpdateNotes = async (newNotes: Note[]) => {
        if (!id || !isOwner) return;
        try {
            const notesRef = doc(db, "characters", id, "private", "notes");
            await setDoc(
                notesRef,
                { content: newNotes, updatedAt: new Date() },
                { merge: true },
            );
            setNotes(newNotes);
        } catch (error) {
            console.error("Could not save private notes.", error);
            showAlert(
                "Could not save private notes.",
                "Security Error",
                "error",
            );
        }
    };

    const deleteCharacter = async () => {
        try {
            if (!id) return;
            await deleteDoc(doc(db, "characters", id, "private", "notes"));
            await deleteDoc(doc(db, "characters", id));
            navigate("/view");
        } catch (error) {
            console.error("Error deleting character:", error);
            showAlert(
                "There was an error deleting the character. Please try again.",
                "Error",
                "error",
            );
        }
    };

    const allAbilities = [...bookAbilities, ...userCustomAbilities];
    const allItems = [...bookItems, ...userCustomItems];

    const myAbilities = allAbilities.filter((ability) =>
        character?.abilities?.includes(ability.id),
    );
    const myItems = allItems.filter((item) =>
        character?.items?.includes(item.id),
    );
    const usedSlots = myItems.reduce(
        (total, item) => total + (item.slots || 1),
        0,
    );

    return {
        character,
        notes,
        loading,
        isOwner,
        myAbilities,
        myItems,
        usedSlots,
        updateField,
        updateStat,
        handleDeductAP,
        toggleAbility,
        toggleItem,
        handleUpdateNotes,
        deleteCharacter,
    };
}
