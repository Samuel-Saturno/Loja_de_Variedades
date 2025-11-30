import React, { useState, useEffect } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { IoArrowBack, IoSearch } from 'react-icons/io5'
import { MdDelete, MdWarning } from 'react-icons/md'
import productService from '../../services/productService'

const DeleteProduct = () => {
  const [products, setProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProducts, setSelectedProducts] = useState([])
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [loadingList, setLoadingList] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // Carregar produtos ao montar
  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    setLoadingList(true)
    setError('')
    try {
      const data = await productService.getAll(0, 100, searchQuery)
      setProducts(data.content || data)
    } catch (err) {
      setError('Erro ao carregar produtos')
      console.error('Erro:', err)
    } finally {
      setLoadingList(false)
    }
  }

  // Filtrar produtos baseado na busca
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
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
    if (selectedProducts.length === filteredProducts.length) {
      setSelectedProducts([])
    } else {
      setSelectedProducts(filteredProducts.map(product => product.id))
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
    
    try {
      // Deletar produtos um por um
      for (const productId of selectedProducts) {
        await productService.delete(productId)
      }
      
      alert(`${selectedProducts.length} produto(s) excluído(s) com sucesso!`)
      setSelectedProducts([])
      setShowConfirmModal(false)
      fetchProducts()
    } catch (err) {
      setError(err.message || 'Erro ao excluir produtos')
      console.error('Erro:', err)
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
    return filteredProducts.filter(product => selectedProducts.includes(product.id))
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
            
            <div className='delete-modal-content'>
              <p className='delete-modal-message'>
                Você tem certeza que deseja excluir {selectedProducts.length} produto(s)?
              </p>
              <div className='delete-products-preview'>
                {getSelectedProductsData().map(product => (
                  <div key={product.id} className='delete-preview-item'>
                    <img src={product.image} alt={product.name} className='delete-preview-image' />
                    <span className='delete-preview-name'>{product.name}</span>
                  </div>
                ))}
              </div>
              <p className='delete-modal-warning'>
                <strong>Atenção:</strong> Esta ação não pode ser desfeita!
              </p>
            </div>
            
            <div className='delete-modal-actions'>
              <button 
                onClick={handleCancelDelete} 
                className='delete-cancel-modal-btn'
                disabled={isDeleting}
              >
                Cancelar
              </button>
              <button 
                onClick={handleConfirmDelete} 
                className='delete-confirm-modal-btn'
                disabled={isDeleting}
              >
                {isDeleting ? 'Excluindo...' : 'Confirmar Exclusão'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Página Principal */}
      <div className='delete-product-header-section'>
        <button onClick={handleBack} className='delete-main-back-btn'>
          <IoArrowBack size={20} />
        </button>
        <h1 className='delete-product-main-title'>Excluir Produtos</h1>
      </div>

      <div className='delete-product-search-section'>
        <div className='delete-search-filters'>
          <div className='delete-search-input-wrapper'>
            <IoSearch className='delete-search-icon' />
            <input
              type='text'
              placeholder='Buscar produtos por nome ou descrição...'
              value={searchQuery}
              onChange={handleSearchChange}
              className='delete-search-input'
            />
          </div>
        </div>

        <div className='delete-actions-bar'>
          <div className='delete-results-info'>
            <p>{filteredProducts.length} produto(s) encontrado(s) | {selectedProducts.length} selecionado(s)</p>
          </div>
          
          <div className='delete-action-buttons'>
            <button 
              onClick={handleSelectAll}
              className='delete-select-all-btn'
            >
              {selectedProducts.length === filteredProducts.length ? 'Desselecionar Todos' : 'Selecionar Todos'}
            </button>
            
            <button 
              onClick={handleDeleteClick}
              className='delete-selected-btn'
              disabled={selectedProducts.length === 0}
            >
              <MdDelete size={18} />
              Excluir Selecionados ({selectedProducts.length})
            </button>
          </div>
        </div>
      </div>

      <div className='delete-products-list-section'>
        {loadingList ? (
          <div className='loading'>Carregando produtos...</div>
        ) : error ? (
          <div className='error'>{error}</div>
        ) : filteredProducts.length === 0 ? (
          <div className='delete-no-products'>
            <p>Nenhum produto encontrado</p>
          </div>
        ) : (
          <div className='delete-products-grid'>
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className={`delete-product-card ${
                  selectedProducts.includes(product.id) ? 'delete-card-selected' : ''
                }`}
                onClick={() => handleProductSelect(product.id)}
              >
                <div className='delete-card-checkbox'>
                  <input
                    type='checkbox'
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => handleProductSelect(product.id)}
                    className='delete-checkbox'
                  />
                </div>
                
                <div className='delete-card-image-wrapper'>
                  <img 
                    src={product.imageUrl || 'https://via.placeholder.com/300'} 
                    alt={product.name}
                    className='delete-card-image'
                  />
                </div>
                
                <div className='delete-card-info'>
                  <h3 className='delete-card-name'>{product.name}</h3>
                  <p className='delete-card-description'>{product.description}</p>
                  <div className='delete-card-details'>
                    <span className='delete-card-price'>R$ {Number(product.price).toFixed(2)}</span>
                    <span className='delete-card-stock'>Estoque: {product.stockQuantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default DeleteProduct