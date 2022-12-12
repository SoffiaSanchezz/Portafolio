import React from 'react'
import Navbar from '../Componentes/Navbar'
import ParticleBackground from '../Componentes/ParticlesBackground'

const Contact = () => {
    return (
        <>
            <Navbar/>
            <section className='md:p-32 pt-10 pb-0 flex lg:flex-row flex-col'>
                <div className='z-40 lg:w-1/2 w-full flex justify-center'>
                    <div className='form-bg w-72 h-96 rounded-lg'>
                        <p className='font-fredoka text-center text-white pt-2'>Send me an email!</p>
                        <Form/>
                    </div>
                </div>
                <div className='z-40 lg:w-1/2 w-full flex flex-col items-center pb-6'>
                    <img className='ovni' src={ovni} alt="" />
                    <div className='social flex w-4/12 gap-5'>
                        <a className='flex justify-center' href="https://github.com/majoalba20" target={'_blank'}><img src={github} alt="" /></a>
                        <a className='flex justify-center' href="https://www.linkedin.com/in/mar%C3%ADa-jos%C3%A9-alba-a74703232/" target={'_blank'}><img src={linkedin} alt="" /></a>
                    </div>
                </div>
            </section>
            <div className='pt-16'>
            </div>
        </>
    )
}

export default Contact