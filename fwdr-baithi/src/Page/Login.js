import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Login.css';
function Login() {
  return (
    <div className='container py-3'>
      <div className='row'>
        <div className='col-4'></div>
        <div className='col-4'>
          <div className='w-100'>
            <label
              style={{ fontSize: '1.5rem' }}
              className='fw-bold'
              htmlFor='email'
            >
              Email
            </label>
            <input
              style={{ border: '1px solid black' }}
              className='form-control w-100'
              type='text'
              placeholder='admin@gmail.com'
              name='email'
              id='email'
            />
          </div>
          <div className='w-100'>
            <label
              style={{ fontSize: '1.5rem' }}
              className='form-check-label fw-bold'
              htmlFor='pass'
            >
              Password
            </label>
            <input
              style={{ border: '1px solid black' }}
              className='form-control w-100 '
              type='password'
              placeholder='password'
              name='password'
              id='password'
            />
          </div>
          <div className='d-flex align-items-center py-2'>
            <div className='d-flex gap-2'>
              <input
                className='form-check-input'
                type='checkbox'
                name='select'
                id='select'
              />
              <span>Remember Me</span>
            </div>
            <a className='ms-auto' style={{ textDecoration: 'none' }} href='#'>
              Forgot Password?
            </a>
          </div>
          <button className='btn w-100' type='button'>
            LOGIN
          </button>
          <div className='d-flex gap-2 py-2 align-items-center justify-content-end'>
            <b>Not a member?</b>
            <a style={{ textDecoration: 'none' }} href='#'>
              Register?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
