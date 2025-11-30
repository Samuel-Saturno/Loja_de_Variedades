import React, { useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import { MdCloudUpload } from 'react-icons/md'

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: 'Perfumes',
        image: null,
        imagePreview: null
    })
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const categories = ['Perfumes', 'Eletrônicos', 'Plásticos', 'Alumínios', 'Calçados', 'Higiene']

    const handleInputChange = (e) => {
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        // Simular adição do produto
        try {
            // Aqui seria feita a requisição para a API
            console.log('Produto adicionado:', {
                ...formData,
                id: Date.now(), // ID temporário
                image: formData.imagePreview || '/placeholder-image.jpg'
            })

            // Simular delay da API
            await new Promise(resolve => setTimeout(resolve, 1500))

            alert('Produto adicionado com sucesso!')
            navigate('/manage')
        } catch (error) {
            alert('Erro ao adicionar produto')
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
                            <label htmlFor='category'>Categoria *</label>
                            <select
                                id='category'
                                name='category'
                                value={formData.category}
                                onChange={handleInputChange}
                                required
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
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
                                placeholder='0,00'
                                min='0'
                                step='0.01'
                                required
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='image'>Imagem do Produto</label>
                            <div className='image-upload-container'>
                                <input
                                    type='file'
                                    id='image'
                                    accept='image/*'
                                    onChange={handleImageChange}
                                    className='image-input'
                                />
                                <label htmlFor='image' className='image-upload-label'>
                                    <MdCloudUpload size={24} />
                                    <span>Clique para selecionar uma imagem</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {formData.imagePreview && (
                        <div className='image-preview-container'>
                            <label>Pré-visualização da Imagem</label>
                            <img
                                src={formData.imagePreview}
                                alt='Preview'
                                className='image-preview'
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