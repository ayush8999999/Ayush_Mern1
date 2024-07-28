import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000/api/blogs',
});

export const getBlogs = () => api.get('/');
export const getBlogById = (id) => api.get(`/${id}`);
export const createBlog = (blog) => api.post('/', blog);
export const updateBlog = (id, blog) => api.put(`/${id}`, blog);
export const deleteBlog = (id) => api.delete(`/${id}`);

export default api;
