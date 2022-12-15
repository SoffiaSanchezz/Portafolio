import React from 'react'

export const ContactForm = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_r2uvdnc', 'template_9i473tc', e.target, 'zZp7mNfs8kxSN2DEt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <>
            <form onSubmit={sendEmail} className='p-5 flex flex-col justify-start'>
                <label className='font-Sniglet' htmlFor="">Correo</label>
                <input className='rounded-lg bg-slate-100' type="email" name='from_name' />
                <label className='font-Sniglet' htmlFor="">Asunto</label>
                <input className='rounded-lg bg-slate-100' type="text" name='subject' />
                <label className='font-Sniglet' htmlFor="">Mensaje</label>
                <textarea className='rounded-lg bg-slate-100' name="message" rows="6"></textarea>
                <button className='m-auto mt-3 z-30 relative w-32 p-2 font-rubik text-white font-bold rounded-full bg-[#7557d2] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300' type='submit'>
                    Enviar
                </button>
            </form>
        </>
    )
}
