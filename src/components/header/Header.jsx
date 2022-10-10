import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/foto1-fococlipping-standard.png'
import SOCIALS from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, me chamo</h5>
        <h1>Paulo Ricardo</h1>
        <h5 className='text-light'>Web Developer</h5>
        <CTA/>
        <SOCIALS/>

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
