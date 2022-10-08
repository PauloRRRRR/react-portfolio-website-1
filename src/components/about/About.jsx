import React from 'react'
import './about.css'
import ME from '../../assets/foto.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Para conhecer</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>2+ anos trabalhando</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos completos</h5>
              <small>20+</small>
            </article>
            
          </div>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas et aspernatur fugit, ipsam unde iste fugiat reiciendis temporibus sed dolor nihil tempora consequatur adipisci reprehenderit ut quod deserunt. In?
          </p>
          <a href="#contact" className='btn btn-primary'>Entre em contato</a>
        </div>
      </div>
    </section>
  )
}

export default About
