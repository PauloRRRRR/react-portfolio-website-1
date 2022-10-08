import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_aifwxe6', 'template_3dguf8g', form.current, '_-_TdJmRLLm3pkWFl')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Entre em contato</h5>
      <h2>Me contate</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>notadead5@gmail.com</h5>
            <a href="mailto: notadead5@gmail.com" target="_blank">Me envie uma mensagem</a>
          </article>
    
          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>notadead5@gmail.com</h5>
            <a href="https://www.linkedin.com/in/paulo-ricardo-6a5038193/" target="_blank">Meu LinkedIn</a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>81 99595-7956</h5>
            <a href="https://api.whatsapp.com/send?phone+55081995957956" target="_blank">Me envie uma mensagem</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Seu nome completo' />
          <input type="email" name='email' placeholder='Seu Email' />
          <textarea name="message" cols="30" rows="7" placeholder='Sua Mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact