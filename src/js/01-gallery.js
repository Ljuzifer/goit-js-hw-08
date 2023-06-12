// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const galleryOfImages = document.querySelector('ul.gallery');

const imagesMarkup = galleryItems.reduce(
  (acc, { original, preview, description }) =>
    (acc += `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`),
  ''
);

galleryOfImages.insertAdjacentHTML('beforeend', imagesMarkup);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
