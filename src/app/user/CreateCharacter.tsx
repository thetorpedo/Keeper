import CharacterProfile from '@/components/sheet/CharacterProfile.tsx';
import Card from '@/components/sheet/utils/Card.tsx';
import Button from '@/components/ui/questbutton.tsx';
import { bookAbilities } from '@/data/abilities/wizard.ts';
import { collection, doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import Footer from '../../components/ui/footer.tsx';
import Navbar from '../../components/ui/navbar.tsx';
import { useAuth } from '../contexts/authContext/authProvider.tsx';
import { db } from '../firebase/firebase.ts';



function CreateCharacter() {
    const { currentUser } = useAuth();
    const [step, setStep] = useState(1);
    const roles = ['Fighter', 'Invoker', 'Ranger', 'Naturalist', 'Doctor', 'Spy', 'Magician', 'Wizard', 'Custom Abilities'];
    const [selectedRole, setSelectedRole] = useState<string>('Wizard');
    const [newCharacter, setNewCharacter] = useState({
    name: 'name', // Valores padrão se quiser
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
    abilities: [] as string[]
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
            // Se já tem a magia, tira ela. Se não tem, adiciona.
            if (currentAbilities.includes(abilityId)) {
                return { ...prev, abilities: currentAbilities.filter(id => id !== abilityId) };
            } else {
                return { ...prev, abilities: [...currentAbilities, abilityId] };
            }
        });
    };

    const filteredAbilities = bookAbilities.filter(a => a.role === selectedRole);
    const currentPaths = Array.from(new Set(filteredAbilities.map(a => a.path)));

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


    const createBlank = () => {
        console.log("Creating a blank character...");

        
        if (!currentUser) {
            console.error("No user is currently logged in.");
            return;
        }

        const docRef = doc(collection(db, "characters"));
        setDoc(docRef, {
            ownerId: currentUser.uid,
            createdAt: new Date(),
        })
        .catch((error) => {
            console.error("Error creating blank character: ", error);
        });
    }  

    const createCharacter = () => {
        console.log("Creating character...");

        if (!currentUser) {
            console.error("No user is currently logged in.");
            return;
        }

        const docRef = doc(collection(db, "characters"));
        setDoc(docRef, {
            ...newCharacter,
            ownerId: currentUser.uid,
            createdAt: new Date(),
        })
        .catch((error) => {
            console.error("Error creating blank character: ", error);
        });
    }  

  return (
        <div className='flex flex-col justify-between items-center bg-white h-full'>
            < Navbar/>
            <div className="my-10 max-w-5/6 space-y-5 flex flex-col items-center">
                <div className='flex flex-col border-b pb-3 w-full text-center'>
                    <h1 className='text-4xl font-extrabold font-alegraya text-gray-800'>Creating a character</h1>
                    <span className='text-xl font-bold font-alegraya-sans text-gray-400 lowercase'>
                        <span className={`text-gray-${step === 1 ? '500' : '300'}`}>PROFILE</span>
                        {' - '}
                        <span className={`text-gray-${step === 2 ? '500' : '300'}`}>ABILITIES</span>
                        {' - '}
                        <span className={`text-gray-${step === 3 ? '500' : '300'}`}>INVENTORY</span>
                    </span>
                    
                </div>
                <div className='flex flex-col max-w-280'>
                    {step === 1 && <CharacterProfile 
        characterData={newCharacter} 
        updateField={updateCharacterField} 
    />}
                    {step === 2 && (
                    <div className='flex flex-col gap-4'>
                        {/* BARRA DE FILTROS */}
                        <div className='flex flex-row justify-center gap-2 flex-wrap'>
                            {roles.map((role) => (
                                <div 
                                    key={role}
                                    onClick={() => setSelectedRole(role)}
                                    className={`px-2 py-0 font-alegraya-sans lowercase text-xl cursor-pointer transition-all ${
                                        selectedRole === role ? 'border-2 opacity-100 border-black' : 'border opacity-60 hover:opacity-80'
                                    }`}
                                >
                                    {role}
                                </div>
                            ))}
                        </div>
                        <div className='bg-gray-200 overflow-auto gap-4 flex flex-row p-4 border border-gray-300 rounded-lg'>
                            {currentPaths.map(path => (
                                <div key={path} className='flex shrink-0 flex-col max-w-70'>
                                    {/* Nome do Path no topo da coluna */}
                                    <div className='font-alegraya-sans text-xl lowercase text-center bg-white border'>
                                        {path}
                                    </div>
                                    <div className='mt-27 pb-10'>
                                        {/* Filtra as magias desse Path e cria os Cards */}
                                        {filteredAbilities.filter(a => a.path === path).map((ability, index, array) => (
                                            <Card 
                                                key={ability.id}
                                                ability={ability}
                                                isSelected={newCharacter.abilities.includes(ability.id)}
                                                onClick={() => toggleAbility(ability.id)}
                                                isLast={index === array.length - 1}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    </div>)}
                    {step === 3 && (
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row justify-center gap-2'>
                            <div className='border opacity-60 px-2 py-0 font-alegraya-sans lowercase text-xl'>
                                All items
                            </div>
                            <div className='border opacity-60 px-2 py-0 font-alegraya-sans lowercase text-xl'>
                                Useful
                            </div>
                            <div className='border opacity-60 px-2 py-0 font-alegraya-sans lowercase text-xl'>
                                Rare
                            </div>
                            <div className='border opacity-60 px-2 py-0 font-alegraya-sans lowercase text-xl'>
                                Legendary
                            </div>
                            <div className='border opacity-60 px-2 py-0 font-alegraya-sans lowercase text-xl'>
                                Custom Items
                            </div>
                        </div>

                    </div>)}
                </div>
                <div className='flex w-full items-center justify-between'>
                    <Button onClick={createBlank} className='opacity-50 hover:opacity-100 shadow-none text-base'>Create Blank character</Button>
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