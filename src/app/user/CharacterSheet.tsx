import { CircleArrowLeft } from "lucide-react";
import { RiShareFill } from "react-icons/ri";
import CharacterProfile from "../../components/sheet/CharacterProfile";
import Stat from "../../components/sheet/Stat";
import Card from "../../components/sheet/utils/Card";
import Button from '../../components/ui/button';
import Footer from '../../components/ui/footer';
import Navbar from '../../components/ui/navbar';

function CharacterSheet() {
    return (
        <div className='flex flex-col justify-between items-center bg-white h-full'>
            < Navbar />
            <div className="my-10 max-w-4/6 w-full flex flex-col gap-3 items-center">
                <a href="/" className='text-gray-400 flex flex-row gap-2 w-full'>
                    <CircleArrowLeft />
                    <span className='uppercase text-xl font-medium font-alegraya-sans'>Go Back</span>
                </a>
                <div className='flex flex-row w-full justify-between items-center align-middle pb-5 border-b '>
                    <div className='flex flex-col'>
                        <h1 className='font-alegraya font-bold text-5xl'>Merlim</h1>
                        <h2 className='font-alegraya-sans text-gray-500 uppercase font-medium text-xl'>The Wizard</h2>
                    </div>
                    <div>
                        <Button className='font-medium py-3 mr-1'><RiShareFill className='inline-block mr-3' /><span>Share</span></Button>   
                    </div>
                </div>
                <div className="grid grid-cols-10 w-full gap-2">
                    <div className="col-span-3 flex flex-col w-full gap-2">
                        {/* Stats */}
                        <section className="border border-gray-400 rounded-lg p-4 flex flex-col gap-2">
                            <div className="w-full flex justify-center items-center h-60 border mb-3 rounded-lg overflow-hidden">
                                <img src="src/assets/placeholderPfp.png" className="object-contain" />
                            </div>
                            <Stat id="1" name="HP" value={10} />
                            <Stat id="2" name="AP" value={10} />
                        </section>
                        {/* Notes */}
                        <section className="border border-gray-400 rounded-lg p-4">
                            <div className="mb-3 flex w-full justify-center font-alegraya-sans lowercase  text-xl text-center">Notes</div>
                            <textarea className="w-full h-90 border rounded-lg"></textarea>
                        </section>
                    </div>
                    <div className="col-span-7 flex flex-col w-full gap-2">
                        {/* Characteristics */}
                        <section className="border border-gray-400 rounded-lg p-4">
                            <CharacterProfile />
                        </section>
                        {/* Abilities & Inventory */}
                        <section className="border border-gray-400 rounded-lg flex flex-col p-4">Abilities & Inventory
                            <div className="mt-30 flex-col">
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </div>

                        </section>
                    </div>
                </div>
            </div>
            < Footer />
        </div>
    );
}

export default CharacterSheet;