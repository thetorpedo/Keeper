
export default function Card(){

    // Se mobile desativar botão de gastar ap e rolar dado.

    return(
        // <div className=" ">
            <div
            onClick={() => console.log("!")}
            className="relative h-38 -mt-23 overflow-hidden w-fit border-b bg-white rounded-t-lg  hover:h-50 hover:-mt-35 transition-all duration-300">
                {/* Outer Box */}
                <div className="w-full rounded-lg border border-gray-400 p-2.5 pt-2">
                    <div className="flex justify-center -mb-4">
                        <div className="flex justify-center gap-2 px-2 relative bg-white">
                            {/* AP */}
                            <div className="flex items-center group relative"> 
                                {/* <Tooltip message="Click to spend AP"> */}
                                    <button 
                                    onClick={() => console.log("!")}
                                    className="flex items-center tooltip relative h-full hover:opacity-50 hover:scale-115 transition-all active:scale-95 cursor-pointer">
                                    <span className="bg-black px-1.5 py-0.5 text-white font-alegraya-sans font-bold leading-none flex items-center justify-center">
                                        2
                                    </span>
                                    <img 
                                        src="../../src/assets/APVector.svg" 
                                        className="h-5 w-auto block"
                                        alt=""
                                    />     
                                </button>
                                {/* </Tooltip> */}
                            </div>
                            {/* Name */}
                            <div className="flex items-center h-full">
                                <span className="font-alegraya-sans lowercase font-extrabold text-2xl text-center ">
                                BLINK    
                                </span>
                                
                            </div>
                            {/* Roll */}
                            <div className="flex items-center h-full">
                                <button 
                                onClick={() => console.log("!")}
                               className="font-alegraya-sans cursor-pointer hover:opacity-50 hover:scale-108 transition-all active:scale-100 lowercase border px-1.5 py-0.5 text-[14px] leading-none flex items-center justify-center">
                                    ROLL THE DIE
                                </button>
                            </div>
                        </div>
                        
                    </div>
                    {/* Inner Box */}
                    <div className="border-4 min-h-70 border-amber-300 rounded-lg text-justify p-3 pt-4">
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
        // </div>
        
    )
}