export default function Card(){
    return(
        // Card
        <div >
            {/* Outer Box */}
            <div className="w-70 rounded-lg border border-gray-400 p-2.5 pt-2">
                <div className="flex justify-center -mb-4">
                    <div className="flex justify-center gap-2 px-2 relative bg-white">
                        {/* AP */}
                        <div className="flex items-center"> 
                            <span className="flex items-center h-full">
                                <span className="bg-black px-1.5 py-0.5 text-white font-alegraya-sans font-bold leading-none flex items-center justify-center">
                                    2
                                </span>
                                <img 
                                    src="../../src/assets/APVector.svg" 
                                    className="h-5 w-auto block"
                                    alt=""
                                />     
                            </span>
                        </div>
                    
                        {/* Name */}
                        <div className="flex items-center h-full">
                            <span className="font-alegraya-sans lowercase font-extrabold text-2xl text-center ">
                            BLINK    
                            </span>
                            
                        </div>
                        {/* Roll */}
                        <div className="flex items-center h-full">
                            <span className="font-alegraya-sans lowercase border px-1.5 py-0.5 text-[14px] leading-none flex items-center justify-center">
                                roll the die
                            </span>
                        </div>
                    </div>
                    
                </div>
                {/* Inner Box */}
                <div className="border-4 border-amber-300 rounded-lg text-justify p-3 pt-4">
                    {/* Description */}
                    <div>
                        <p className="text-sm">You say “no” and attempt
                        to neutralize a spell being cast
                        nearby. You must declare you are using this ability before the Guide
                        describes the consequences of the
                        spell.</p>
                    </div>
                </div>
            </div>
            {/* Title */}
            
        </div>
    )
}