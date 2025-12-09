import React, { useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import { MdCloudUpload } from 'react-icons/md'
import productService from '../../services/productService'

const AddProduct = () => {
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
    const navigate = useNavigate()

    const categories = [
        { id: 1, name: 'Perfumes' },
        { id: 2, name: 'Eletrônicos' },
        { id: 3, name: 'Plásticos' },
        { id: 4, name: 'Alumínios' },
        { id: 5, name: 'Calçados' },
        { id: 6, name: 'Higiene' }
    ]

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
        setIsLoading(true)
        setError('')

        try {
            const productData = {
                name: formData.name,
                description: formData.description,
                price: parseFloat(formData.price),
                stockQuantity: parseInt(formData.stockQuantity),
                categoryId: parseInt(formData.categoryId),
                imageUrl: formData.imageUrl || 'https://via.placeholder.com/300x300?text=Sem+Imagem'
            }

            await productService.create(productData)
            alert('Produto adicionado com sucesso!')
            window.dispatchEvent(new Event('productUpdated'))
            navigate('/manage')
        } catch (err) {
            console.error('Erro ao adicionar produto:', err)
            setError('Erro ao adicionar produto. Verifique os dados e tente novamente.')
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
                <h1 className='add-product-title'>Adicionar Novo Produto</h1>
            </div>

            <div className='add-product-form-container'>
                <form onSubmit={handleSubmit} className='add-product-form'>
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
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='categoryId'>Categoria *</label>
                            <select
                                id='categoryId'
                                name='categoryId'
                                value={formData.categoryId}
                                onChange={handleInputChange}
                                required
                            >
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='description'>Descrição *</label>
                        <textarea
                            id='description'
                            name='description'
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder='Digite a descrição do produto'
                            rows={4}
                            required
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
                                min='0'
                                step='0.01'
                                required
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
                                step='1'
                                required
                            />
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='imageUrl'>URL da Imagem (opcional)</label>
                        <input
                            type='text'
                            id='imageUrl'
                            name='imageUrl'
                            value={formData.imageUrl}
                            onChange={handleInputChange}
                            placeholder='https://exemplo.com/imagem.jpg'
                        />
                        <small style={{ color: '#666', fontSize: '12px', marginTop: '5px', display: 'block' }}>
                            Cole o link de uma imagem da web ou deixe em branco para usar imagem padrão
                        </small>
                    </div>

                    {formData.imageUrl && (
                        <div className='image-preview-container'>
                            <label>Pré-visualização da Imagem</label>
                            <img
                                src={formData.imageUrl}
                                alt='Preview'
                                className='image-preview'
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/300x300?text=Imagem+Inválida'
                                }}
                            />
                        </div>
                    )}

                    <div className='form-actions'>
                        <button
                            type='button'
                            onClick={handleBack}
                            className='cancel-button'
                            disabled={isLoading}
                        >
                            Cancelar
                        </button>
                        <button
                            type='submit'
                            className='submit-button'
                            disabled={isLoading}
                        >
                            {isLoading ? 'Adicionando...' : 'Adicionar Produto'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct