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
  }
};

export default authService;
