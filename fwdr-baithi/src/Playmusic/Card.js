import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
function Playmusic() {
  return (
    <div className='container'>
      <div
        style={{ borderRadius: '10px', border: '1px solid rgb(35, 35, 161)' }}
        className='card'
      >
        <div className='w-100 d-flex justify-content-center py-3'>
          <audio style={{ width: '90%' }} controls autoplay muted>
            <source src='/hcm.wav' type='audio/mpeg' />
          </audio>
        </div>
        <div className='w-100 row py-4'>
          <div className='col-6 d-flex align-items-center'>
            <i
              className='bi bi-music-note ms-5'
              style={{ color: 'deeppink', fontSize: '35px' }}
            ></i>
            <h5 className='fw-bold'>
              Ai yêu Bác Hồ Chí Minh hơn thiếu niên nhi đồng?
            </h5>
          </div>
          <div className='col-6'>
            <h5>
              Bác chúng em dáng cao cao người thanh thanh (Bác chúng em dáng cao
              cao người thanh thanh)
            </h5>
            <h5>
              Bác chúng em mắt như sao râu hơi dài (Bác chúng em mắt như sao râu
              hơi dài)
            </h5>
            <h5>
              Bác chúng em nước da nâu vì sương gió (Bác chúng em nước da nâu vì
              sương gió)
            </h5>
            <h5>
              Bác chúng em thề cương quyết trả thù nhà (Bác chúng em thề cương
              quyết trả thù nhà)
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Playmusic;
