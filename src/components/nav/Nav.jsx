import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineAccountBook, AiOutlineMessage} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><AiOutlineBook/></a>
      <a href="#portfolio"><AiOutlineAccountBook/></a>
      <a href="#contact"><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav
