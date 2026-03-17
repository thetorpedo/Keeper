import AbilitySelector from '@/components/sheet/AbilitySelector.tsx';
import CharacterProfile from '@/components/sheet/CharacterProfile.tsx';
import ItemSelector from '@/components/sheet/ItemSelector.tsx';
import Button from '@/components/ui/questbutton.tsx';
import type { Ability } from '@/data/interface.ts';
import { bookItems } from '@/data/items/items.ts';
import { collection, doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/ui/footer.tsx';
import Navbar from '../../components/ui/navbar.tsx';
import { useAuth } from '../contexts/authContext/authProvider.tsx';
import { db } from '../firebase/firebase.ts';

function CreateCharacter() {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);


    const [selectedItemCategory, setSelectedItemCategory] = useState<string>('All items');

    const [selectedRole, setSelectedRole] = useState<string>('Wizard');
    const [newCharacter, setNewCharacter] = useState({
    name: 'Name',
    pronouns: 'pronouns',
    age: 'age',
    height: 'height',
    role: 'role',
    feature1: 'distinctive feature',
    feature2: 'distinctive feature',
    feature3: 'distinctive feature',
    clothing1: 'style',
    clothing2: 'style',
    vibe: 'style',
    origin: 'home',
    originTrait: 'community',
    belief: 'ideal',
    flaw: 'flaw',
    abilities: [] as string[],
    items: [] as string[]
});

    const updateCharacterField = (field: string, newValue: string) => {
    setNewCharacter((prev) => ({
        ...prev,
        [field]: newValue
    }));
};

const toggleAbility = (abilityId: string) => {
        setNewCharacter((prev) => {
            const currentAbilities = prev.abilities || [];
            if (currentAbilities.includes(abilityId)) {
                return { ...prev, abilities: currentAbilities.filter(id => id !== abilityId) };
            } else {
                return { ...prev, abilities: [...currentAbilities, abilityId] };
            }
        });
    };

const filteredItems = selectedItemCategory === 'All items' 
        ? bookItems 
        : bookItems.filter(i => i.role === selectedItemCategory);

    const toggleItem = (itemId: string) => {
        setNewCharacter((prev) => {
            const currentItems = prev.items || [];
            if (currentItems.includes(itemId)) {
                return { ...prev, items: currentItems.filter(id => id !== itemId) };
            } else {
                return { ...prev, items: [...currentItems, itemId] };
            }
        });
    };


 const itemsPerCol = 5; 
    const itemColumns: Ability[][] = []; 
    
    filteredItems.forEach((item, index) => {
        const columnIndex = Math.floor(index / itemsPerCol);
        
        if (!itemColumns[columnIndex]) {
            itemColumns[columnIndex] = [];
        }
        
        itemColumns[columnIndex].push(item); 
    });

    const nextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            setStep(3);
        }
    }

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        } else {
            setStep(1);
        }
    }


    const createBlank = async () => {
        console.log("Creating a blank character...");

        if (!currentUser) {
            console.error("No user is currently logged in.");
            return;
        }

        try {
            const newDocRef = doc(collection(db, "characters"));
            
            await setDoc(newDocRef, {
                name: 'Blank',
                pronouns: 'pronouns',
                age: 'age',
                height: 'height',
                role: 'Blank',
                feature1: 'distinctive feature',
                feature2: 'distinctive feature',
                feature3: 'distinctive feature',
                clothing1: 'style',
                clothing2: 'style',
                vibe: 'style',
                origin: 'home',
                originTrait: 'community',
                belief: 'ideal',
                flaw: 'flaw',
                abilities: [] as string[],
                items: [] as string[],
                ownerId: currentUser.uid,
                createdAt: new Date(),
            });

            console.log("Blank character created with ID: ", newDocRef.id);
            navigate(`/character/${newDocRef.id}`);

        } catch (error) {
            console.error("Error creating blank character: ", error);
        }
    } 

    const createCharacter = async () => { 
        console.log("Creating character...");

        if (!currentUser) {
            console.error("No user is currently logged in.");
            return;
        }

        try {
            const newDocRef = doc(collection(db, "characters"));
            
            await setDoc(newDocRef, {
                ...newCharacter,
                ownerId: currentUser.uid,
                createdAt: new Date(),
            });

            console.log("Character created with ID: ", newDocRef.id);
            navigate(`/character/${newDocRef.id}`);

        } catch (error) {
            console.error("Error creating character: ", error);
        }
    }

  return (
        <div className='flex flex-col justify-between items-center bg-white h-full'>
            < Navbar/>
            <div className="my-10 max-sm:max-w-[90%] max-w-4/6 w-250 space-y-5 flex flex-col items-center">
                <div className='flex flex-col border-b pb-3 w-full text-center'>
                    <h1 className='text-4xl font-extrabold font-alegraya'>Creating a character</h1>
                    <span className='text-xl font-bold font-alegraya-sans text-gray-400 lowercase'>
                        <span onClick={() => setStep(1)} className={`text-gray-${step === 1 ? '500' : '300'} cursor-pointer`}>PROFILE</span>
                        {' - '}
                        <span onClick={() => setStep(2)} className={`text-gray-${step === 2 ? '500' : '300'} cursor-pointer`}>ABILITIES</span>
                        {' - '}
                        <span onClick={() => setStep(3)} className={`text-gray-${step === 3 ? '500' : '300'} cursor-pointer`}>INVENTORY</span>
                    </span>
                    
                </div>
                <div className='flex flex-col max-w-280'>
                    {step === 1 && <CharacterProfile 
                        characterData={newCharacter} 
                        updateField={updateCharacterField} 
                    />}
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
                <div className='flex w-full max-sm:flex-col-reverse max-sm:gap-8 items-center justify-between'>
                    {step === 1 ? (<Button onClick={createBlank} className='opacity-50 hover:opacity-100 shadow-none text-base'>Create Blank character</Button>) : (<div></div>)}
                    <div className='flex flex-row gap-4'>
                        {step > 1 && <Button onClick={prevStep} className='px-10'>Back</Button>}
                        {step === 3 ? (
                            <Button onClick={createCharacter} className='px-10'>Finish</Button>
                        ) : (
                            <Button onClick={nextStep}  className='px-10'>Next</Button>
                        )}
                    </div>
                </div>
            </div>
            < Footer/>
        </div>
    );
}

export default CreateCharacter;