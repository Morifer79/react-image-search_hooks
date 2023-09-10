import axios from 'axios';

export const fetchGallery = async (query, page) => {
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  const APY_KEY = '38349161-181fc6027accb0d90d0649b11';
  const params = new URLSearchParams({
    key: APY_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page,
  });
  const response = await axios.get(`/?${params}`);
  return response.data;
};

export const destImages = arr =>
  arr.map(({ id, tags, webformatURL, largeImageURL }) => {
    return { id, tags, webformatURL, largeImageURL };
  });
