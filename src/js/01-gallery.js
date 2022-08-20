// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);

const galleryUl = document.querySelector('.gallery');

const galleryImage = galleryItems.map(({ preview, original, description }) => {
  const photoE = `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}" title="${description}"
    />
  </a>`;
  return photoE;
});

// console.log(galleryImage);
// Перевести с массива в строку
const stringGallery = galleryImage.join('');
// Добавил динамически  из JS  в HTML есть несколько методов, тк массив был пустой .innerHTML
galleryUl.innerHTML = stringGallery;
// console.log(gallaryImage.join(''));

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
