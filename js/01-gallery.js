import { galleryItems } from "./gallery-items.js";

function creatGalleryCards() {
  return galleryItems
    .map(
      (item) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>`
    )
    .join("");
}

function handleGalleryCardClick(event) {
  event.preventDefault();

  const imgOriginalLink = event.target.dataset.source;

  instance = basicLightbox.create(`<img src="${imgOriginalLink}" alt="${event.target.alt}">`);

  instance.show();

  document.addEventListener("keydown", hendleDocumentKeyDown);
}

const hendleDocumentKeyDown = (event) => {
  if (event.code !== "Escape") {
    return;
  } else {
    instance.close(() => document.removeEventListener("keydown", hendleDocumentKeyDown));
  }
};

let instance;
const galleryContainer = document.querySelector(".gallery");
const galleryCards = creatGalleryCards();

galleryContainer.innerHTML = galleryCards;

galleryContainer.addEventListener("click", handleGalleryCardClick);
