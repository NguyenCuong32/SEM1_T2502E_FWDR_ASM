import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../services/authService';
import '../styles/Login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      if (isLogin) {
        // Xử lý đăng nhập
        await login(email, password);
        navigate('/');
      } else {
        // Xử lý đăng ký
        await register(name, email, password);
        // Chuyển sang form đăng nhập sau khi đăng ký thành công
        setIsLogin(true);
        setEmail('');
        setPassword('');
        // Hiển thị thông báo đăng ký thành công
        setError('Đăng ký thành công! Vui lòng đăng nhập');
      }
    } catch (err) {
      // Hiển thị lỗi
      setError(err.response?.data?.message || 'Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm p-4 mt-5">
            <h2 className="text-center mb-4">{isLogin ? 'Đăng nhập' : 'Đăng ký'}</h2>
            
            {error && (
              <div className={`alert ${error.includes('thành công') ? 'alert-success' : 'alert-danger'}`}>
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Họ tên</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={!isLogin}
                  />
                </div>
              )}
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      <span className="ms-2">Đang xử lý...</span>
                    </>
                  ) : (
                    isLogin ? 'Đăng nhập' : 'Đăng ký'
                  )}
                </button>
              </div>
            </form>
            
            <div className="mt-3 text-center">
              <button
                className="btn btn-link"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                }}
              >
                {isLogin ? 'Chưa có tài khoản? Đăng ký ngay' : 'Đã có tài khoản? Đăng nhập'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login; 