import React, { useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { IoArrowBack, IoSearch } from 'react-icons/io5'
import { MdEdit } from 'react-icons/md'
import { ProductMocks } from '../../components/Product/mocks'


const EditProduct = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('Todos')
  const [editingProduct, setEditingProduct] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: null,
    imagePreview: null
  })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const categories = ['Todos', 'Perfumes', 'Eletrônicos', 'Plásticos', 'Alumínios', 'Calçados', 'Higiene']

  // Filtrar produtos baseado na busca e categoria
  const filteredProducts = ProductMocks.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === 'Todos' || product.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value)
  }

  const handleEditClick = (product) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      category: product.category,
      image: null,
      imagePreview: product.image
    })
  }

  const handleFormInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: file,
          imagePreview: reader.result
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpdateProduct = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simular atualização do produto
      console.log('Produto atualizado:', {
        id: editingProduct.id,
        ...formData,
        price: parseFloat(formData.price)
      })
      
      // Simular delay da API
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      alert('Produto atualizado com sucesso!')
      setEditingProduct(null)
    } catch (error) {
      alert('Erro ao atualizar produto')
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
      category: '',
      image: null,
      imagePreview: null
    })
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
                />
              </div>

              <div className='edit-form-group'>
                <label htmlFor='edit-category'>Categoria *</label>
                <select
                  id='edit-category'
                  name='category'
                  value={formData.category}
                  onChange={handleFormInputChange}
                  required
                >
                  {categories.filter(cat => cat !== 'Todos').map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className='edit-form-group'>
              <label htmlFor='edit-description'>Descrição *</label>
              <textarea
                id='edit-description'
                name='description'
                value={formData.description}
                onChange={handleFormInputChange}
                rows={4}
                required
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
                />
              </div>

              <div className='edit-form-group'>
                <label htmlFor='edit-image'>Nova Imagem (opcional)</label>
                <input
                  type='file'
                  id='edit-image'
                  accept='image/*'
                  onChange={handleImageChange}
                  className='edit-image-input'
                />
              </div>
            </div>

            {formData.imagePreview && (
              <div className='edit-image-preview-container'>
                <label>Pré-visualização</label>
                <img 
                  src={formData.imagePreview} 
                  alt='Preview' 
                  className='edit-image-preview'
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
          
          <select
            value={categoryFilter}
            onChange={handleCategoryChange}
            className='edit-category-filter'
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className='edit-results-info'>
          <p>{filteredProducts.length} produto(s) encontrado(s)</p>
        </div>
      </div>

      <div className='edit-products-list-section'>
        {filteredProducts.length === 0 ? (
          <div className='edit-no-products'>
            <p>Nenhum produto encontrado</p>
          </div>
        ) : (
          <div className='edit-products-list'>
            {filteredProducts.map((product) => (
              <div key={product.id} className='edit-product-item'>
                <div className='edit-product-image-wrapper'>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className='edit-product-item-image'
                  />
                </div>
                
                <div className='edit-product-item-info'>
                  <h3 className='edit-product-item-name'>{product.name}</h3>
                  <p className='edit-product-item-description'>{product.description}</p>
                  <div className='edit-product-item-details'>
                    <span className='edit-product-item-category'>{product.category}</span>
                    <span className='edit-product-item-price'>R$ {product.price.toFixed(2)}</span>
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