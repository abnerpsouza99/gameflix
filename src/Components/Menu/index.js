import React from 'react';
import Logo from '../../assets/Logo-Sombra.png'
import './Menu.css'

export default function Menu(){
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} className="Logo" alt="Gameflix Logo"/>
      </a>
    </nav>
  )
}