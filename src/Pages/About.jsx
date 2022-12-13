import React from 'react'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import Navbar from '../Componentes/Navbar'
import ParticleBackground from '../Componentes/ParticlesBackground'
import yo from '../assets/yo.png'
import '../styles/style.css'


const About = () => {

    return (
    <>
    <Navbar/>
            <ParticleBackground/>
            <section className='p-40 pb-0 lg:flex lg:flex-row-reverse flex  items-center'>
                <div className='lg:w-1/2 w-full flex justify-center wallpaper'>
                    <img className='yo z-30  lg:w-9/12 md:w-60' src={yo} alt="" />
                </div>
                        <div>
                        <h2 className="title font-BlackA text-center"> ¿Quien Soy?</h2>
                            <pre className='pl-7'>
                                <span class="text-white font-Sniglet flex-auto">
                                    Soy Sofia Dayana Sanchez Vargas, tengo 22 años, soy<br/>desarrolladora web "Full Stack", apasionada<br/>busco contribuir en este sector con mis habilidades<br/>y 
                                    enriquecer mis conocimientos técnicos. He<br/>desarrollado 
                                    Proyectos especialmente con metodologías Scrum.<br/>con conocimientos en  tecnologías como React JS,<br/>, html, css, JavaScript Framework (tailwindcss y Boostrap)
                                    <br/>Soy muy trabajador y tengo buenas habilidades de trabajo en equipo. <br/>Con alto 
                                    sentido de<br/>responsabilidad y comunicación 
                                    <br/>asertiva.
                                </span>
                            </pre>
                            <div className="Myerror">&#126; Exit</div>
                        </div>
                        <section>
                        <div class="button">
                        <button class="button">
                        <div class="icon">
                        </div>
                        <p>Telegram</p>
                        </button>
                        </div>
                        <p></p>
                        
                        </section>
            </section>
        </>
    )
}


export default About