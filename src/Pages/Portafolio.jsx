import React from 'react'
import Cards from "../Componentes/Cards"
import Navbar from '../Componentes/Navbar'
import ParticleBackground from '../Componentes/ParticlesBackground'

const Portafolio = () => {
    return (
        <>
            <Navbar/>
            <div className='flex w-full justify-center'>
                <div className='flex flex-wrap gap-8 justify-center items-center pt-10 pb-6 sm:pt-36 w-11/12'>
                    <Cards/>
                </div>
            </div>
            <div className='pt-16'>
            </div>
        </>
    )
}

export default Portafolio