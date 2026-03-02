import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase.ts";

export async function createNewCharacter(userId: string) {
    try {
        const charactersCollection = collection(db, "characters");

        const docRef = await addDoc(charactersCollection, {
            userId: userId,
            name: "Téo",
            description: "Um ilustrador de 20 anos...",
            notes: "",
            habilidades: [],
            items: [],
        });

        console.log("Ficha salva no banco com o ID: ", docRef.id);
        return docRef.id;

    } catch (error) {
        console.error("Deu ruim ao salvar a ficha: ", error);
    }
}