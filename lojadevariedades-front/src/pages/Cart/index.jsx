import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import Topbar from '../../components/Topbar'
import Navbar from '../../components/Navbar'

const Cart = () => {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  useEffect(() => {
    loadCart()
  }, [])

  const loadCart = () => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      setCartItems(cart)
    } catch (err) {
      console.error('Erro ao carregar carrinho:', err)
      setCartItems([])
    }
  }

  const saveCart = (newCart) => {
    try {
      localStorage.setItem('cart', JSON.stringify(newCart))
      setCartItems(newCart)
    } catch (err) {
      console.error('Erro ao salvar carrinho:', err)
    }
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(productId)
      return
    }
    const newCart = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    )
    saveCart(newCart)
  }

  const removeItem = (productId) => {
    const newCart = cartItems.filter(item => item.id !== productId)
    saveCart(newCart)
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
    if (cartItems.length === 0) {
      alert('Seu carrinho está vazio')
      return
    }
    alert('Redirecionando para o checkout...')
  }

  const handleContinueShopping = () => {
    navigate('/home')
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
                    <img src={item.imageUrl || 'https://via.placeholder.com/150x150?text=Sem+Imagem'} alt={item.name} />
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
      </div>
    </div>
  )
}

export default Cart
