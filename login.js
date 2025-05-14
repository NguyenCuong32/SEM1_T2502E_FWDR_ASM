import './login.css';

function Login(props) {
    return (
        <div className="login">
            <h2>Đăng nhập</h2>
            <form>
                <div>
                    <label htmlFor="username">Tên đăng nhập:</label>
                    <input type="text" id="username" name="username" placeholder='admin@gmail.com' />
                </div>
                <div>
                    <label htmlFor="password">Mật khẩu:</label>
                    <input type="password" id="password" name="password" placeholder='Password' />
                </div>
                <div class="login-container">
                    <label for="remember">
                        <input type="checkbox" id="remember" name="remember" />
                        Ghi nhớ đăng nhập
                    </label>
                    <a href="/forgot-password" id="forgot-password">Quên mật khẩu?</a>
                </div>

                <button type="submit">Đăng nhập</button>
            </form>
            <div class="login-container">
                <p>Chưa có tài khoản?</p>
                <a href="/register">Đăng ký ngay</a>
            </div>
        </div>
    );
    
}
export default Login;