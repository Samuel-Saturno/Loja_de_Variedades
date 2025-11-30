import React from 'react'

import { FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

import './index.css'

const Topbar = () => {
  return (
    <div className='topbar-main-container'>
        <div className="topbar-container">
            <div className="phone-container">
                <FaPhone className='phone-icon'/>
                <p className="phone-p">+55 (83) 99999-9999</p>
            </div>
            <div className="catchphrase-container">
                <p className='catchphrase-p'>Produtos com até 20% de desconto | Frete grátis para toda Uiraúna</p>
            </div>
            <div className="locale-container">
                <MdLocationOn className='locale-icon'/>
                <p className="locale-p">Uiraúna, PB</p>
            </div>
        </div>
    </div>
  )
}

export default Topbar
