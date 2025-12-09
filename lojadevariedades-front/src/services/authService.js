import apiClient from '../api/apiClient';

const authService = {
  // Login
  login: async (email, password) => {
    try {
      const response = await apiClient.post('/auth/login', { email, password });
      const token = response.data?.token || response.data;
      localStorage.setItem('authToken', token);
      return token;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Registro
  register: async (name, email, password) => {
    try {
      const response = await apiClient.post('/auth/register', { name, email, password });
      const token = response.data?.token || response.data;
      localStorage.setItem('authToken', token);
      return token;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem('authToken');
  },

  // Verificar se está autenticado
  isAuthenticated: () => {
    return !!localStorage.getItem('authToken');
  },

  // Obter token
  getToken: () => {
    return localStorage.getItem('authToken');
  },

  // Decodificar token JWT e obter payload
  decodeToken: (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Erro ao decodificar token:', error);
      return null;
    }
  },

  // Obter role do usuário
  getUserRole: () => {
    const token = localStorage.getItem('authToken');
    if (!token) return null;
    const decoded = authService.decodeToken(token);
    return decoded?.role || null;
  },

  // Verificar se é admin
  isAdmin: () => {
    const role = authService.getUserRole();
    return role === 'ADMIN';
  },

  // Verificar se é usuário comum
  isUser: () => {
    const role = authService.getUserRole();
    return role === 'USER';
  },

  // Obter email do usuário
  getUserEmail: () => {
    const token = localStorage.getItem('authToken');
    if (!token) return null;
    const decoded = authService.decodeToken(token);
    return decoded?.sub || null;
  }
};

export default authService;
