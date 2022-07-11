import React from 'react'
import './about.css'
import Edgar from '../../assets/business-3d-young-man-in-formalwear-sitting-on-the-floor-with-phone.png'
import {FcBusinessman} from 'react-icons/fc'
import {BsFillCalendarEventFill} from 'react-icons/bs'
import {FcGlobe} from 'react-icons/fc';
import {FaThemeisle} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Soy programador</h5>
      <h2>Sobre mi</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Edgar} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FcBusinessman className='about__icon' />
              <h5>Edad</h5>
              <small>21 Años Actualmente.</small>
            </article>

            <article className='about__card'>
              <FcGlobe style={{color: '#49FF00'}} className='about__icon' />
              <h5>País</h5>
              <small>El Salvador.</small>
            </article>

            <article className='about__card'>
              <BsFillCalendarEventFill style={{color: '#F24A72'}} className='about__icon' />
              <h5>Fecha Nacimiento</h5>
              <small>16 de enero 2001.</small>
            </article>
          </div>

          <p>
            Actualmente estoy en mi cuarto año de carrera universitaria, quiero conseguir un puesto laboral donde pueda mejorar mas mis habilidades. Para asi, tener mayor experiencia y ponerla en practica.
          </p>

          <a href="#contact" className='btn btn-primary'>more about me <FaThemeisle style={{marginBottom: "-2px"}}/></a>
        </div>
      </div>
    </section>
  )
}

export default About