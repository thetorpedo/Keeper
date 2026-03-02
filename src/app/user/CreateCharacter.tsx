import Card from '@/components/sheet/utils/Card.tsx';
import Button from '@/components/ui/button.tsx';
import Footer from '../../components/ui/footer.tsx';
import Navbar from '../../components/ui/navbar.tsx';

function CreateCharacter() {
  return (
        <div className='flex flex-col justify-between items-center bg-white h-full'>
            < Navbar/>
            <div className="my-10 max-w-5/6 space-y-5 flex flex-col items-center">
                <Button  className='opacity-50 hover:opacity-100 shadow-none text-base'>Create blank character</Button>
                <div className='flex flex-col border-b pb-3 w-full text-center'>
                    <h1 className='text-4xl font-extrabold font-alegraya text-gray-800'>Creating a character</h1>
                    <span className='text-xl font-bold font-alegraya-sans text-gray-400 lowercase'>
                        <span className='text-gray-500'>PROFILE</span>
                        {' - '}
                        <span className='text-gray-400'>ABILITIES</span>
                        {' - '}
                        <span className='text-gray-400'>INVENTORY</span>
                    </span>
                    
                </div>
                <div className='flex flex-col max-w-280'>
                    {/* <CharacterProfile /> */}
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row justify-center gap-2'>
                            <div className='border opacity-60 px-2 py-0 font-alegraya-sans lowercase text-xl'>
                                Fighter
                            </div>
                            <div className='border opacity-60 px-2 py-0 font-alegraya-sans lowercase text-xl'>
                                Invoker
                            </div>
                            <div className='border opacity-60 px-2 py-0 font-alegraya-sans lowercase text-xl'>
                                Ranger
                            </div>
                            <div className='border opacity-60 px-2 py-0 font-alegraya-sans lowercase text-xl'>
                                Naturalist
                            </div>
                            <div className='border opacity-60 px-2 py-0 font-alegraya-sans lowercase text-xl'>
                                Doctor
                            </div>
                            <div className='border opacity-60 px-2 py-0 font-alegraya-sans lowercase text-xl'>
                                Spy
                            </div>
                            <div className='border opacity-60 px-2 py-0 font-alegraya-sans lowercase text-xl'>
                                Magician
                            </div>
                            <div className='border-2 opacity-100 px-2 py-0 font-alegraya-sans lowercase text-xl'>
                                Wizard
                            </div>
                            <div className='border opacity-60 px-2 py-0 font-alegraya-sans lowercase text-xl'>
                                Custom Abilities
                            </div>
                        </div>
                        <div className='bg-gray-200 overflow-auto gap-4 flex flex-row p-4 border border-gray-300 rounded-lg'>
                            <div className='flex shrink-0 flex-col max-w-70'>
                                <div className='font-alegraya-sans text-xl lowercase text-center bg-white border'>
                                    Evocation
                                </div>
                                <div className='mt-27'>
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                </div>
                            </div>
                            <div className='flex flex-col shrink-0 max-w-70'>
                                <div className='font-alegraya-sans text-xl lowercase text-center bg-white border'>
                                    Evocation
                                </div>
                                <div className='mt-27'>
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                </div>
                            </div>
                            <div className='flex flex-col shrink-0 max-w-70'>
                                <div className='font-alegraya-sans text-xl lowercase text-center bg-white border'>
                                    Evocation
                                </div>
                                <div className='mt-27'>
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                </div>
                            </div>
                            <div className='flex flex-col shrink-0 max-w-70'>
                                <div className='font-alegraya-sans text-xl lowercase text-center bg-white border'>
                                    Evocation
                                </div>
                                <div className='mt-27'>
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                </div>
                            </div>
                            <div className='flex flex-col shrink-0 max-w-70'>
                                <div className='font-alegraya-sans text-xl lowercase text-center bg-white border'>
                                    Evocation
                                </div>
                                <div className='mt-27'>
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full items-center justify-between'>
                    <Button  className='opacity-50 hover:opacity-100 shadow-none text-base'>Skip this step</Button>
                    <Button  className='px-10'>Next</Button>
                </div>
                
            </div>
            < Footer/>
        </div>
    );
}

export default CreateCharacter;