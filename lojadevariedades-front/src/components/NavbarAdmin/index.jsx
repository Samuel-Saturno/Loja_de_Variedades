import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/img/logoarmarinho.jpg'
import './index.css'

import { MdShoppingBag, MdHelpOutline, MdAdd, MdEdit, MdDelete } from "react-icons/md";
import ProfileDefault from '../../assets/img/profiledefault.webp'

const NavbarAdmin = () => {
    const navigate = useNavigate()

    const handleLoginClick = () => {
        navigate('/login')
    }

    const handleHomeClick = () => {
        navigate('/home')
    }

    const handleAddProduct = () => {
        navigate('/add-product')
    }

    const handleEditProducts = () => {
        navigate('/edit-product')
    }

    const handleDeleteProducts = () => {
        navigate('/delete-product')
    }

    return (
        <div className='navbar-admin-main-container'>
            <div className="navbar-admin-container">
                <div className="logo-container" onClick={handleHomeClick}>
                    <img src={Logo} alt="Logo Armarinho" className='logo-image' />
                </div>
                
                <div className="admin-actions-container">
                    <h2 className='admin-title'>Painel Administrativo</h2>
                    <div className="admin-buttons">
                        <button className="admin-btn add-btn" onClick={handleAddProduct}>
                            <MdAdd size={20} />
                            <span>Adicionar Produto</span>
                        </button>
                        <button className="admin-btn edit-btn" onClick={handleEditProducts}>
                            <MdEdit size={20} />
                            <span>Editar Produtos</span>
                        </button>
                        <button className="admin-btn delete-btn" onClick={handleDeleteProducts}>
                            <MdDelete size={20} />
                            <span>Excluir Produtos</span>
                        </button>
                    </div>
                </div>

                <div className="optionbar-container">
                    <div className="bar-container">
                        <div className="cart-container">
                            <MdShoppingBag size={30} className='cart-icon' />
                        </div>
                        <div className="help-container">
                            <MdHelpOutline size={30} className='help-icon' />
                        </div>
                        <div className="profile-container" onClick={handleLoginClick}>
                            <img src={ProfileDefault} alt="Profile Default" className='profile-image' />
                        </div>
                    </div>
                    <h3 className="optionbar-h3">
                        Área do Administrador
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default NavbarAdmin