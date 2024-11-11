import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Função para criar um novo post
export const createPost = async (post) => {
  try {
    const response = await axios.post(API_URL, post);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar post:', error);
  }
};

// Função para buscar todos os posts
export const getPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
  }
};

// Função para buscar um post pelo ID
export const getPost = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar post:', error);
  }
};

// Função para atualizar um post
export const updatePost = async (id, post) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, post);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar post:', error);
  }
};

// Função para deletar um post
export const deletePost = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar post:', error);
  }
};
