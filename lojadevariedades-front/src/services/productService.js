import apiClient from '../api/apiClient';

const productService = {
  // Listar todos os produtos
  getAll: async (page = 0, size = 10, search = '', categoryId = null) => {
    try {
      const params = { page, size };
      if (search) params.q = search;
      // only send numeric categoryId (backend expects Long). If categoryId is a non-numeric label (e.g. 'Todos'), ignore it
      if (categoryId && !isNaN(Number(categoryId))) params.categoryId = Number(categoryId);
      
      const response = await apiClient.get('/products', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Obter um produto específico
  getById: async (id) => {
    try {
      const response = await apiClient.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Criar produto (ADMIN)
  create: async (product) => {
    try {
      const response = await apiClient.post('/admin/products', product);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Atualizar produto (ADMIN)
  update: async (id, product) => {
    try {
      const response = await apiClient.put(`/admin/products/${id}`, product);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Deletar produto (ADMIN)
  delete: async (id) => {
    try {
      await apiClient.delete(`/admin/products/${id}`);
    } catch (error) {
      throw error.response?.data || error;
    }
  }
};

export default productService;
