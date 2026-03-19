import { useGlobalAlert } from "@/app/contexts/alertContext/AlertProvider.tsx";
import AbilitySelector from "@/components/sheet/ability-selector.tsx";
import CharacterProfile from "@/components/sheet/character-profile.tsx";
import ItemSelector from "@/components/sheet/item-selector.tsx";
import Button from "@/components/ui/questbutton.tsx";
import { collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/ui/footer.tsx";
import Navbar from "../../components/ui/navbar.tsx";
import { useAuth } from "../contexts/authContext/AuthProvider.tsx";
import { db } from "../firebase/firebase.ts";

function CreateCharacter() {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const { showAlert } = useGlobalAlert();

    const [step, setStep] = useState(1);
    const [isCreating, setIsCreating] = useState(false);

    const [newCharacter, setNewCharacter] = useState({
        name: "Name",
        pronouns: "pronouns",
        age: "age",
        height: "height",
        role: "role",
        feature1: "distinctive feature",
        feature2: "distinctive feature",
        feature3: "distinctive feature",
        clothing1: "style",
        clothing2: "style",
        vibe: "style",
        origin: "home",
        originTrait: "community",
        belief: "ideal",
        flaw: "flaw",
        abilities: [] as string[],
        items: [] as string[],
    });

    const updateCharacterField = (field: string, newValue: string) => {
        setNewCharacter((prev) => ({
            ...prev,
            [field]: newValue,
        }));
    };

    const toggleAbility = (abilityId: string) => {
        setNewCharacter((prev) => {
            const currentAbilities = prev.abilities || [];
            if (currentAbilities.includes(abilityId)) {
                return {
                    ...prev,
                    abilities: currentAbilities.filter(
                        (id) => id !== abilityId,
                    ),
                };
            } else {
                return { ...prev, abilities: [...currentAbilities, abilityId] };
            }
        });
    };

    const toggleItem = (itemId: string) => {
        setNewCharacter((prev) => {
            const currentItems = prev.items || [];
            if (currentItems.includes(itemId)) {
                return {
                    ...prev,
                    items: currentItems.filter((id) => id !== itemId),
                };
            } else {
                return { ...prev, items: [...currentItems, itemId] };
            }
        });
    };

    const nextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            setStep(3);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        } else {
            setStep(1);
        }
    };

    const createBlank = async () => {
        console.log("Creating a blank character...");

        if (!currentUser) {
            showAlert(
                "You must be logged in to create a character.",
                "Authentication Error",
                "error",
            );
            return;
        }

        if (isCreating) return;
        setIsCreating(true);

        try {
            const newDocRef = doc(collection(db, "characters"));

            await setDoc(newDocRef, {
                name: "Blank",
                pronouns: "pronouns",
                age: "age",
                height: "height",
                role: "Blank",
                feature1: "distinctive feature",
                feature2: "distinctive feature",
                feature3: "distinctive feature",
                clothing1: "style",
                clothing2: "style",
                vibe: "style",
                origin: "home",
                originTrait: "community",
                belief: "ideal",
                flaw: "flaw",
                abilities: [] as string[],
                items: [] as string[],
                ownerId: currentUser.uid,
                createdAt: new Date(),
            });

            navigate(`/character/${newDocRef.id}`);
        } catch (error) {
            showAlert(
                "Failed to create blank character. Please try again.",
                "Error",
                "error",
            );
            setIsCreating(false);
        }
    };

    const createCharacter = async () => {
        if (!currentUser) {
            showAlert(
                "You must be logged in to create a character.",
                "Authentication Error",
                "error",
            );
            return;
        }

        if (isCreating) return;
        setIsCreating(true);

        try {
            const newDocRef = doc(collection(db, "characters"));

            await setDoc(newDocRef, {
                ...newCharacter,
                ownerId: currentUser.uid,
                createdAt: new Date(),
            });

            navigate(`/character/${newDocRef.id}`);
        } catch (error) {
            showAlert(
                "Failed to create character. Please try again.",
                "Error",
                "error",
            );
            setIsCreating(false);
        }
    };

    return (
        <div className="flex flex-col justify-between items-center bg-white min-h-screen">
            <Navbar />
            <div className="my-10 max-sm:max-w-[90%] max-w-4/6 w-250 space-y-5 flex flex-col items-center">
                <div className="flex flex-col border-b pb-3 w-full text-center">
                    <h1 className="text-4xl font-extrabold font-alegraya">
                        Creating a character
                    </h1>
                    <span className="text-xl font-bold font-alegraya-sans text-gray-400 lowercase">
                        <span
                            onClick={() => setStep(1)}
                            className={`text-gray-${step === 1 ? "500" : "300"} cursor-pointer`}
                        >
                            PROFILE
                        </span>
                        {" - "}
                        <span
                            onClick={() => setStep(2)}
                            className={`text-gray-${step === 2 ? "500" : "300"} cursor-pointer`}
                        >
                            ABILITIES
                        </span>
                        {" - "}
                        <span
                            onClick={() => setStep(3)}
                            className={`text-gray-${step === 3 ? "500" : "300"} cursor-pointer`}
                        >
                            INVENTORY
                        </span>
                    </span>
                </div>
                <div className="flex flex-col max-w-280">
                    {step === 1 && (
                        <CharacterProfile
                            characterData={newCharacter}
                            updateField={updateCharacterField}
                        />
                    )}
                    {step === 2 && (
                        <AbilitySelector
                            selectedAbilities={newCharacter.abilities}
                            onToggleAbility={toggleAbility}
                        />
                    )}
                    {step === 3 && (
                        <ItemSelector
                            selectedItems={newCharacter.items}
                            onToggleItem={toggleItem}
                        />
                    )}
                </div>
                <div className="flex w-full max-sm:flex-col-reverse max-sm:gap-8 items-center justify-between">
                    {step === 1 ? (
                        <Button
                            disabled={isCreating}
                            onClick={createBlank}
                            className="opacity-50 hover:opacity-100 shadow-none text-base"
                        >
                            Create Blank character
                        </Button>
                    ) : (
                        <div></div>
                    )}
                    <div className="flex flex-row gap-4">
                        {step > 1 && (
                            <Button
                                disabled={isCreating}
                                onClick={prevStep}
                                className="px-10"
                            >
                                Back
                            </Button>
                        )}
                        {step === 3 ? (
                            <Button
                                disabled={isCreating}
                                onClick={createCharacter}
                                className="px-10"
                            >
                                {isCreating ? "Creating..." : "Finish"}
                            </Button>
                        ) : (
                            <Button
                                disabled={isCreating}
                                onClick={nextStep}
                                className="px-10"
                            >
                                Next
                            </Button>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CreateCharacter;
