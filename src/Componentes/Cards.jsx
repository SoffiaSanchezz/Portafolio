import ReactModal from 'react-modal';
import React, { useState } from 'react';
import Replica from '../assets/Replica.png'
import Spy from '../assets/Spy.png'
import Shop from '../assets/Shop.png'
import Te from '../assets/Te.png'
import Tetris from '../assets/Tetris.png'
import Multi from '../assets/Multi.png'
import Calculadora from '../assets/Calculadora.png'
import Many from '../assets/cliente.png'
import ParticlesBackground from './ParticlesBackground'
import { DiGithub } from "react-icons/di"
import { MdOutlineQueuePlayNext } from "react-icons/md"
import Deezer from '../assets/Deezer.png'
import SpyX from '../assets/SpyX.png'
import ZShop from '../assets/ZShop.png'
import Lan from '../assets/Lan.png'
import Semilla from '../assets/Sabu.png'
import Cal from '../assets/Cal.jpeg'
import Tetriss from '../assets/Tetrisss.png'


const Cards = () => {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-10 p-5 px-24 '>
      <button onClick={() => setIsOpen(true)}>
        <h2 className='font-Lobster text-3xl text-white'>
          Replica de Deezer
        </h2>
        <img src={Replica} alt='' className='hover:scale-125' />
      </button>

      <button onClick={() => setIsOpen(true)}>
        <h2 className='font-Lobster text-3xl text-white'>
          Pagina Tributo
        </h2>
        <img src={Shop} alt='' className='hover:scale-125' />
      </button>

      <button onClick={() => setIsOpen(true)}>
        <h2 className='font-Lobster text-3xl text-white'>
          zShop
        </h2>
        <img src={Spy} alt='' className='hover:scale-125' />
      </button>

      <button onClick={() => setIsOpen(true)}>
        <h2 className='font-Lobster text-3xl text-white'>
          Lan SabujCha
        </h2>
        <img src={Te} alt='' className='hover:scale-125' />
      </button>

      <button onClick={() => setIsOpen(true)}>
        <h2 className='font-Lobster text-3xl text-white'>
          Fundacion Semilla
        </h2>
        <img src={Tetris} alt='' className='hover:scale-125' />
      </button>

      <button onClick={() => setIsOpen(true)}>
        <h2 className='font-Lobster text-3xl text-white'>
          Calculadora
        </h2>
        <img src={Calculadora} alt='' className='hover:scale-125' />
      </button>

      <button onClick={() => setIsOpen(true)}>
        <h2 className='font-Lobster text-3xl text-white'>
          Tetris
        </h2>
        <img src={Multi} alt='' className='hover:scale-125' />
      </button>

      <button onClick={() => setIsOpen(true)}>
        <h2 className='font-Lobster text-3xl text-white'>
          Many Makups
        </h2>
        <img src={Many} alt='' className='hover:scale-125' />
      </button>

      <ReactModal
        isOpen={isOpen}
        contentLabel="Dezeer"
        onRequestClose={() => setIsOpen(false)}
      >
        <div className='px-10'>
          <h2 className='font-BlackA text-5xl text-center'>
            Replica Deezer
          </h2>
          <br />
          <div className='text-2xl flex flex-col justify-center text-center'> 
          <p>Se realizo la replica de la pagina deezer casi en su totalidad solamente con Html y css sin frameworks y realizandola lo mas parecido posible.</p>
          <img src={Deezer} alt="" className='scale-90'/>
          </div>
          <div className='flex flex-row justify-between '>
        <a href='https://deezer-replica.vercel.app'>
          <MdOutlineQueuePlayNext className='text-black text-6xl'/> Demo </a>
        <a href='https://github.com/SoffiaSanchezz/Deezer-Replica.git'>
          <DiGithub className='text-black text-6xl bottom-7'/>Github</a>
          </div>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={isOpen}
        contentLabel="Spy"
        onRequestClose={() => setIsOpen(false)}
      >
        <div className='px-10'>
          <h2 className='font-BlackA text-5xl text-center'>
            SPY X FAMILY
          </h2>
          <br />
          <div className='text-2xl flex flex-col justify-center text-center'> 
          <p>Se realizo la construcción de un blog con una temática, para esto se tomo una plantilla que se uso como base para el desarrollo de tu proyecto el cual se modifico el contenido y se le dio un diseño segun la temática.</p>
          <img src={SpyX} alt="" className='scale-90'/>
          </div>
          <div className='flex flex-row justify-between	px-10 '>
          <a href='https://spy-x-family-41l8.vercel.app/'>
          <MdOutlineQueuePlayNext className='text-5xl'/> Demo </a>
        <a href='https://github.com/SoffiaSanchezz/Spy-X-Family.git'><DiGithub className='text-black text-6xl bottom-7'/>Github</a>
          </div>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={isOpen}
        contentLabel="zShop"
        onRequestClose={() => setIsOpen(false)}
      >
        <div className='px-10'>
          <h2 className='font-BlackA text-5xl text-center'>
            zShop
          </h2>
          <br />
          <div className='text-2xl flex flex-col justify-center text-center'> 
          <p>Se realizo proyecto de la compañía Z-Shop el cual se modifico en su diseño el cual solamente se trabajo en css modificando vista por vista.</p>
          <img src={ZShop} alt="" className='scale-90'/>
          </div>
          <div className='flex flex-row justify-between	px-10 '>
          <a href='https://proyecto-3-zs.vercel.app/'>
          <MdOutlineQueuePlayNext className='text-5xl'/> Demo </a>
        <a href='https://github.com/SoffiaSanchezz/proyecto-zShop.git'><DiGithub className='text-black text-6xl bottom-7'/>Github</a>
          </div>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={isOpen}
        contentLabel="SabujCha"
        onRequestClose={() => setIsOpen(false)}
      >
        <div className='px-10'>
          <h2 className='font-BlackA text-5xl text-center'>
          Te verde SabujCha
          </h2>
          <br />
          <div className='text-2xl flex flex-col justify-center text-center'> 
          <p>Se realizo proyecto de el emprendimiento SabujCha de productos naturales donde la pagina web para promocionar los productos.</p>
          <img src={Lan} alt="" className='scale-90'/>
          </div>
          <div className='flex flex-row justify-between	px-10 '>
          <a href='https://manuel101284.github.io/TeSabujcha/index.html'>
          <MdOutlineQueuePlayNext className='text-5xl'/> Demo </a>
        <a href='https://github.com/manuel101284/TeSabujcha.git'><DiGithub className='text-black text-6xl bottom-7'/>Github</a>
          </div>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={isOpen}
        contentLabel="Fundacion"
        onRequestClose={() => setIsOpen(false)}
      >
        <div className='px-10'>
          <h2 className='font-BlackA text-5xl text-center'>
          Fundacion Semilla
          </h2>
          <br />
          <div className='text-2xl flex flex-col justify-center text-center'> 
          <p>Se realizo proyecto en el cual ofrece diplomados en sostenibilidad del medio ambiente, desea saber el estado de ánimo sus alumnos, además de querer suministrarles una herramienta de fácil manejo.</p>
          <img src={Semilla} alt="" className='scale-90'/>
          </div>
          <div className='flex flex-row justify-between	px-10 '>
          <a href='https://proyecto-semillas.netlify.app/'>
          <MdOutlineQueuePlayNext className='text-5xl'/> Demo </a>
        <a href='https://github.com/H4r0l/Project-Semillas.git'><DiGithub className='text-black text-6xl bottom-7'/>Github</a>
          </div>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={isOpen}
        contentLabel="Calculadora"
        onRequestClose={() => setIsOpen(false)}
      >
        <div className='px-10'>
          <h2 className='font-BlackA text-5xl text-center'>
          Calculadora
          </h2>
          <br />
          <div className='text-2xl flex flex-col justify-center text-center'> 
          <p>Se realizo una calculadora la cual realiza operaciones basicas como sumas restas multiplicacion divicion la cual se le implemento modo dia y noche en el que se trabajo con html, css y JavaScript.</p>
          <img src={Cal} alt="" className='scale-90'/>
          </div>
          <div className='flex flex-row justify-between	px-10 '>
          <a href='https://proyect-calculadora-rho.vercel.app/'>
          <MdOutlineQueuePlayNext className='text-5xl'/> Demo </a>
        <a href='https://github.com/SoffiaSanchezz/Proyect-Calculator.git'><DiGithub className='text-black text-6xl bottom-7'/>Github</a>
          </div>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={isOpen}
        contentLabel="Tetris"
        onRequestClose={() => setIsOpen(false)}
      >
        <div className='px-10'>
          <h2 className='font-BlackA text-5xl text-center'>
          Multiverso de Tetris
          </h2>
          <br />
          <div className='text-2xl flex flex-col justify-center text-center'> 
          <p>Se realizo una tetris la cual se le implemento colores y figuras a la azar tablero de puntaje ventanas modal botones para mover las figuras y sonido para una vuena experiencia de usuario en la que se trabajo con html, css y JavaScript.</p>
          <img src={Tetriss} alt="" className='scale-90'/>
          </div>
          <div className='flex flex-row justify-between	px-10 '>
          <a href='https://proyecto-tetris.vercel.app/'>
          <MdOutlineQueuePlayNext className='text-5xl'/> Demo </a>
        <a href='https://github.com/SoffiaSanchezz/Proyecto-tetris.git'><DiGithub className='text-black text-6xl bottom-7'/>Github</a>
          </div>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={isOpen}
        contentLabel="Many"
        onRequestClose={() => setIsOpen(false)}
      >
        <div className='px-10'>
          <h2 className='font-BlackA text-5xl text-center'>
          Many Makups Shop
          </h2>
          <br />
          <div className='text-2xl flex flex-col justify-center text-center'> 
          <p>Se realizo una landing page para el publico la cual es de una tienda online de una tienda la cual ofrece productos de maquillaje y todo tipo de accesorios con la informacion del lugar y dar una buena experiencia de usuario y aumentar ventas </p>
          <img src={Many} alt="" className='scale-90'/>
          </div>
          <div className='flex flex-row justify-between	px-10 '>
          <a href='https://proyecto-tetris.vercel.app/'>
          <MdOutlineQueuePlayNext className='text-5xl'/> Demo </a>
        <a href='https://github.com/SoffiaSanchezz/Proyecto-tetris.git'><DiGithub className='text-black text-6xl bottom-7'/>Github</a>
          </div>
        </div>
      </ReactModal>


      <ParticlesBackground />
    </div>

    

  )
}

export default Cards