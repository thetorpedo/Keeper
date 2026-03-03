import Button from '@/components/ui/button.tsx';
import CharacterCard from '@/components/viewcharacters/character-card.tsx';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import Footer from '../../components/ui/footer.tsx';
import Navbar from '../../components/ui/navbar.tsx';
import { useAuth } from '../contexts/authContext/authProvider.tsx';
import { db } from '../firebase/firebase.ts';



function ViewCharacters() {
    const { currentUser } = useAuth();
    const [characters, setCharacters] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            const fetchCharacters = async () => {
                if (!currentUser?.uid) {
                    setLoading(false);
                    return;
                }

                try {
                    const q = query(
                        collection(db, "characters"), 
                        where("ownerId", "==", currentUser.uid), 
                        orderBy("createdAt","desc")
                    );
                    const querySnapshot = await getDocs(q);
                    const charsData = querySnapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                    setCharacters(charsData);
                    console.log("Fetched characters:", charsData);
                } catch (error) {
                    console.error("Erro ao buscar personagens:", error);
                } finally {
                    setLoading(false);
                }
            };

            fetchCharacters();
    }, [currentUser]);

    return (
        <div className='flex flex-col justify-between items-center grow bg-white h-full'>
            < Navbar />
            <div className="my-10 px-5 max-w-280 w-full h-full  space-y-5 flex flex-col items-center">
                <div className='flex w-full max-sm:flex-col max-sm:gap-2 flex-row justify-between items-center pb-4 sm:pb-10 sm:border-b'>
                    <div className='font-alegraya text-2xl sm:text-4xl text-center font-bold'>
                        Your Characters
                    </div>
                    <Button className='flex-row max-sm:w-fit max-sm:text-base flex items-center'><Plus className="w-5 h-5 mr-2" />Create New</Button>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 w-full'>
               {loading ? (
                    <p className="text-gray-500 font-inter">Loading characters...</p>
                ) : (
                    <>
                        {characters.length > 0 ? (
                            characters.map((char) => (
                                <CharacterCard 
                                    key={char.id}
                                    name={char.name || 'BLANK'}
                                    role={char.role || 'BLANK'}
                                    createdAt={char.createdAt}
                                />
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-500 font-inter">
                                You don't have any characters yet.
                            </p>
                        )}
                    </>
                )}
                </div>
            </div>
            < Footer />
        </div>
    );
}

export default ViewCharacters;