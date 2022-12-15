import React from 'react'
import ParticlesBackground from '../Componentes/ParticlesBackground'
import { ContactForm } from '../Componentes/ContactForm'
import Navbar from '../Componentes/Navbar'

const FindMe = () => {
    return (
        <>
            <Navbar />
            <ParticlesBackground />
            <section className='md:pl-44 pt-20 pb-2 flex lg:flex-row flex-col'>
                <div className='z-40 lg:w-1/2 w-full flex justify-center'>
                    <div className='form-bg w-72 h-100 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-400'>
                        <p className='font-Sniglet text-center text-white pt-2 text-2xl'>Enviame un mensaje!</p>
                        <ContactForm />
                </div>
                <div className='z-40 lg:w-1/2 w-full flex flex-col items-center pb-6'>
                    <div className='social flex w-4/12 gap-5'>
                    </div>    
                </div>
                </div>
            </section>
            <div className='pt-16'>
            </div>
        </>
    )
}

export default FindMe