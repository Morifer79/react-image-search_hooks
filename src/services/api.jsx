import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const APY_KEY = '38349161-181fc6027accb0d90d0649b11';
export const perPage = 12;

export const fetchGallery = async (query, page) => {
  const response = await axios.get(
    `?key=${APY_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response.data;
};

export const destImages = arr =>
  arr.map(({ id, tags, webformatURL, largeImageURL }) => {
    return { id, tags, webformatURL, largeImageURL };
  });
