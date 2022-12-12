import React from "react";
import Replica from '../assets/Replica.png'
import Spy from '../assets/Spy.png'
import Shop from '../assets/Shop.png'
import Te from '../assets/Te.png'
import Tetris from '../assets/Tetris.png'
import Calculadora from '../assets/Calculadora.png'


const projects = [
    {
        image: Replica, 
        demo:'https://deezer-replica.vercel.app/', 
        repo:'https://github.com/SoffiaSanchezz/Deezer-Replica.git'
    },

    {
        image: Spy, 
        demo:'https://spy-x-family-41l8.vercel.app/', 
        repo:'https://github.com/SoffiaSanchezz/Spy-X-Family.git'
    },

    {
        image: Shop, 
        demo:'https://proyecto-3-zs.vercel.app/', 
        repo:'https://github.com/SoffiaSanchezz/proyecto-zShop.git'
    },

    {
        image: Te, 
        demo:'https://manuel101284.github.io/TeSabujcha/index.html', 
        repo:'https://github.com/manuel101284/TeSabujcha.git'
    },

    {
        image: Tetris, 
        demo:'https://proyecto-tetris.vercel.app/', 
        repo:'https://github.com/SoffiaSanchezz/Proyecto-tetris.git'
    },

    {
        image: Calculadora, 
        demo:'https://proyect-calculadora-rho.vercel.app/', 
        repo:'https://github.com/SoffiaSanchezz/Proyect-Calculator.git'
    },
];

const Cards = () => {
    return (
        <>
            {
                projects.map(p => {
                    return(
                        <div key={p.image} className='cardAni w-60 h-fit z-40 hover:scale-110'>
                            <div style={{height: '100 px'}} className='w-60 bg-white rounded-t-lg'>
                                <img className='rounded-t-lg' src={p.image} alt="" />
                            </div>
                            <div className='bg-card w-60 flex rounded-b-lg'>
                                <a href={p.demo} target={'_blank'} className='rounded-bl-lg w-1/2 h-12 flex justify-center items-center  text-white font-bold font-Sniglet'>DEMO</a>
                                <a href={p.repo} target={'_blank'} className='rounded-br-lg w-1/2 h-12 flex justify-center items-center  text-white font-bold font-BlackA'>REPO</a>
                            </div>
                        </div>
                    )
                })
            }
        </> 
    )
}

export default Cards