import React, { useState, useEffect } from 'react';
import MusicCard from './MusicCard';
import MusicPlayer from './MusicPlayer';
import { getAllMusic, getCurrentSong, getMusicById } from '../services/musicService';
import { getMockArtists } from '../services/artistService';
import '../styles/Home.css';

function Home() {
  const [musicCards, setMusicCards] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Sử dụng try-catch riêng cho từng API call
        try {
          // Gọi API lấy danh sách bài hát
          const musicData = await getAllMusic();
          setMusicCards(musicData);
        } catch (musicError) {
          console.error('Error fetching music list:', musicError);
          setError('Không thể tải danh sách bài hát: ' + musicError.message);
        }
        
        try {
          // Gọi API lấy bài hát hiện tại
          // Sử dụng bài hát có ID=1 từ danh sách
          const songData = await getMusicById(1);
          setCurrentSong(songData);
        } catch (songError) {
          console.error('Error fetching current song:', songError);
          // Không hiển thị lỗi này, chỉ log
        }
        
        setLoading(false);
      } catch (err) {
        console.error('General error fetching data:', err);
        setError('Không thể tải dữ liệu. Vui lòng thử lại sau. Chi tiết: ' + err.message);
        setLoading(false);
      }
    };

    fetchData();
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
    // Hiển thị lỗi nhưng vẫn hiển thị nội dung nếu có
    return (
      <main className="container py-4">
        <div className="alert alert-danger m-4" role="alert">
          {error}
        </div>
        
        {/* Hiển thị nội dung mặc định nếu không tải được API */}
        <div className="row">
          <div className="col-12">
            <h3>Không thể tải dữ liệu từ API, hiển thị dữ liệu mẫu</h3>
          </div>
        </div>

        {/* Music Player Section - hiển thị nếu có bài hát */}
        {currentSong && <MusicPlayer song={currentSong} />}

        {/* Music Cards Grid - hiển thị danh sách nếu có */}
        {musicCards.length > 0 && (
          <section className="music-cards">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {musicCards.map(card => (
                <MusicCard key={card.id} card={card} />
              ))}
            </div>
          </section>
        )}
      </main>
    );
  }

  return (
    <main className="container py-4">
      {/* Music Player Section */}
      {currentSong && <MusicPlayer song={currentSong} />}

      {/* Music Cards Grid */}
      <section className="music-cards">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {musicCards.map(card => (
            <MusicCard key={card.id} card={card} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home; 