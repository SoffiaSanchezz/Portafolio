import React from 'react'
import Cards from '../Componentes/Cards'
import Navbar from '../Componentes/Navbar'
import ParticleBackground from '../Componentes/ParticlesBackground'


const Portafolio = () => {
    return (
        <>
            <Navbar/>
            <div className='pt-20'>
            <h2 className='font-BlackA text-center text-violet-600 text-6xl'>Proyectos</h2>
            </div>
            <div className='flex w-full justify-center'>
                <div className='flex flex-wrap  gap-8 justify-center items-center sm:w-11/12'>
                
                    <Cards/>
                </div>
            </div>
            <div className='pt-16'>
            </div>
            <ParticleBackground />
        </>
    )
}

export default Portafolio