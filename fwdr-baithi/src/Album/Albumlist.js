import 'bootstrap/dist/css/bootstrap.min.css';
import Album from './Album';
import Listnhacsy from '../Data/Listnhacsy.json';
function Albumlist() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className='row row-cols-4 g-4'>
            {Listnhacsy.map((e) => (
              <div className='col'>
                <Album src={e.src} name={e.name} danhgia={e.danhgia} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Albumlist;
