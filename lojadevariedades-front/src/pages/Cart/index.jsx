import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

import Topbar from '../../components/Topbar'
import Navbar from '../../components/Navbar'

// Mock data para demonstração - em um projeto real, isso viria do estado global
const mockCartItems = [
  {
    id: 1,
    name: "Perfume Importado Luxo",
    price: 89.99,
    quantity: 2,
    image: "https://via.placeholder.com/150x150?text=Perfume"
  },
  {
    id: 2,
    name: "Smartphone Android 128GB",
    price: 899.99,
    quantity: 1,
    image: "https://via.placeholder.com/150x150?text=Phone"
  }
]

// Mock data dos pedidos realizados
const mockOrders = [
  {
    id: "PED001",
    date: "2024-11-28",
    total: 179.98,
    status: "confirmed",
    items: [
      {
        name: "Perfume Importado Luxo",
        quantity: 2,
        price: 89.99,
        image: "https://via.placeholder.com/80x80?text=Perfume"
      }
    ]
  },
  {
    id: "PED002",
    date: "2024-11-25",
    total: 1299.99,
    status: "shipped",
    estimatedDelivery: "2024-12-03",
    trackingCode: "BR123456789",
    items: [
      {
        name: "Smartphone Android 128GB",
        quantity: 1,
        price: 1299.99,
        image: "https://via.placeholder.com/80x80?text=Phone"
      }
    ]
  },
  {
    id: "PED003",
    date: "2024-11-20",
    total: 45.90,
    status: "delivered",
    deliveredDate: "2024-11-23",
    items: [
      {
        name: "Panela Alumínio",
        quantity: 1,
        price: 45.90,
        image: "https://via.placeholder.com/80x80?text=Panela"
      }
    ]
  }
]

const Cart = () => {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState(mockCartItems)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(id)
      return
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const calculateShipping = () => {
    return cartItems.length > 0 ? 15.99 : 0
  }

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping()
  }

  const handleCheckout = () => {
    alert('Redirecionando para o checkout...')
    // Aqui você implementaria o redirecionamento para o checkout
  }

  const handleContinueShopping = () => {
    navigate('/home')
  }

  const getOrderStatus = (status) => {
    switch (status) {
      case 'confirmed':
        return { text: 'Pagamento Confirmado', color: '#28a745', icon: '✓' }
      case 'shipped':
        return { text: 'Produto Enviado', color: '#007bff', icon: '🚚' }
      case 'delivered':
        return { text: 'Produto Entregue', color: '#6c757d', icon: '📦' }
      default:
        return { text: 'Processando', color: '#ffc107', icon: '⏳' }
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR')
  }

  if (cartItems.length === 0) {
    return (
      <div>
        <Topbar />
        <Navbar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="cart-main-container">
          <div className="cart-page-container">
            <div className="cart-header">
              <h1>Seu Carrinho</h1>
              <button 
                className="continue-shopping-btn"
                onClick={handleContinueShopping}
              >
                ← Continuar Comprando
              </button>
            </div>
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <h2>Seu carrinho está vazio</h2>
              <p>Adicione produtos ao seu carrinho para vê-los aqui.</p>
              <button 
                className="shop-now-btn"
                onClick={handleContinueShopping}
              >
                Começar a Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Topbar />
      <Navbar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="cart-main-container">
        <div className="cart-page-container">
          <div className="cart-header">
            <h1>Seu Carrinho ({cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'})</h1>
            <button 
              className="continue-shopping-btn"
              onClick={handleContinueShopping}
            >
              ← Continuar Comprando
            </button>
          </div>
          
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-price">R$ {item.price.toFixed(2)}</p>
                  </div>
                  <div className="item-quantity">
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="item-total">
                    <p>R$ {(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <div className="summary-card">
                <h3>Resumo do Pedido</h3>
                <div className="summary-line">
                  <span>Subtotal:</span>
                  <span>R$ {calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="summary-line">
                  <span>Frete:</span>
                  <span>R$ {calculateShipping().toFixed(2)}</span>
                </div>
                <div className="summary-line total">
                  <span>Total:</span>
                  <span>R$ {calculateTotal().toFixed(2)}</span>
                </div>
                <button 
                  className="checkout-btn"
                  onClick={handleCheckout}
                >
                  Finalizar Compra
                </button>
                <div className="secure-checkout">
                  🔒 Compra 100% segura
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Pedidos Realizados */}
        <div className="orders-section">
          <h2 className="orders-title">Meus Pedidos</h2>
          <div className="orders-list">
            {mockOrders.map((order) => {
              const statusInfo = getOrderStatus(order.status)
              return (
                <div key={order.id} className="order-card">
                  <div className="order-header">
                    <div className="order-info">
                      <h3 className="order-id">Pedido #{order.id}</h3>
                      <p className="order-date">Data: {formatDate(order.date)}</p>
                      <p className="order-total">Total: R$ {order.total.toFixed(2)}</p>
                    </div>
                    <div className="order-status" style={{ color: statusInfo.color }}>
                      <span className="status-icon">{statusInfo.icon}</span>
                      <span className="status-text">{statusInfo.text}</span>
                    </div>
                  </div>

                  {/* Informações específicas por status */}
                  {order.status === 'shipped' && (
                    <div className="order-shipping-info">
                      <p className="tracking-code">Código de rastreamento: <strong>{order.trackingCode}</strong></p>
                      <p className="estimated-delivery">Previsão de entrega: <strong>{formatDate(order.estimatedDelivery)}</strong></p>
                    </div>
                  )}

                  {order.status === 'delivered' && (
                    <div className="order-delivery-info">
                      <p className="delivered-date">Entregue em: <strong>{formatDate(order.deliveredDate)}</strong></p>
                    </div>
                  )}

                  {/* Lista de itens do pedido */}
                  <div className="order-items">
                    {order.items.map((item, index) => (
                      <div key={index} className="order-item">
                        <img src={item.image} alt={item.name} className="order-item-image" />
                        <div className="order-item-details">
                          <p className="order-item-name">{item.name}</p>
                          <p className="order-item-info">Quantidade: {item.quantity} | Preço: R$ {item.price.toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart