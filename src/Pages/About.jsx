import React from 'react'
import Navbar from '../Componentes/Navbar'
import ParticleBackground from '../Componentes/ParticlesBackground'
import yo from '../assets/yo.png'


const About = () => {

    return (
    <>
    <Navbar/>
            <ParticleBackground/>
            <section className='p-32 pb-0 lg:flex lg:flex-row flex flex-col items-center'>
                <div className='lg:w-1/2 w-full flex justify-center'>
                    <img className='yo z-30  lg:w-9/12 md:w-60' src={yo} alt="" />
                </div>

                <div className='z-50 lg:w-1/2 w-full justify-center'>
                    <div className="Myterminal">
                        <div className="Myheader">
                            <div className="btn red"></div>
                            <div className="btn yellow"></div>
                            <div className="btn green"></div>
                        </div>
                        <div className="Myfield">
                            <h2 className="Myinfo font-BlackA text-white"> ¿Quien Soy?</h2>
                            <pre>
                                <span>
                                    Soy Sofia Dayana Sanchez Vargas, tengo 22 años, soy<br/>desarrolladora web "Full Stack", apasionada<br/>busco contribuir en este sector con mis habilidades<br/>y 
                                    enriquecer mis conocimientos técnicos. He<br/>desarrollado 
                                    Proyectos especialmente con metodologías Scrum.<br/>con conocimientos en  tecnologías como React JS,<br/>, html, css, JavaScript Framework (tailwindcss y Boostrap)
                                    Soy muy trabajador y tengo buenas habilidades de trabajo en equipo. Con alto 
                                    sentido de<br/>responsabilidad y comunicación 
                                    <br/>asertiva.
                                </span>
                            </pre>
                            <div className="Myerror">&#126; Exit;</div>
                        </div>
                    </div>
                </div>

            </section>
            <NavbarFloatting/>
        </>
    )
}


export default About