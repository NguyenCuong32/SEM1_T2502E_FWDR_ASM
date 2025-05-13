import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Navbar.css';
function Navbar() {
  return (
    <div className='container'>
      <div
        style={{ height: '60px', borderBottom: '1px solid black' }}
        className='navbar w-100 navbar-expand-lg bg-light'
      >
        <a
          style={{ fontSize: '30px' }}
          className='navbar-brand fw-bold'
          href='#'
        >
          <i className='bi bi-music-note' style={{ color: 'deeppink' }}></i>
          Musical
        </a>
        <ul className='navbar-nav d-flex align-items-center mx-auto gap-5'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              About Us
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Music
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Albums
            </a>
          </li>
        </ul>
        <div className='d-flex align-items-center gap-3 justify-content-end'>
          <a className='btn h-auto' href='/login' type='button'>
            Sign In
          </a>
          <button
            style={{
              border: '1px solid rgb(35, 35, 161)',
            }}
            className='btn'
            type='button'
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
