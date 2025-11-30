import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({
      message: 'Please enter a search word',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (!data.hits || data.hits.length === 0) {
        iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(() => {
      iziToast.error({
        message: 'Something went wrong. Try again later!',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
