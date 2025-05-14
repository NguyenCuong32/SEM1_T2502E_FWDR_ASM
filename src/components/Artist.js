import React, { useState, useEffect } from 'react';
import { getAllArtists } from '../services/artistService';

function Artist() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sử dụng artistService để lấy dữ liệu
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        setLoading(true);
        const data = await getAllArtists();
        setArtists(data);
        setLoading(false);
      } catch (err) {
        console.error('Lỗi khi lấy dữ liệu nghệ sĩ:', err);
        setError('Không thể tải danh sách nghệ sĩ. Vui lòng thử lại sau.');
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Đang tải...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger m-4" role="alert">
        {error}
      </div>
    );
  }

  return (
    <main className="container py-4">
      <h2 className="mb-4">Nghệ Sĩ Nổi Bật</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {artists.map(artist => (
          <div key={artist.id} className="col">
            <div className="card h-100">
              <img src={artist.image} className="card-img-top" alt={artist.name} />
              <div className="card-body">
                <h5 className="card-title">{artist.name}</h5>
                <p className="card-text"><small className="text-muted">Thể loại: {artist.genre}</small></p>
                <div className="mt-2">
                  <p className="mb-1 fw-bold">Bài hát nổi tiếng:</p>
                  <ul className="list-unstyled">
                    {artist.popularSongs.map((song, index) => (
                      <li key={index}>{song}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Artist; 