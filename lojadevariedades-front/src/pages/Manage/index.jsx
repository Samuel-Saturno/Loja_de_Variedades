import React, { useState } from 'react'
import './index.css'
import NavbarAdmin from '../../components/NavbarAdmin'
import Product from '../../components/Product'

const Manage = () => {
  const [searchTerm] = useState('') // Para manter compatibilidade com Product
  const [selectedCategory] = useState('Todos') // Para manter compatibilidade com Product
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  // Função para forçar atualização dos produtos
  const handleRefresh = () => {
    setRefreshTrigger(prev => prev + 1)
  }

  // Escutar evento personalizado de atualização de produtos
  React.useEffect(() => {
    const handleProductUpdate = () => {
      handleRefresh()
    }
    window.addEventListener('productUpdated', handleProductUpdate)
    return () => window.removeEventListener('productUpdated', handleProductUpdate)
  }, [])

  return (
    <div className='manage-container'>
        <NavbarAdmin />
        <div className='manage-content'>
            <h1 className='manage-title'>Gerenciamento de Produtos</h1>
            <div className='manage-description'>
                <p>Use os botões na barra superior para adicionar, editar ou excluir produtos.</p>
            </div>
            <Product 
                searchTerm={searchTerm} 
                selectedCategory={selectedCategory}
                refreshTrigger={refreshTrigger}
            />
        </div>
    </div>
  )
}

export default Manage
