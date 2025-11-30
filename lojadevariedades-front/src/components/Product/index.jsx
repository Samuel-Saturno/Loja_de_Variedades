import React, { useState, useEffect } from 'react'
import './index.css'
import productService from '../../services/productService'

const Product = ({ searchTerm, selectedCategory }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  // Buscar produtos do backend
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      setError('')
      try {
        const data = await productService.getAll(page, 10, searchTerm, selectedCategory)
        
        if (page === 0) {
          setProducts(data.content || data)
        } else {
          setProducts(prev => [...prev, ...(data.content || data)])
        }
        
        // Verifica se há mais páginas
        setHasMore(!data.last)
      } catch (err) {
        setError('Erro ao carregar produtos')
        console.error('Erro:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [searchTerm, selectedCategory, page])

  // Resetar paginação quando filtros mudam
  useEffect(() => {
    setPage(0)
  }, [searchTerm, selectedCategory])

  const handleLoadMore = () => {
    if (hasMore && !loading) {
      setPage(prev => prev + 1)
    }
  }

  if (loading && page === 0) {
    return (
      <div className='product-main-container'>
        <div className="product-container">
          <div className='loading'>Carregando produtos...</div>
        </div>
      </div>
    )
  }

  if (error && page === 0) {
    return (
      <div className='product-main-container'>
        <div className="product-container">
          <div className='error'>{error}</div>
        </div>
      </div>
    )
  }

  return (
    <div className='product-main-container'>
        <div className="product-container">
            <div className='product-grid'>
                {products.map((product) => (
                    <div key={product.id} className='product-card'>
                        <div className='product-image-container'>
                            <img 
                                src={product.imageUrl || 'https://via.placeholder.com/300'} 
                                alt={product.name}
                                className='product-image'
                            />
                        </div>
                        <span className='product-name'>{product.name}</span>
                        <span className='product-description'>{product.description}</span>
                        <span className='product-price'>R$ {Number(product.price).toFixed(2)}</span>
                    </div>
                ))}
            </div>
            
            {hasMore && !loading && (
              <button onClick={handleLoadMore} className='load-more-button'>
                Carregar mais produtos
              </button>
            )}
            
            {loading && page > 0 && (
              <div className='loading'>Carregando mais produtos...</div>
            )}
        </div>
    </div>
  )
}

export default Product
