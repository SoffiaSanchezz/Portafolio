import React from 'react'
import Navbar from '../Componentes/Navbar'
import ParticleBackground from '../Componentes/ParticlesBackground'
import Project from '../Componentes/Project'


const Portafolio = () => {
    return (
        <>
            <Navbar/>
            <div>
            <h2 className='font-BlackA text-center text-violet-600 text-5xl'>Proyectos</h2>
            </div>
            <div className='flex w-full justify-center'>
                <div className='flex flex-wrap gap-8 justify-center items-center pt-10 pb-6 sm:pt-36 w-11/12'>
                
                    <Project/>
                </div>
            </div>
            <div className='pt-16'>
            </div>
        </>
    )
}

export default Portafolio