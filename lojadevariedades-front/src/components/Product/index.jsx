import React from 'react'
import './index.css'
import { ProductMocks } from './mocks'

const Product = ({ searchTerm, selectedCategory }) => {
  const filteredProducts = ProductMocks.filter(product => {
    // Filtro por categoria
    const categoryMatch = selectedCategory === 'Todos' || 
                         product.category === selectedCategory
    
    // Filtro por busca
    const searchMatch = !searchTerm || 
                       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       product.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    return categoryMatch && searchMatch
  })

  return (
    <div className='product-main-container'>
        <div className="product-container">
            <div className='product-grid'>
                {filteredProducts.map((product) => (
                    <div key={product.id} className='product-card'>
                        <div className='product-image-container'>
                            <img 
                                src={product.image} 
                                alt={product.name}
                                className='product-image'
                            />
                        </div>
                        <span className='product-name'>{product.name}</span>
                        <span className='product-description'>{product.description}</span>
                        <span className='product-price'>R$ {product.price.toFixed(2)}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Product
