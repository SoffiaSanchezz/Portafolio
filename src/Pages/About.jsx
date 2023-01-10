import React from 'react'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import Navbar from '../Componentes/Navbar'
import ParticleBackground from '../Componentes/ParticlesBackground'
import yo from '../assets/yo.png'


const About = () => {

    return (
        <>
            <Navbar />
            <ParticleBackground />
            <section className='sm:p-32 md:pb-0 p-10 flex z-50'>
                <div className='lg:w-1/2 w-full justify-center pt-12'>
                    <h2 className='font-fredoka'>
                        <div className='font-BlackA text-violet-600 text-8xl text-center z-40'>
                        ¿Quien soy yo?
                        </div>
                        <div className='text-white font-Sniglet text-center'><br/>
                        Soy Sofia Dayana Sanchez Vargas, tengo 22 años, soy desarrolladora web "Full Stack", apasionada busco contribuir en este sector con mis habilidades y
                            enriquecer mis conocimientos técnicos. He desarrollado
                            Proyectos especialmente con metodologías Scrum.con conocimientos en  tecnologías como React JS, html, css, JavaScript Framework (tailwindcss y Boostrap)
                            Soy muy trabajador y tengo buenas habilidades de trabajo en equipo. Con alto
                            sentido de responsabilidad y comunicación
                            asertiva.
                        </div>
                    </h2>
                </div>

                <div className='lg:w-1/2 w-0 flex justify-center'>
                    <img className='yo bg-[#D98DD6] rounded-full border-2 border-rose-600  z-30 hidden lg:block flex-col lg:w-9/12' 
                    src={yo} alt="" />
                </div>
            </section>
            <div className='pt-16'>
            </div>
        </>
    )
}


export default About