import React from 'react'
import Navbar from '../Pages/Portafolio'
import imgone from '../assets/imgone.png'
import ParticleBackground from '../Componentes/ParticlesBackground'
import { NavLink } from 'react-router-dom'

const Landing = () => {

return (
    <>

    <Navbar/>
            <ParticleBackground/>
            <section className='sm:p-32 md:pb-0 p-10 flex'>
                <div className='lg:w-1/2 w-full justify-center pt-12'>
                    <h2 className='text-7xl font-fredoka'>
                        <div className='title font-BlackA'>¡Bienvenidos!</div>
                        <div className='titleTwo font-Sniglet'>Conoce Mi Portafolio</div>
                    </h2>
                    <div className='text-3xl py-6 md:h-28 h-28 font-rubik text-[#ffff]'></div>
                    <div className='pt-10 sm:pt-1 flex gap-3'>
                    <NavLink to={'Portafolio'}><button className='Ver Mas'></button></NavLink>
                    </div>
                </div>
                <div className='lg:w-1/2 w-0 flex justify-center'>
                    <img className='imgone z-30 hidden lg:block lg:w-9/12' src={imgone} alt="" />
                </div>
            </section>
            <div className='pt-16'>
            </div>
        </>
    )
}

export default Landing