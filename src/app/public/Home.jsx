import React from 'react';
import Navbar from '../../components/ui/navbar';
import Button from '../../components/ui/button';
import Footer from '../../components/ui/footer';

function Home() {
  return (
        <div className='flex flex-col justify-between items-center bg-white h-full'>
            < Navbar/>
            <div className="my-10 max-w-5/6 space-y-5 flex flex-col items-center md:flex-row md:flex-row-reverse">
                <div className='max-md:border-b-2'>
                    <img 
                        src='src/assets/sombra-sm.png'
                        className=' w-full h-full md:hidden'
                        alt=''    
                    ></img>
                    <img 
                        src='src/assets/sombra.png'
                        className=' w-100 -scale-x-100 h-full max-md:hidden'
                        alt=''    
                    ></img>
                </div>
                <div className='flex flex-col justify-center items-center space-y-5 max-w-125 '>
                    <p className='font-alegraya text-3xl/8 md:text-5xl text-center font-medium md:mb-10'>
                    <span className='font-extrabold '>Create</span>, 
                    <span className='font-extrabold '> store</span>, and  
                    <span className='font-extrabold '> share</span> your character sheet in just a few clicks.</p>
                    < Button
                        text='Create Character'
                        isImportant
                        isBold
                        className='px-6 py-3 text-3xl'
                    />
                    < Button
                        text='View Characters'
                    />
                </div>
            </div>
            < Footer/>
        </div>
    );
}

export default Home;