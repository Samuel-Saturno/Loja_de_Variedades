import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/img/logoarmarinho.jpg'
import './index.css'

import { MdShoppingBag, MdHelpOutline, MdSettings, MdLogout } from "react-icons/md";
import ProfileDefault from '../../assets/img/profiledefault.webp'
import authService from '../../services/authService'

const Navbar = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) => {
    const navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [userEmail, setUserEmail] = useState('')
    const [showProfileMenu, setShowProfileMenu] = useState(false)

    useEffect(() => {
        setIsAuthenticated(authService.isAuthenticated())
        setIsAdmin(authService.isAdmin())
        setUserEmail(authService.getUserEmail() || '')
    }, [])

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
    }

    const handleLoginClick = () => {
        if (isAuthenticated) {
            setShowProfileMenu(!showProfileMenu)
        } else {
            navigate('/login')
        }
    }

    const handleManageClick = () => {
        navigate('/manage')
        setShowProfileMenu(false)
    }

    const handleLogoutClick = () => {
        authService.logout()
        setIsAuthenticated(false)
        setShowProfileMenu(false)
        alert('Logout realizado com sucesso!')
        navigate('/home')
    }

    const handleCartClick = () => {
        navigate('/cart')
    }

    const categories = ['Todos', 'Perfumes', 'Eletrônicos', 'Plásticos', 'Alumínios', 'Calçados', 'Higiene']

    return (
        <div className='navbar-main-container'>
            <div className="navbar-container">
                <div className="logo-container">
                    <img src={Logo} alt="Logo Armarinho" className='logo-image' />
                </div>
                <div className="search-container">
                    <div className="search-input">
                        <input
                            type="text"
                            placeholder='Buscar produtos, marcas, entre outros....'
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="category-container">
                        {categories.map((category) => (
                            <p
                                key={category}
                                className={selectedCategory === category ? 'category-active' : 'category-item'}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="optionbar-container">
                    <div className="bar-container">
                        <div className="help-container" onClick={handleCartClick} style={{cursor: 'pointer'}}>
                            <MdShoppingBag size={30} className='help-icon' style={{padding: "5px"}}/>
                        </div>
                        <div className="help-container">
                            <MdHelpOutline size={30} className='help-icon' />
                        </div>
                        <div className="profile-container" onClick={handleLoginClick} style={{ position: 'relative' }}>
                            <img src={ProfileDefault} alt="Profile Default" className='profile-image' />
                            
                            {showProfileMenu && isAuthenticated && (
                                <div style={{
                                    position: 'absolute',
                                    top: '50px',
                                    right: '0',
                                    backgroundColor: 'white',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                    borderRadius: '8px',
                                    padding: '10px',
                                    minWidth: '180px',
                                    zIndex: 1000
                                }}>
                                    {isAdmin && (
                                        <div 
                                            onClick={handleManageClick}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                padding: '10px',
                                                cursor: 'pointer',
                                                borderRadius: '5px',
                                                transition: 'background 0.2s'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                        >
                                            <MdSettings size={20} />
                                            <span>Gerenciar Loja</span>
                                        </div>
                                    )}
                                    <div 
                                        onClick={handleLogoutClick}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            padding: '10px',
                                            cursor: 'pointer',
                                            borderRadius: '5px',
                                            transition: 'background 0.2s',
                                            color: '#e74c3c'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                    >
                                        <MdLogout size={20} />
                                        <span>Sair</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <h3 className="optionbar-h3">
                        {isAuthenticated ? (
                            <span style={{ color: "#28a745" }}>
                                Olá, {isAdmin ? 'Admin' : 'Cliente'}!
                            </span>
                        ) : (
                            <>
                                Não tem uma conta? <span
                                    className='optionbar-span'
                                    style={{ color: "#007bff", cursor: "pointer" }}
                                    onClick={handleLoginClick}
                                >
                                    Cadastre-se
                                </span>
                            </>
                        )}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Navbar
