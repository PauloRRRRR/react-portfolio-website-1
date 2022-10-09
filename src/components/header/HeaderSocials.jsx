import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/paulo-ricardo-6a5038193/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/PauloRRRRR" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials