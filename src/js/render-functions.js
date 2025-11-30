import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.js-loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createCardMarkup(image) {
  return `
    <li class="gallery-item">
      <a href="${image.largeImageURL}" class="block">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" class="gallery-image" />
      </a>
      <div class="info">
        <div class="info-item"><b>Likes</b><span>${image.likes}</span></div>
        <div class="info-item"><b>Views</b><span>${image.views}</span></div>
        <div class="info-item"><b>Comments</b><span>${image.comments}</span></div>
        <div class="info-item"><b>Downloads</b><span>${image.downloads}</span></div>
      </div>
    </li>
  `;
}

export function createGallery(images) {
  const markup = images.map(createCardMarkup).join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.add('is-visible');
}

export function hideLoader() {
  loaderEl.classList.remove('is-visible');
}
