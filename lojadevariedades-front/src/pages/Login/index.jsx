import React, { useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/img/logoarmarinho.jpg'
import { IoArrowBack } from 'react-icons/io5'
import authService from '../../services/authService'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    
    try {
      if (isLogin) {
        // Lógica de login
        await authService.login(formData.email, formData.password)
        alert('Login realizado com sucesso!')
        navigate('/manage')
      } else {
        // Lógica de cadastro
        if (formData.password !== formData.confirmPassword) {
          setError('Senhas não coincidem!')
          setLoading(false)
          return
        }
        await authService.register(formData.name, formData.email, formData.password)
        alert('Cadastro realizado com sucesso!')
        navigate('/home')
      }
    } catch (err) {
      console.error('Erro:', err)
      setError(err.message || 'Erro ao processar sua solicitação. Verifique suas credenciais.')
    } finally {
      setLoading(false)
    }
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setFormData({ email: '', password: '', confirmPassword: '', name: '' })
  }

  const handleBackToHome = () => {
    navigate('/home')
  }

  return (
    <div className='login-main-container'>
      <div className='login-content-wrapper'>
        <div className='login-logo-section'>
          <img src={Logo} alt="Logo Armarinho" className='login-logo' />
        </div>
        
        <div className='login-container'>
          <div className='login-header'>
            <button onClick={handleBackToHome} className='back-button'>
              <IoArrowBack size={20} />
            </button>
            <h1 className='login-title'>
              {isLogin ? 'Entrar na sua conta' : 'Criar nova conta'}
            </h1>
          </div>

        <form onSubmit={handleSubmit} className='login-form'>
          {!isLogin && (
            <div className='form-group'>
              <label htmlFor='name'>Nome completo</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                placeholder='Digite seu nome completo'
                required
              />
            </div>
          )}

          <div className='form-group'>
            <label htmlFor='email'>E-mail</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Digite seu e-mail'
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Senha</label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              placeholder='Digite sua senha'
              required
            />
          </div>

          {!isLogin && (
            <div className='form-group'>
              <label htmlFor='confirmPassword'>Confirmar senha</label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder='Confirme sua senha'
                required
              />
            </div>
          )}

          {error && (
            <div className='error-message' style={{
              color: '#e74c3c',
              backgroundColor: '#fadbd8',
              padding: '10px',
              borderRadius: '5px',
              marginBottom: '15px',
              fontSize: '14px'
            }}>
              {error}
            </div>
          )}

          <button type='submit' className='submit-button' disabled={loading}>
            {loading ? 'Processando...' : (isLogin ? 'Entrar' : 'Criar conta')}
          </button>
        </form>

        <div className='toggle-container'>
          <p>
            {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}
            <span onClick={toggleMode} className='toggle-link'>
              {isLogin ? ' Cadastre-se' : ' Faça login'}
            </span>
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login