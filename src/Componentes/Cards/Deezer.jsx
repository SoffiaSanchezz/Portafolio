import ReactModal from 'react-modal';
import React, { useState } from 'react';
import Replica from '../../assets/Replica.png'
import Deezer from '../../assets/Deezer.png'
import { MdQueuePlayNext } from "react-icons/md"
import { DiGithub } from "react-icons/di"

const Deezer = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className='grid grid-cols-2 md:grid-cols-4 gap-10 p-5 '>
            <button onClick={() => setIsOpen(true)}>
                <h2 className='font-Lobster text-3xl'>
                    Replica Deezer
                </h2>
                <img src={Replica} alt='' className='hover:scale-125' />

            </button>

            <ReactModal
                isOpen={isOpen}
                contentLabel="Slideshow02"
                onRequestClose={() => setIsOpen(false)}
            >
                <div>
                    <h2 className='font-Lobster text-3xl text-center'>
                        Kit Brocha Labial
                    </h2>
                    <br />
                    <p className='text-2xl'>Contiene 4 brochas, tres para ojos, difuminadora, aplicadora,detalles y una para piel la puedes usar como iluminador o
                        polvos
                    </p>
                </div>


            </ReactModal>

            <ReactModal
                isOpen={isOpen}
                contentLabel="Slideshow"
                onRequestClose={() => setIsOpen(false)}
            >
                <div>
                    <h2 className='font-Lobster text-3xl text-center'>
                        Kit Fantacy
                    </h2>
                    <br />
                    <p className='text-2xl'>
                        Brochas de calidad en fibra de nylon, super suaves al tacto, no maltaran la piel, contiene 4 brochas 3 para ojitos y una para rostro, super prácticas de llevar y su diseño es divino.
                    </p>
                </div>
            </ReactModal>


        </div>

    )
}

export default Deezer