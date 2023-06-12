// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

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
