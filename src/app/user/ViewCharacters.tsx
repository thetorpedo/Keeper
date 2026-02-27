import Button from '@/components/ui/button.tsx';
import CharacterCard from '@/components/viewcharacters/character-card.tsx';
import { Plus } from 'lucide-react';
import Footer from '../../components/ui/footer.tsx';
import Navbar from '../../components/ui/navbar.tsx';

function ViewCharacters() {
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
                    <CharacterCard />
                    <CharacterCard />
                </div>
            </div>
            < Footer />
        </div>
    );
}

export default ViewCharacters;