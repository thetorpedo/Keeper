import Footer from '../../components/ui/footer.tsx';
import Navbar from '../../components/ui/navbar.tsx';
import Button from '../../components/ui/questbutton.tsx';

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
                    <p className='text-justify'> Hi, I'm Thiago! I built Keeper because I love TTRPGs and wanted a simpler, more intuitive way to create character sheets for Quest.</p>
                    <p className='text-justify'>What started as my undergraduate thesis project for my degree in Computer Engineering, quickly became a passion project. My goal was to apply modern web tech and User-Centered Design to build a tool that actually feels good to use during a game session.
                    </p>
                    <p className='text-justify'>
                        Keeper is just my small way of giving back to the Quest community. I hope it makes your adventures a little smoother!
                    </p>
                    <p className='text-justify italic text-black/60'>Keeper is an unofficial, fan-made tool and is not affiliated with, sponsored, or endorsed by The Adventure Guild, LLC.
                    </p>
                    <p className='font-alegraya-sans text-xl mb-1'>if you want to support me:
                    </p>
                    <a href='https://ko-fi.com/thetorpedo' target='_blank'>
                    < Button
                        text='Buy me a Coffee'
                        isBold
                        className='px-3 py-2 mt-0 text-2xl'
                    /></a>
                </div>
            </div>
            < Footer/>
        </div>
    );
}

export default About;