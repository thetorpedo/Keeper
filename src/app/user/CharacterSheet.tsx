import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.tsx';
import { CircleArrowLeft, Plus } from 'lucide-react';
import { BsFillBackpack2Fill, BsFillFileTextFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa6';
import { RiShareFill, RiSparkling2Fill } from "react-icons/ri";
import CharacterProfile from "../../components/sheet/CharacterProfile.tsx";
import Stat from "../../components/sheet/Stat.tsx";
import Card from "../../components/sheet/utils/Card.tsx";
import Button from '../../components/ui/button.tsx';
import Footer from '../../components/ui/footer.tsx';
import Navbar from '../../components/ui/navbar.tsx';

function CharacterSheet() {
    return (
        <div className='flex max-sm:justify-start flex-col justify-between items-center bg-white h-full'>
            < Navbar />

            {/* Desktop */}
            <div className='hidden md:block'>            
                <Button className='p-4! fixed bottom-10 right-10 z-999 bg-white'>
                    <img src="src/assets/d20.png" className="w-12 h-12 rounded-full" />
                </Button>
                <div className="my-10 max-w-280 w-full flex flex-col gap-3 items-center">
                    <a href="/" className='text-gray-400 flex flex-row gap-2 w-full'>
                        <CircleArrowLeft />
                        <span className='uppercase text-xl font-medium font-alegraya-sans'>Back</span>
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
                                <div className="w-full flex aspect-square justify-center items-center  border mb-3 rounded-lg overflow-hidden">
                                    <img src="src/assets/placeholderPfp.png" className="object-contain" />
                                </div>
                                <Stat id="1" name="HP" value={10} />
                                <Stat id="2" name="AP" value={10} />
                            </section>
                            {/* Notes */}
                            <section className="border grow border-gray-400 rounded-lg p-4">
                                <div className="mb-3 flex w-full justify-center font-alegraya-sans lowercase  text-xl text-center">Notes</div>
                                <textarea className="w-full  h-90 border rounded-lg"></textarea>
                            </section>
                        </div>
                        <div className="col-span-7 flex flex-col w-full gap-2">
                            {/* Characteristics */}
                            <section className="border border-gray-400 rounded-lg p-4">
                                <CharacterProfile />
                            </section>
                            {/* Abilities & Inventory */}
                            <section className="border border-gray-400 rounded-lg w-full gap-8 flex items-between flex-row p-4">
                                <div className="flex flex-col gap-4 justify-center grow">
                                    <div className="flex flex-row justify-between items-center">
                                        <div className="pl-1 font-alegraya-sans lowercase font-semibold text-2xl">Abilities</div>
                                        <div className='mr-1'>
                                            <Button className="flex text-lg items-center"><Plus className="size-4 mr-2"/>{' '}Add Ability</Button>    
                                        </div>   
                                    </div>
                                    
                                    <div className='p-5 bg-gray-100 rounded-lg w-fit border border-gray-300'>
                                        <div className="mt-23 flex-col grow-0">
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                        </div>     
                                    </div>
                                    
                                </div>
                                <div className="flex flex-col gap-4 justify-center grow">
                                    <div className="flex flex-row justify-between items-center">
                                        <div className="pl-1 font-alegraya-sans lowercase font-semibold text-2xl">Abilities</div>
                                        <div className='mr-1'>
                                            <Button className="flex text-lg items-center"><Plus className="size-4 mr-2"/>{' '}Add Ability</Button>    
                                        </div>   
                                    </div>
                                    
                                    <div className='p-5 bg-gray-100 rounded-lg w-fit border border-gray-300 '>
                                        <div className="mt-23 flex-col grow-0">
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                        </div>     
                                    </div>
                                    
                                </div>

                            </section>
                        </div>
                    </div><button className='font-alegraya-sans lowercase text-left w-full ml-1 cursor-pointer hover:underline transition-all hover:text-red-400 font-medium text-xl text-red-500 '>
                    Delete this character
                </button>
                </div>
                
            </div>
            <span className='max-sm:hidden'>
                < Footer />
            </span>

            {/* Mobile */}
            <div className='block md:hidden pb-20'>            
                <div className='flex flex-row w-full px-5 justify-between items-center align-middle pb-5 '>
                    <div className='flex flex-col gap-2 pb-5 border-b'>
                        <div className='flex flex-row w-full gap-4 justify-between items-center'>
                            <div className='flex flex-col h-full items-between gap-2'>
                                <a href="/" className='text-gray-400 flex flex-row gap-2 w-full'>
                                    <CircleArrowLeft />
                                    <span className='uppercase text-lg font-medium font-alegraya-sans'>Back</span>
                                </a>    
                                <div>
                                    <h1 className='font-alegraya font-bold text-3xl'>Merlim</h1>
                                    <h2 className='font-alegraya-sans -mt-2 text-gray-500 uppercase font-medium'>The Wizard</h2>   
                                </div>
                                <Button className='font-medium mr-1 px-0! flex items-center justify-center'><RiShareFill className='inline-block mr-2 size-3' /><span className='text-sm'>Share</span></Button>
                            </div>
                            
                            <div className="aspect-square w-1/2 flex justify-center items-center border rounded-lg overflow-hidden">
                                    <img src="src/assets/placeholderPfp.png" className="object-contain" />
                            </div>    
                        </div>
                        
                        <div className='mt-5 flex flex-col gap-4'>
                            <Stat id="1" name="HP" value={10} />
                            <Stat id="2" name="AP" value={10} />      
                        </div>
                        
                        
                    </div>
                        
                    </div>
                <Tabs defaultValue="characteristics">
                            <TabsList className='fixed w-full bottom-0 left-0 z-99'>
                                <TabsTrigger value="characteristics" className='group active:scale-95 transition-transform'><FaUser className='size-6 group-data-[state=active]:-mt-2 group-data-[state=active]:size-6.5'/></TabsTrigger>
                                <TabsTrigger value="abilities"  className='group active:scale-95 transition-transform'><RiSparkling2Fill className='size-6 group-data-[state=active]:-mt-2 group-data-[state=active]:size-7'/></TabsTrigger>
                                <TabsTrigger value="inventory"  className='group active:scale-95 transition-transform'><BsFillBackpack2Fill className='size-6 group-data-[state=active]:-mt-2 group-data-[state=active]:size-7'/></TabsTrigger>
                                <TabsTrigger value="notes" className='group mr-18 active:scale-95 transition-transform'><BsFillFileTextFill className='size-6 group-data-[state=active]:-mt-2 group-data-[state=active]:size-7'/></TabsTrigger>
                                <Button className='p-3! fixed bottom-3 right-3 z-999 bg-white'>
                                    <img src="src/assets/d20.png" className="size-8.5" />
                                </Button>
                            </TabsList>
                            <TabsContent value="characteristics" className='px-5'>
                                <CharacterProfile />
                            </TabsContent>
                            <TabsContent value="abilities" className='px-5'>
                                <div className="flex flex-col gap-4 justify-center grow">
                                    <div className="flex flex-row justify-between items-center">
                                        <div className="pl-1 font-alegraya-sans lowercase font-semibold text-xl">Abilities</div>
                                        <div className='mr-1'>
                                            <Button className="flex max-sm:py-0 max-sm:px-2 text-[16px] items-center"><Plus className="size-4 mr-2"/>{' '}Add New</Button>    
                                        </div>    
                                    </div>
                                    
                                    <div className='max-sm:p-0 max-sm:bg-white max-sm:border-0 p-5 bg-gray-100 rounded-lg w-fit border border-gray-300'>
                                        <div className="mt-23 flex-col grow-0">
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                        </div>     
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="inventory" className='px-5'>
                                <div className="flex flex-col gap-4 justify-center grow">
                                    <div className="flex flex-row justify-between items-center">
                                        <div className='flex flex-col '>
                                            <div className="pl-1 font-alegraya-sans lowercase font-semibold text-xl">Inventory</div>    
                                            <div className="pl-1 -mt-2 font-alegraya-sans lowercase font-semibold opacity-50 text-xl">(6/12)</div>
                                        </div>
                                        
                                        <div className='mr-1'>
                                            <Button className="flex max-sm:py-0 max-sm:px-2 text-[16px] items-center"><Plus className="size-4 mr-2"/>{' '}Add New</Button>    
                                        </div>   
                                    </div>
                                    
                                    <div className='max-sm:p-0 max-sm:bg-white max-sm:border-0 p-5 bg-gray-100 rounded-lg w-fit border border-gray-300'>
                                        <div className="mt-23 flex-col grow-0">
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                        </div>     
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="notes" className='px-5'>
                                <div className="mb-3 flex w-full justify-center font-alegraya-sans lowercase  text-xl text-center">Notes</div>
                                <textarea className="w-full  h-90 border rounded-lg"></textarea>
                            </TabsContent>
                        </Tabs>
            </div>
            

            
        </div>
    );
}

export default CharacterSheet;