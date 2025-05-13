import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Listnhacsy from '../Data/Listnhacsy.json';
function Album(props) {
  return (
    <div className='card border-0 shadow h-100'>
      <img
        style={{ borderRadius: '10px' }}
        className='card-img-top py-3'
        src={props.src}
        alt={props.src}
      />
      <h5 style={{ textAlign: 'center' }}>{props.name}</h5>
      <div className='d-flex gap-2 mx-auto'>
        {Array(props.danhgia)
          .fill()
          .map((_, i) => (
            <i
              key={i}
              className='bi bi-star-fill'
              style={{ color: '#FFD700', fontSize: '24px' }}
            ></i>
          ))}
      </div>
    </div>
  );
}
export default Album;
