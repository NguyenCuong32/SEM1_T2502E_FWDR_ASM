import React, { useState } from 'react';
import { rateSong } from '../services/musicService';

function MusicCard({ card }) {
  const [rating, setRating] = useState(card.rating);
  const [isRating, setIsRating] = useState(false);

  // Xử lý đánh giá
  const handleRating = async (newRating) => {
    try {
      setIsRating(true);
      // Gọi API để đánh giá bài hát
      await rateSong(card.id, newRating);
      setRating(newRating);
      setIsRating(false);
    } catch (error) {
      console.error('Lỗi khi đánh giá:', error);
      setIsRating(false);
    }
  };

  // Tạo các ngôi sao đánh giá có thể tương tác
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const starValue = index + 1;
      return (
        <i
          key={index}
          className={`${starValue <= rating ? 'fas' : 'far'} fa-star ${isRating ? '' : 'rating-star'}`}
          style={{ color: starValue <= rating ? '#ffc107' : '#e4e5e9', cursor: isRating ? 'default' : 'pointer' }}
          onClick={() => !isRating && handleRating(starValue)}
        ></i>
      );
    });
  };

  return (
    <div className="col">
      <div className="card h-100 p-3">
        <img src={card.image} className="card-img-top" alt="Album cover" />
        <div className="card-body px-0 pb-0">
          <h5 className="card-title">{card.title}</h5>
          <div className="rating">
            {renderStars()}
            {isRating && <small className="ms-2 text-muted">Đang xử lý...</small>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicCard; 