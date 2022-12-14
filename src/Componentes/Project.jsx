import React from 'react'
import Replica from '../assets/Replica.png'
import Spy from '../assets/Spy.png'
import Shop from '../assets/Shop.png'
import Te from '../assets/Te.png'
import Tetris from '../assets/Tetris.png'
import Calculadora from '../assets/Calculadora.png'
import ParticlesBackground from './ParticlesBackground'
import ReactModal from 'react-modal';
import { DiGithub } from "react-icons/di"
import { MdOutlineQueuePlayNext } from "react-icons/md"


const projects = [

    {
        image: Replica,
        demo: 'https://deezer-replica.vercel.app/',
        repo: 'https://github.com/SoffiaSanchezz/Deezer-Replica.git'
    },

    {
        image: Spy,
        demo: 'https://spy-x-family-41l8.vercel.app/',
        repo: 'https://github.com/SoffiaSanchezz/Spy-X-Family.git'
    },

    {
        image: Shop,
        demo: 'https://proyecto-3-zs.vercel.app/',
        repo: 'https://github.com/SoffiaSanchezz/proyecto-zShop.git'
    },

    {
        image: Te,
        demo: 'https://manuel101284.github.io/TeSabujcha/index.html',
        repo: 'https://github.com/manuel101284/TeSabujcha.git'
    },

    {
        image: Tetris,
        demo: 'https://proyecto-tetris.vercel.app/',
        repo: 'https://github.com/SoffiaSanchezz/Proyecto-tetris.git'
    },

    {
        image: Calculadora,
        demo: 'https://proyect-calculadora-rho.vercel.app/',
        repo: 'https://github.com/SoffiaSanchezz/Proyect-Calculator.git'
    },
];

const Project = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <ParticlesBackground />
            {
                projects.map(p => {
                    return (
                        <div key={p.image} className='cardAni w-60 h-fit z-40 hover:scale-110'>
                            <div style={{ height: '100 px' }} className='w-60  rounded-t-lg'>
                                <img className='rounded-t-lg' src={p.image} alt="" />
                            </div>
                            <div className='bg-card w-60 flex rounded-b-lg'>
                                <a href={p.demo} target={'_blank'} className='rounded-bl-lg w-1/2 h-12 flex justify-center items-center  text-white font-bold font-Sniglet'><MdOutlineQueuePlayNext/></a>
                                <a href={p.repo} target={'_blank'} className='rounded-br-lg w-1/2 h-12 flex justify-center items-center  text-white font-bold font-Sniglet'><DiGithub/></a>
                            </div>
                        </div>

                        


                    )
                })
            }
        </>
    )
}

export default Project