import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/img/logoarmarinho.jpg'
import './index.css'

import { MdShoppingBag } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import ProfileDefault from '../../assets/img/profiledefault.webp'

const Navbar = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) => {
    const navigate = useNavigate()

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
    }

    const handleLoginClick = () => {
        navigate('/login')
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
                        <div className="help-container">
                            <MdShoppingBag size={30} className='help-icon' style={{padding: "5px"}}/>
                        </div>
                        <div className="help-container">
                            <MdHelpOutline size={30} className='help-icon' />
                        </div>
                        <div className="profile-container" onClick={handleLoginClick}>
                            <img src={ProfileDefault} alt="Profile Default" className='profile-image' />
                        </div>
                    </div>
                    <h3 className="optionbar-h3">
                        Não tem uma conta? <span
                            className='optionbar-span'
                            style={{ color: "#007bff", cursor: "pointer" }}
                            onClick={handleLoginClick}
                        >
                            Cadastre-se
                        </span>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Navbar
