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

        <div className="fixed left-5 bottom-3 bg-white h-fit pb-20 px-5 py-5 rounded-md flex flex-col items-center justify-center gap-4 z-20">
            
            <Link to="/" className="center flex-col">
            <FcHome className="text-5xl" />
            <span className="text-sm font-Sniglet">Home</span>
            </Link>

            <link className="center flex-col">
            <FcSelfie className="text-5x1" />
            <span className="text-sm font-Sniglet">About</span>
            </link>

            <link className="center flex-col">
                <FcBusiness className="text-5x1"/>
                <span className="text-sm font-Sniglet">Projects</span>
            </link>

            <link className="center flex-col">
                <FcRules className="text-5x1" />
                <span className="text-sm font-Sniglet">Perfil</span>
            </link>

            <link className="center flex-col">
                <FcBusinessContact className="text-5x1"/>
                <span className="text-sm font-Sniglet">Contact</span>
            </link>
        </div>
        )}
    </div>
    </>
);
};

export default Navbar