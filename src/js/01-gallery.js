import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        title="${description}"
      />
    </a>
    </li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
const options =  {
    captions:'true',
    captionDelay:'1000',
  };
new SimpleLightbox(".gallery__link", options);
