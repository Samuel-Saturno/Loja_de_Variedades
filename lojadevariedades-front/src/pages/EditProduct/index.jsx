import React, { useState, useEffect } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { IoArrowBack, IoSearch } from 'react-icons/io5'
import { MdEdit } from 'react-icons/md'
import productService from '../../services/productService'

const EditProduct = () => {
  const [products, setProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [editingProduct, setEditingProduct] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stockQuantity: '',
    imageUrl: ''
  })
  const [isLoading, setIsLoading] = useState(false)
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

  const handleEditClick = (product) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      stockQuantity: product.stockQuantity.toString(),
      imageUrl: product.imageUrl
    })
  }

  const handleFormInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    setError('')
  }

  const handleImageUrlChange = (e) => {
    setFormData({
      ...formData,
      imageUrl: e.target.value
    })
  }

  const handleUpdateProduct = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      if (!formData.name || !formData.price || !formData.stockQuantity) {
        setError('Preencha todos os campos obrigatórios')
        setIsLoading(false)
        return
      }

      const product = {
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        stockQuantity: parseInt(formData.stockQuantity),
        imageUrl: formData.imageUrl
      }

      await productService.update(editingProduct.id, product)
      alert('Produto atualizado com sucesso!')
      setEditingProduct(null)
      fetchProducts()
    } catch (err) {
      setError(err.message || 'Erro ao atualizar produto')
      console.error('Erro:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleBack = () => {
    navigate('/manage')
  }

  const handleCancelEdit = () => {
    setEditingProduct(null)
    setFormData({
      name: '',
      description: '',
      price: '',
      stockQuantity: '',
      imageUrl: ''
    })
    setError('')
  }

  // Se está editando um produto, mostra o formulário
  if (editingProduct) {
    return (
      <div className='edit-product-form-wrapper'>
        <div className='edit-product-form-header'>
          <button onClick={handleCancelEdit} className='edit-form-back-btn'>
            <IoArrowBack size={20} />
          </button>
          <h1 className='edit-form-title'>Editar Produto: {editingProduct.name}</h1>
        </div>

        <div className='edit-product-form-container'>
          {error && <div className='error-message'>{error}</div>}
          
          <form onSubmit={handleUpdateProduct} className='edit-product-form'>
            <div className='edit-form-row'>
              <div className='edit-form-group'>
                <label htmlFor='edit-name'>Nome do Produto *</label>
                <input
                  type='text'
                  id='edit-name'
                  name='name'
                  value={formData.name}
                  onChange={handleFormInputChange}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className='edit-form-group'>
              <label htmlFor='edit-description'>Descrição</label>
              <textarea
                id='edit-description'
                name='description'
                value={formData.description}
                onChange={handleFormInputChange}
                rows={4}
                disabled={isLoading}
              />
            </div>

            <div className='edit-form-row'>
              <div className='edit-form-group'>
                <label htmlFor='edit-price'>Preço (R$) *</label>
                <input
                  type='number'
                  id='edit-price'
                  name='price'
                  value={formData.price}
                  onChange={handleFormInputChange}
                  min='0'
                  step='0.01'
                  required
                  disabled={isLoading}
                />
              </div>

              <div className='edit-form-group'>
                <label htmlFor='edit-stock'>Quantidade em Estoque *</label>
                <input
                  type='number'
                  id='edit-stock'
                  name='stockQuantity'
                  value={formData.stockQuantity}
                  onChange={handleFormInputChange}
                  min='0'
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className='edit-form-group'>
              <label htmlFor='edit-image'>URL da Imagem</label>
              <input
                type='url'
                id='edit-image'
                name='imageUrl'
                value={formData.imageUrl}
                onChange={handleImageUrlChange}
                placeholder='https://exemplo.com/imagem.jpg'
                disabled={isLoading}
              />
            </div>

            {formData.imageUrl && (
              <div className='edit-image-preview-container'>
                <label>Pré-visualização</label>
                <img 
                  src={formData.imageUrl} 
                  alt='Preview' 
                  className='edit-image-preview'
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/300' }}
                />
              </div>
            )}

            <div className='edit-form-actions'>
              <button 
                type='button' 
                onClick={handleCancelEdit} 
                className='edit-cancel-btn'
                disabled={isLoading}
              >
                Cancelar
              </button>
              <button 
                type='submit' 
                className='edit-submit-btn'
                disabled={isLoading}
              >
                {isLoading ? 'Atualizando...' : 'Atualizar Produto'}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  // Página principal com busca e listagem
  return (
    <div className='edit-product-main-wrapper'>
      <div className='edit-product-header-section'>
        <button onClick={handleBack} className='edit-main-back-btn'>
          <IoArrowBack size={20} />
        </button>
        <h1 className='edit-product-main-title'>Editar Produtos</h1>
      </div>

      <div className='edit-product-search-section'>
        <div className='edit-search-filters'>
          <div className='edit-search-input-wrapper'>
            <IoSearch className='edit-search-icon' />
            <input
              type='text'
              placeholder='Buscar produtos por nome ou descrição...'
              value={searchQuery}
              onChange={handleSearchChange}
              className='edit-search-input'
            />
          </div>
        </div>

        <div className='edit-results-info'>
          <p>{filteredProducts.length} produto(s) encontrado(s)</p>
        </div>
      </div>

      <div className='edit-products-list-section'>
        {loadingList ? (
          <div className='loading'>Carregando produtos...</div>
        ) : error ? (
          <div className='error'>{error}</div>
        ) : filteredProducts.length === 0 ? (
          <div className='edit-no-products'>
            <p>Nenhum produto encontrado</p>
          </div>
        ) : (
          <div className='edit-products-list'>
            {filteredProducts.map((product) => (
              <div key={product.id} className='edit-product-item'>
                <div className='edit-product-image-wrapper'>
                  <img 
                    src={product.imageUrl || 'https://via.placeholder.com/300'} 
                    alt={product.name}
                    className='edit-product-item-image'
                  />
                </div>
                
                <div className='edit-product-item-info'>
                  <h3 className='edit-product-item-name'>{product.name}</h3>
                  <p className='edit-product-item-description'>{product.description}</p>
                  <div className='edit-product-item-details'>
                    <span className='edit-product-item-price'>R$ {Number(product.price).toFixed(2)}</span>
                    <span className='edit-product-item-stock'>Estoque: {product.stockQuantity}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => handleEditClick(product)}
                  className='edit-product-action-btn'
                  title='Editar produto'
                >
                  <MdEdit size={20} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default EditProduct