import React, { useState } from 'react'
import './index.css'
import NavbarAdmin from '../../components/NavbarAdmin'
import Product from '../../components/Product'

const Manage = () => {
  const [searchTerm] = useState('') // Para manter compatibilidade com Product
  const [selectedCategory] = useState('Todos') // Para manter compatibilidade com Product

  return (
    <div className='manage-container'>
        <NavbarAdmin />
        <div className='manage-content'>
            <h1 className='manage-title'>Gerenciamento de Produtos</h1>
            <div className='manage-description'>
                <p>Use os botões na barra superior para adicionar, editar ou excluir produtos.</p>
            </div>
            <Product 
                searchTerm={searchTerm} 
                selectedCategory={selectedCategory}
            />
        </div>
    </div>
  )
}

export default Manage
