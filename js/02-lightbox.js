import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

let lightbox;
const galleryContainer = document.querySelector(".gallery");
const galleryCards = creatGalleryCards();

galleryContainer.innerHTML = galleryCards;
lightbox = new SimpleLightbox('.gallery__item', {captionsData: 'alt', captionDelay: 250});

function creatGalleryCards() {
  return galleryItems
    .map(
      (item) =>
        ` <a class="gallery__item" href="${item.original}">
        <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
        />
        </a>`
    )
    .join("");
}