import React, { useState, useEffect } from 'react'
import './index.css'
import productService from '../../services/productService'

const Product = ({ searchTerm, selectedCategory, refreshTrigger }) => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  // Mapeamento de categorias para IDs
  const categoryMap = {
    'Todos': null,
    'Perfumes': 1,
    'Eletrônicos': 2,
    'Plásticos': 3,
    'Alumínios': 4,
    'Calçados': 5,
    'Higiene': 6
  }

  useEffect(() => {
    loadProducts()
  }, [searchTerm, selectedCategory, refreshTrigger])

  const loadProducts = async () => {
    try {
      setIsLoading(true)
      setError('')
      const categoryId = categoryMap[selectedCategory] || null
      console.log('Carregando produtos - Categoria:', selectedCategory, 'ID:', categoryId)
      const data = await productService.getAll(0, 100, searchTerm, categoryId)
      console.log('Produtos carregados:', data.content?.length || 0)
      setProducts(data.content || [])
    } catch (err) {
      console.error('Erro ao carregar produtos:', err)
      setError('Erro ao carregar produtos')
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddToCart = (product) => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      const existingItem = cart.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        cart.push({ ...product, quantity: 1 })
      }
      
      localStorage.setItem('cart', JSON.stringify(cart))
      alert(`${product.name} adicionado ao carrinho!`)
    } catch (err) {
      console.error('Erro ao adicionar ao carrinho:', err)
      alert('Erro ao adicionar ao carrinho')
    }
  }

  if (isLoading) {
    return (
      <div className='product-main-container'>
        <div className='product-container' style={{ textAlign: 'center', padding: '50px' }}>
          <p>Carregando produtos...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='product-main-container'>
        <div className='product-container' style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
          <p>{error}</p>
          <button onClick={loadProducts} style={{ marginTop: '10px', padding: '10px 20px', cursor: 'pointer' }}>
            Tentar Novamente
          </button>
        </div>
      </div>
    )
  }

  const filteredProducts = products.filter(product => product.active !== false)

  return (
    <div className='product-main-container'>
        <div className="product-container">
            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '50px' }}>
                <p>Nenhum produto encontrado.</p>
              </div>
            ) : (
              <div className='product-grid'>
                  {filteredProducts.map((product) => (
                      <div key={product.id} className='product-card'>
                          <div className='product-image-container'>
                              <img 
                                  src={product.imageUrl || 'https://via.placeholder.com/300x300?text=Sem+Imagem'} 
                                  alt={product.name}
                                  className='product-image'
                              />
                          </div>
                          <span className='product-name'>{product.name}</span>
                          <span className='product-description'>{product.description}</span>
                          <div className='product-footer'>
                              <span className='product-price'>R$ {product.price.toFixed(2)}</span>
                              <button 
                                  className='add-to-cart-btn'
                                  onClick={() => handleAddToCart(product)}
                              >
                                  Adicionar à sacola
                              </button>
                          </div>
                      </div>
                  ))}
              </div>
            )}
        </div>
    </div>
  )
}

export default Product
