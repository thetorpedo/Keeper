import sombraSm from "@/assets/sombra-sm.png";
import sombra from "@/assets/sombra.png";
import Footer from "../../components/ui/footer.tsx";
import Navbar from "../../components/ui/navbar.tsx";
import Button from "../../components/ui/questbutton.tsx";

function About() {
    return (
        <div className="flex flex-col justify-between items-center bg-white min-h-screen">
            <Navbar />
            
            <div className="my-10 max-w-5/6 space-y-10 flex flex-1 flex-col items-center md:flex-row-reverse md:gap-12">
                
                <div className="max-md:border-b w-full flex justify-center md:w-auto">
                    <img
                        src={sombraSm}
                        className="w-full max-w-80 h-auto md:hidden"
                        alt="Keeper Mascot"
                    />
                    <img
                        src={sombra}
                        className="w-100 -scale-x-100 h-auto max-md:hidden"
                        alt="Keeper Mascot"
                    />
                </div>

                <div className="flex flex-col space-y-2 max-w-140">
                    <h1 className="font-alegraya text-4xl md:text-5xl font-extrabold text-center md:text-center">
                        About Keeper
                    </h1>

                    <div className="space-y-4 mt-2 text-justify font-ovo text-lg/relaxed">
                        <p>
                        Hi, I'm Thiago! I built Keeper because I love TTRPGs and wanted a simpler, more intuitive way to create character sheets for Quest.
                        </p>
                        <p>
                        What started as my undergraduate thesis project for my degree in Computer Engineering, quickly became a passion project. My goal was to apply modern web tech and User-Centered Design to build a tool that actually feels good to use during a game session.
                        </p>
                        <p>
                            Keeper is just my small way of giving back to the Quest community. I hope it makes your adventures a little smoother!
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full gap-4 py-4">
                        <p className="font-alegraya-sans text-xl lowercase font-semibold">Want to support the project?</p>
                        <a
                            href="https://ko-fi.com/thetorpedo"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                text="Buy me a Coffee"
                                isBold
                                className="px-6 py-2 text-2xl"
                            />
                        </a>
                        <p className="text-sm font-alegraya-sans lowercase">
                            Reach me at: <a href="mailto:thiago.szborges@gmail.com" className="font-bold">thiago.szborges@gmail.com</a>
                        </p>
                    </div>

                    {/* Seção Legal e Técnica */}
                    <div className="pt-6 border-t border-gray-100 space-y-4">
                        <p className="text-justify italic text-black/60 text-sm">
                            Keeper is an unofficial, fan-made tool and is not
                            affiliated with, sponsored, or endorsed by The Adventure
                            Guild, LLC.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-black/50 font-alegraya-sans uppercase tracking-wider">
                            <div>
                                <p className="font-bold text-black/70 mb-1">Open Source & License</p>
                                <p>
                                    Code licensed under GPLv3. Source available on <a href="https://github.com/thetorpedo/keeper" className="underline hover:text-purple">GitHub</a>.
                                </p>
                            </div>
                            <div>
                                <p className="font-bold text-black/70 mb-1">Privacy & Data</p>
                                <p>
                                    Your data is stored securely via Firebase. We do not track or sell your information.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default About;