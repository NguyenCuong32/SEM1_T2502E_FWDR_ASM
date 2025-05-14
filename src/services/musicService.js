import api from './api';

// Lấy danh sách các bài hát
export const getAllMusic = async () => {
  try {
    const response = await api.get('/music');
    return response.data;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách bài hát:', error);
    throw error;
  }
};

// Lấy thông tin chi tiết của bài hát theo ID
export const getMusicById = async (id) => {
  try {
    const response = await api.get(`/music/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi lấy thông tin bài hát ID ${id}:`, error);
    throw error;
  }
};

// Lấy bài hát đang phát hiện tại
export const getCurrentSong = async () => {
  try {
    const response = await api.get('/music/1');
    return response.data;
  } catch (error) {
    console.error('Lỗi khi lấy bài hát hiện tại:', error);
    throw error;
  }
};

// Đánh giá bài hát
export const rateSong = async (id, rating) => {
  try {
    const response = await api.patch(`/music/${id}`, { rating });
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi đánh giá bài hát ID ${id}:`, error);
    throw error;
  }
}; 