import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
function Footer() {
  return (
    <div className='container py-3'>
      <div className='bg-light d-flex align-items-center'>
        <i
          className='bi bi-music-note'
          style={{ color: 'deeppink', fontSize: '35px' }}
        ></i>
        <h4>Top 10 Nhạc sĩ nổi tiếng Việt Nam trong thế kỉ 20</h4>
        <i
          className='bi bi-music-note'
          style={{ color: 'deeppink', fontSize: '35px' }}
        ></i>
      </div>
    </div>
  );
}
export default Footer;
