import React,{useState} from 'react';
import '.Link' from 'react-router-dom';
function App() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
    <nav className="navbar">
    <div className="navbar-container">
      <Link to ="/" className="navbar-logo">Music</Link>
      <div className='menu-icon'>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} onClick={handleClick}></i>
        </>
      </div>
      </div>
      </nav>
      </>
  )
}