import ReactModal from 'react-modal';
import React, { useState } from 'react';
import Replica from '../assets/Replica.png'
import Spy from '../assets/Spy.png'
import Shop from '../assets/Shop.png'
import Te from '../assets/Te.png'
import Tetris from '../assets/Tetris.png'
import Calculadora from '../assets/Calculadora.png'
import ParticlesBackground from './ParticlesBackground'
import { DiGithub } from "react-icons/di"
import { MdOutlineQueuePlayNext } from "react-icons/md"

const Cards = () => {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-10 p-5 px-24  '>
      <button onClick={() => setIsOpen(true)}>
        <h2 className='font-Lobster text-3xl text-white'>
          Replica de Deezer
        </h2>
        <img src={Replica} alt='' className='w-80 hover:scale-110' />
        <div className='flex flex-row justify-between	px-10 '>
        <a href='https://deezer-replica.vercel.app'>
          <MdOutlineQueuePlayNext className='text-white text-5xl'/></a>
        <a href='https://github.com/SoffiaSanchezz/Deezer-Replica.git'>
          <DiGithub className='text-white text-6xl bottom-7'/></a>
          </div>
      </button>

      <button onClick={() => setIsOpen(true)}>
        <h2 className='font-Lobster text-3xl'>
          Pagina Tributo
        </h2>
        <img src={Spy} alt='' className='' />
        <a href='https://deezer-replica.vercel.app'>
          <MdOutlineQueuePlayNext /></a>
        <a href='https://github.com/SoffiaSanchezz/Deezer-Replica.git'>
          <DiGithub /></a>
      </button>

      <button onClick={() => setIsOpen(true)}>
        <h2 className='font-Lobster text-3xl'>
          Replica de Deezer
        </h2>
        <img src={Shop} alt='' className='' />
        <a href='https://deezer-replica.vercel.app'>
          <MdOutlineQueuePlayNext /></a>
        <a href='https://github.com/SoffiaSanchezz/Deezer-Replica.git'>
          <DiGithub /></a>
      </button>

      <button onClick={() => setIsOpen(true)}>
        <h2 className='font-Lobster text-3xl'>
          Replica de Deezer
        </h2>
        <img src={Te} alt='' className='' />
        <a href='https://deezer-replica.vercel.app'>
          <MdOutlineQueuePlayNext /></a>
        <a href='https://github.com/SoffiaSanchezz/Deezer-Replica.git'>
          <DiGithub /></a>
      </button>

      <button onClick={() => setIsOpen(true)}>
        <h2 className='font-Lobster text-3xl'>
          Replica de Deezer
        </h2>
        <img src={Tetris} alt='' className='' />
        <a href='https://deezer-replica.vercel.app'>
          <MdOutlineQueuePlayNext /></a>
        <a href='https://github.com/SoffiaSanchezz/Deezer-Replica.git'>
          <DiGithub /></a>
      </button>

      <button onClick={() => setIsOpen(true)}>
        <h2 className='font-Lobster text-3xl'>
          Replica de Deezer
        </h2>
        <img src={Calculadora} alt='' className='' />
        <a href='https://deezer-replica.vercel.app'>
          <MdOutlineQueuePlayNext /></a>
        <a href='https://github.com/SoffiaSanchezz/Deezer-Replica.git'>
          <DiGithub /></a>
      </button>

      <button onClick={() => setIsOpen(true)}>
        <h2 className='font-Lobster text-3xl'>
          Replica de Deezer
        </h2>
        <img src={Replica} alt='' className='' />
        <a href='https://deezer-replica.vercel.app'>
          <MdOutlineQueuePlayNext /></a>
        <a href='https://github.com/SoffiaSanchezz/Deezer-Replica.git'>
          <DiGithub /></a>
      </button>

      <ReactModal
        isOpen={isOpen}
        contentLabel="Slideshow02"
        onRequestClose={() => setIsOpen(false)}
      >
        <div className='p-10'>
          <h2 className='font-Lobster text-3xl text-center'>
            Replica Deezer
          </h2>
          <br />
          <p className='text-2xl'>Contiene 4 brochas, tres para ojos, difuminadora, aplicadora,detalles y una para piel la puedes usar como iluminador o
            polvos
          </p>
        </div>
      </ReactModal>
      <ParticlesBackground />
    </div>

  )
}

export default Cards