import React, { useState, useEffect } from 'react'
import './index.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import productService from '../../services/productService'

const EditProduct = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stockQuantity: '',
    categoryId: '1',
    imageUrl: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const categories = [
    { id: 1, name: 'Perfumes' },
    { id: 2, name: 'Eletrônicos' },
    { id: 3, name: 'Plásticos' },
    { id: 4, name: 'Alumínios' },
    { id: 5, name: 'Calçados' },
    { id: 6, name: 'Higiene' }
  ]

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

  const handleProductSelect = (product) => {
    setSelectedProduct(product)
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      stockQuantity: product.stockQuantity.toString(),
      categoryId: product.categoryId ? product.categoryId.toString() : '1',
      imageUrl: product.imageUrl || ''
    })
    setError('')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!selectedProduct) {
      setError('Selecione um produto para editar')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const productData = {
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        stockQuantity: parseInt(formData.stockQuantity),
        categoryId: parseInt(formData.categoryId),
        imageUrl: formData.imageUrl || 'https://via.placeholder.com/300x300?text=Sem+Imagem',
        active: true
      }

      await productService.update(selectedProduct.id, productData)
      alert('Produto atualizado com sucesso!')
      window.dispatchEvent(new Event('productUpdated'))
      navigate('/manage')
    } catch (err) {
      console.error('Erro ao atualizar produto:', err)
      setError('Erro ao atualizar produto. Verifique os dados e tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleBack = () => {
    navigate('/manage')
  }

  return (
    <div className='add-product-container'>
      <div className='add-product-header'>
        <button onClick={handleBack} className='back-button'>
          <IoArrowBack size={20} />
        </button>
        <h1 className='add-product-title'>Editar Produto</h1>
      </div>

      <div className='add-product-form-container' style={{ display: 'flex', gap: '20px' }}>
        {/* Lista de produtos */}
        <div style={{ flex: '1', maxHeight: '600px', overflowY: 'auto', border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
          <h2 style={{ marginBottom: '15px' }}>Selecione um produto:</h2>
          {products.length === 0 ? (
            <p>Nenhum produto disponível</p>
          ) : (
            products.map(product => (
              <div
                key={product.id}
                onClick={() => handleProductSelect(product)}
                style={{
                  padding: '10px',
                  marginBottom: '10px',
                  border: selectedProduct?.id === product.id ? '2px solid #007bff' : '1px solid #ddd',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  backgroundColor: selectedProduct?.id === product.id ? '#e7f3ff' : 'white'
                }}
              >
                <strong>{product.name}</strong>
                <br />
                <small>R$ {product.price.toFixed(2)} - Estoque: {product.stockQuantity}</small>
              </div>
            ))
          )}
        </div>

        {/* Formulário de edição */}
        <form onSubmit={handleSubmit} className='add-product-form' style={{ flex: '2' }}>
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

          {!selectedProduct && (
            <div style={{
              color: '#856404',
              backgroundColor: '#fff3cd',
              padding: '15px',
              borderRadius: '5px',
              marginBottom: '15px',
              textAlign: 'center'
            }}>
              Selecione um produto da lista ao lado para editar
            </div>
          )}

          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor='name'>Nome do Produto *</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                placeholder='Digite o nome do produto'
                required
                disabled={!selectedProduct}
              />
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='description'>Descrição</label>
            <textarea
              id='description'
              name='description'
              value={formData.description}
              onChange={handleInputChange}
              placeholder='Digite a descrição do produto'
              rows='4'
              disabled={!selectedProduct}
            />
          </div>

          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor='price'>Preço (R$) *</label>
              <input
                type='number'
                id='price'
                name='price'
                value={formData.price}
                onChange={handleInputChange}
                placeholder='0.00'
                step='0.01'
                min='0'
                required
                disabled={!selectedProduct}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='stockQuantity'>Quantidade em Estoque *</label>
              <input
                type='number'
                id='stockQuantity'
                name='stockQuantity'
                value={formData.stockQuantity}
                onChange={handleInputChange}
                placeholder='0'
                min='0'
                required
                disabled={!selectedProduct}
              />
            </div>
          </div>

          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor='categoryId'>Categoria *</label>
              <select
                id='categoryId'
                name='categoryId'
                value={formData.categoryId}
                onChange={handleInputChange}
                required
                disabled={!selectedProduct}
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor='imageUrl'>URL da Imagem</label>
              <input
                type='url'
                id='imageUrl'
                name='imageUrl'
                value={formData.imageUrl}
                onChange={handleInputChange}
                placeholder='https://exemplo.com/imagem.jpg'
                disabled={!selectedProduct}
              />
            </div>
          </div>

          <div className='form-actions'>
            <button
              type='button'
              onClick={handleBack}
              className='cancel-button'
            >
              Cancelar
            </button>
            <button
              type='submit'
              className='submit-button'
              disabled={isLoading || !selectedProduct}
            >
              {isLoading ? 'Atualizando...' : 'Atualizar Produto'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProduct
