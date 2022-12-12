import { CgMenuRound } from "react-icons/cg";
import { FcHome } from "react-icons/fc";
import { FcSelfie } from "react-icons/fc";
import { FcBusiness } from "react-icons/fc";
import { FcRules } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import Navbar from "./Navbar";


const Connectors = () => {
return (
    <>

    <div className="idden fixed left-5 top-52 bottom-52 lg:flex flex-col items-center justify-center gap-4 z-30">

    <link to="/">
        <div class="tooltip tooltip-right" data-tip="Home">
        <FcHome className="text-5x1 font-Sniglet"/>
        </div>
    </link>

    <link to="/About">
        <div class="tooltip tooltip-right" data-tip="About">
            <FcSelfie className="text-5x1 font-Sniglet"/>
        </div>
    </link>

    <link to="/Projects">
        <div class="tooltip tooltip-right" data-tip="Projects">
            <FcBusiness className="text-5x1 font-Sniglet"/>
        </div>
    </link>

    <link to="/Perfil">
        <div class="tooltip tooltip-right" data-tip="Perfil">
            <FcRules className="text-5x1 font-Sniglet"/>
        </div>
    </link>

    <link to="/Contact">
        <div class="tooltip tooltip-right" data-tip="Contact">
            <FcBusinessContact className="text-5x1 font-Sniglet"/>
        </div>
    </link>

    </div>

    <div className="block lg:hidden">
        <Navbar/>
    </div>
    </>
)
}

export default Connectors