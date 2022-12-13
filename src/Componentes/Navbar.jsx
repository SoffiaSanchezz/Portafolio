/*import icons to user*/
import {React, useState} from "react";
import { CgMenuRound } from "react-icons/cg";
import { FcHome } from "react-icons/fc";
import { FcSelfie } from "react-icons/fc";
import { FcBusiness } from "react-icons/fc";
import { FcRules } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { Link } from "react-router-dom";


const Navbar = () => {

    const [menu, setMenu] = useState(false)


return (
    <>
    <div className="fixed left-10  z-30 w-fit h-fit bg-purple-300 rounded-full border-4 border-indigo-500/50 "
    onClick={() => setMenu(!menu)}>
    <CgMenuRound className="text-5xl" />
    </div>

    <div>
        {menu && (

        <div className="fixed bottom-1 left-5 bg-black h-fit pb-20 px-5 py-5 rounded-md flex flex-col items-center justify-center gap-5 z-20 w-10">
            
            <Link to="/" className="center flex-col">
            <FcHome className="text-5xl content-center w-10 " />
            <span className="text-sm font-Sniglet text-center text-violet-600">Home</span>
            </Link>

            <Link to="/About" className="center flex-col">
            <FcSelfie className="text-5xl content-center w-10" />
            <span className="text-sm font-Sniglet text-violet-600">About</span>
            </Link>

            <Link to="/portafolio"className="center flex-col">
                <FcBusiness className="text-5xl content-center w-10"/>
                <span className="text-sm font-Sniglet text-violet-600">Projects</span>
            </Link>

            <Link to="/"className="center flex-col">
                <FcRules className="text-5xl content-center w-10" />
                <span className="text-sm font-Sniglet text-violet-600">Perfil</span>
            </Link>

            <Link className="center flex-col">
                <FcBusinessContact className="text-5xl content-center w-10"/>
                <span className="text-sm font-Sniglet text-violet-600">Contact</span>
            </Link>
        </div>
        )}
    </div>
    </>
);
};

export default Navbar