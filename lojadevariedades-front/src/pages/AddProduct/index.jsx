import React, { useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import productService from '../../services/productService'

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        stockQuantity: '',
        imageUrl: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

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
        setError('')
        setIsLoading(true)

        try {
            // Validar campos obrigatórios
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

            await productService.create(product)
            alert('Produto adicionado com sucesso!')
            navigate('/manage')
        } catch (err) {
            setError(err.message || 'Erro ao adicionar produto')
            console.error('Erro:', err)
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
                {error && <div className='error-message'>{error}</div>}
                
                <form onSubmit={handleSubmit} className='add-product-form'>
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
                                disabled={isLoading}
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
                            rows={4}
                            disabled={isLoading}
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
                                placeholder='0,00'
                                min='0'
                                step='0.01'
                                required
                                disabled={isLoading}
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
                                disabled={isLoading}
                            />
                        </div>
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
                            disabled={isLoading}
                        />
                    </div>

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