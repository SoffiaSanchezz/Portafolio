import React from 'react'
import ParticlesBackground from '../Componentes/ParticlesBackground'
import { ContactForm } from '../Componentes/ContactForm'
import Navbar from '../Componentes/Navbar'

const FindMe = () => {
    return (
        <>
        <Navbar/>
        <ParticlesBackground/>
        <section className='md:p-32 pt-10 pb-0 flex lg:flex-row flex-col'>
                <div className='z-40 lg:w-1/2 w-full flex justify-center'>
                    <div className='form-bg w-72 h-96 rounded-lg'>
                        <p className='font-fredoka text-center text-white pt-2'>Send me an email!</p>
            <ContactForm/>
            </div>
                </div>
                <div className='z-40 lg:w-1/2 w-full flex flex-col items-center pb-6'>
                    <div className='social flex w-4/12 gap-5'>
                    </div>
                </div>
            </section>
            <div className='pt-16'>
            </div>
        </>
    )
}

export default FindMe