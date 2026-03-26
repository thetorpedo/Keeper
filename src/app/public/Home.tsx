import sombraSm from "@/assets/sombra-sm.png";
import sombra from "@/assets/sombra.png";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/ui/footer.tsx";
import Navbar from "../../components/ui/navbar.tsx";
import Button from "../../components/ui/questbutton.tsx";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-between items-center bg-white min-h-screen w-full">
            <Navbar />
                <main className="my-10 max-w-5/6 space-y-5 flex flex-1 flex-col items-center md:flex-row-reverse">
                    <div className="max-md:border-b-2">
                        <img
                            src={sombraSm}
                            className=" w-full max-w-100 h-full md:hidden"
                            alt="Keeper's Mascot: Sombra"
                        ></img>
                        <img
                            src={sombra}
                            className=" w-100 -scale-x-100 h-full max-md:hidden"
                            alt="Keeper's Mascot: Sombra"
                        ></img>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-5 max-w-125 ">
                        <p className="font-alegraya text-3xl/8 md:text-5xl text-center font-medium md:mb-10">
                            <span className="font-extrabold ">Create</span>,
                            <span className="font-extrabold "> store</span>, and
                            <span className="font-extrabold "> share</span> your
                            character sheet in just a few clicks.
                        </p>
                        <Button
                            text="Create Character"
                            isImportant
                            isBold
                            onClick={() => navigate("/create")}
                            className="px-6 py-3 text-3xl"
                        />
                        <Button
                            text="View Characters"
                            onClick={() => navigate("/view")}
                        />
                    </div>
                </main>
            <Footer />
        </div>
    );
}

export default Home;
