import api from './api';

// Lấy danh sách tất cả nghệ sĩ
export const getAllArtists = async () => {
  try {
    const response = await api.get('/artists');
    return response.data;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách nghệ sĩ:', error);
    throw error;
  }
};

// Lấy thông tin chi tiết nghệ sĩ theo ID
export const getArtistById = async (id) => {
  try {
    const response = await api.get(`/artists/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi lấy thông tin nghệ sĩ ID ${id}:`, error);
    throw error;
  }
};

// Lấy các bài hát của nghệ sĩ
export const getArtistSongs = async (artistId) => {
  try {
    const response = await api.get(`/artists/${artistId}/songs`);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi lấy bài hát của nghệ sĩ ID ${artistId}:`, error);
    throw error;
  }
};

// Giải pháp tạm thời với dữ liệu mẫu - sẽ thay thế bằng API thực khi sẵn sàng
export const getMockArtists = () => {
  return [
    {
      id: 1,
      name: 'Michael Jackson',
      image: 'https://picsum.photos/id/1001/200/200',
      genre: 'Pop',
      popularSongs: ['Thriller', 'Billie Jean', 'Beat It']
    },
    {
      id: 2,
      name: 'Adele',
      image: 'https://picsum.photos/id/1002/200/200',
      genre: 'Pop, Soul',
      popularSongs: ['Hello', 'Someone Like You', 'Rolling in the Deep']
    },
    {
      id: 3,
      name: 'Ed Sheeran',
      image: 'https://picsum.photos/id/1003/200/200',
      genre: 'Pop, Folk-pop',
      popularSongs: ['Shape of You', 'Perfect', 'Thinking Out Loud']
    },
    {
      id: 4,
      name: 'Beyoncé',
      image: 'https://picsum.photos/id/1004/200/200',
      genre: 'R&B, Pop',
      popularSongs: ['Halo', 'Single Ladies', 'Crazy in Love']
    }
  ];
};



