import React, { useState, useEffect } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import { MdDelete, MdWarning } from 'react-icons/md'
import productService from '../../services/productService'

const DeleteProduct = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([])
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    try {
      const data = await productService.getAll(0, 100)
      setProducts(data.content || [])
    } catch (err) {
      console.error('Erro ao carregar produtos:', err)
      setError('Erro ao carregar produtos')
    }
  }

  const handleProductSelect = (productId) => {
    setSelectedProducts(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId)
      } else {
        return [...prev, productId]
      }
    })
  }

  const handleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([])
    } else {
      setSelectedProducts(products.map(product => product.id))
    }
  }

  const handleDeleteClick = () => {
    if (selectedProducts.length === 0) {
      alert('Selecione pelo menos um produto para excluir')
      return
    }
    setShowConfirmModal(true)
  }

  const handleConfirmDelete = async () => {
    setIsDeleting(true)
    setError('')
    
    try {
      // Deletar cada produto selecionado
      for (const productId of selectedProducts) {
        await productService.delete(productId)
      }
      
      alert(`${selectedProducts.length} produto(s) excluído(s) com sucesso!`)
      window.dispatchEvent(new Event('productUpdated'))
      setSelectedProducts([])
      setShowConfirmModal(false)
      await loadProducts() // Recarregar lista
    } catch (err) {
      console.error('Erro ao excluir produtos:', err)
      setError('Erro ao excluir alguns produtos')
    } finally {
      setIsDeleting(false)
    }
  }

  const handleCancelDelete = () => {
    setShowConfirmModal(false)
  }

  const handleBack = () => {
    navigate('/manage')
  }

  const getSelectedProductsData = () => {
    return products.filter(product => selectedProducts.includes(product.id))
  }

  return (
    <div className='delete-product-main-wrapper'>
      {/* Modal de Confirmação */}
      {showConfirmModal && (
        <div className='delete-confirmation-overlay'>
          <div className='delete-confirmation-modal'>
            <div className='delete-modal-header'>
              <MdWarning className='delete-warning-icon' />
              <h2 className='delete-modal-title'>Confirmar Exclusão</h2>
            </div>
            <div className='delete-modal-body'>
              <p className='delete-modal-text'>
                Tem certeza que deseja excluir {selectedProducts.length} produto(s)?
              </p>
              <div className='delete-products-list'>
                {getSelectedProductsData().map(product => (
                  <div key={product.id} className='delete-product-item'>
                    <img 
                      src={product.imageUrl || 'https://via.placeholder.com/50x50?text=Sem+Imagem'} 
                      alt={product.name}
                      style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px' }}
                    />
                    <div>
                      <strong>{product.name}</strong>
                      <br />
                      <small>R$ {product.price.toFixed(2)}</small>
                    </div>
                  </div>
                ))}
              </div>
              <p className='delete-modal-warning'>
                Esta ação não pode ser desfeita!
              </p>
            </div>
            <div className='delete-modal-footer'>
              <button
                onClick={handleCancelDelete}
                className='delete-cancel-btn'
                disabled={isDeleting}
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmDelete}
                className='delete-confirm-btn'
                disabled={isDeleting}
              >
                {isDeleting ? 'Excluindo...' : 'Confirmar Exclusão'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className='delete-product-container'>
        <div className='delete-product-header'>
          <button onClick={handleBack} className='back-button'>
            <IoArrowBack size={20} />
          </button>
          <h1 className='delete-product-title'>Excluir Produtos</h1>
        </div>

        {error && (
          <div style={{
            color: '#e74c3c',
            backgroundColor: '#fadbd8',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '15px'
          }}>
            {error}
          </div>
        )}

        <div className='delete-product-actions'>
          <button onClick={handleSelectAll} className='select-all-btn'>
            {selectedProducts.length === products.length ? 'Desselecionar Todos' : 'Selecionar Todos'}
          </button>
          <button 
            onClick={handleDeleteClick} 
            className='delete-selected-btn'
            disabled={selectedProducts.length === 0}
          >
            <MdDelete size={20} />
            Excluir Selecionados ({selectedProducts.length})
          </button>
        </div>

        <div className='delete-products-grid'>
          {products.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '50px' }}>Nenhum produto disponível</p>
          ) : (
            products.map(product => (
              <div
                key={product.id}
                className={`delete-product-card ${selectedProducts.includes(product.id) ? 'selected' : ''}`}
                onClick={() => handleProductSelect(product.id)}
              >
                <input
                  type='checkbox'
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => handleProductSelect(product.id)}
                  onClick={(e) => e.stopPropagation()}
                  className='product-checkbox'
                />
                <div className='product-image-container'>
                  <img 
                    src={product.imageUrl || 'https://via.placeholder.com/300x300?text=Sem+Imagem'} 
                    alt={product.name}
                    className='product-image'
                  />
                </div>
                <div className='product-info'>
                  <h3 className='product-name'>{product.name}</h3>
                  <p className='product-description'>{product.description}</p>
                  <div className='product-details'>
                    <span className='product-price'>R$ {product.price.toFixed(2)}</span>
                    <span className='product-stock'>Estoque: {product.stockQuantity}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default DeleteProduct
