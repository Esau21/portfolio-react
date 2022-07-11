import React from 'react';
import './contact.css';
import {SiGmail} from 'react-icons/si';
import {BsInstagram} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { useState } from 'react';

const Contact = () => {
  const form = useRef();

  const [done, setDone] =useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2axpukg', 'template_5hspg3f', form.current, '2qyjtTBfrVfRo8tpr')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
};
  return (
    <section id='contact'>
      <h5>Mandame un mensaje</h5>
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <SiGmail className='contact_option-icon' style={{color: '#FF414D'}} />
            <h4>Gmail</h4>
            <h5 style={{marginLeft: '-12px'}}>esaumoran1999@gmail.com</h5>
            <a href="mailto:esaumoran1999@gmail.com" target="_blank"> Send a message</a>
          </article>
          <article className='contact__option'>
            <BsInstagram className='contact_option-icon' style={{color: '#FF06B7'}} />
            <h4>Instagram</h4>
            <h5>Zelaya.21</h5>
            <a href="https://www.instagram.com/zelaya.21_/" target="_blank"> Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact_option-icon' style={{color: '#03C4A1'}} />
            <h4>Whatsapp</h4>
            <h5>+50372814956</h5>
            <a target="_blank" href="https://wa.link/b01xvs"> Send a message</a>
          </article>
        </div>

        <form  ref={form} onSubmit={sendEmail}>
          <input type="text" name='user_name' placeholder='Nombre completo' required />
          <input type="email" name='user_email' placeholder='Tuemail@gmail.com' required />
          <textarea name="message" rows="7" placeholder='Tu mensaje' required></textarea>
          <input type='submit' value="Send" className='btn btn-primary'/>
          <h5>{done && "Gracias por enviar tu correo te contesto en breve :D"}</h5>
        </form>
      </div>
    </section>
  )
}

export default Contact