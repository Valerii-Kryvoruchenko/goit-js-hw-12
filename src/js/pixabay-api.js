// Your API key: 53393069-83cee6561783600a5d025c02b
import axios from 'axios';

const API_KEY = '53393069-83cee6561783600a5d025c02b';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  };
  return axios
    .get(BASE_URL, { params })
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching:', error);
      throw error;
    });
}
