import api from './api';

// Đăng nhập
export const login = async (email, password) => {
  try {
    // Thay đổi /auth/login thành /auth (hoặc /users cho json-server)
    const response = await api.get('/users?email=' + email);
    
    if (response.data && response.data.length > 0) {
      const user = response.data[0];
      
      // Giả lập token
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
      
      // Lưu token vào localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      return user;
    } else {
      throw new Error('Email hoặc mật khẩu không đúng');
    }
  } catch (error) {
    console.error('Lỗi đăng nhập:', error);
    throw error;
  }
};

// Đăng ký
export const register = async (name, email, password) => {
  try {
    const response = await api.post('/users', { name, email, password });
    return response.data;
  } catch (error) {
    console.error('Lỗi đăng ký:', error);
    throw error;
  }
};

// Đăng xuất
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// Kiểm tra người dùng đã đăng nhập chưa
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

// Lấy thông tin người dùng hiện tại
export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
}; 