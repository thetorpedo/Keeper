import React from 'react';
import Navbar from '../../components/ui/navbar';
import Button from '../../components/ui/button';
import Footer from '../../components/ui/footer';

function About() {
  return (
        <div className='flex flex-col justify-between items-center bg-white h-full'>
            < Navbar/>
            <div className="my-10 max-w-5/6 space-y-5 flex flex-col items-center md:flex-row-reverse">
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
                    <p className='font-alegraya text-2xl/8 md:text-4xl text-justify font-extrabold md:mb-10'> About Keeper
                    </p>
                    <p className='text-justify'> I built Keeper to be a simple and user-friendly character sheet manager for Quest.</p>
                    <p className='text-justify'>It was born as an undergraduate thesis project for my degree in Computer Engineering. The primary goal was to apply modern web technologies to build a real-world application, focusing heavily on the principles of User-Centered Design and Usability. It's a practical study in how to build a tool that truly serves the needs of its community.
                    </p>
                    <p className='text-justify'>Keeper is an unofficial, fan-made tool and is not affiliated with, sponsored, or endorsed by The Adventure Guild, LLC.
                    </p>
                    <p className='font-alegraya-sans text-2xl font-semibold mb-2'>if you want to support me:
                    </p>
                    < Button
                        text='Buy me a Coffee!'
                        isImportant
                        isBold
                        className='px-6 py-3 mt-0 text-3xl'
                    />
                </div>
            </div>
            < Footer/>
        </div>
    );
}

export default About;