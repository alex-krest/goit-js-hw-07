import { galleryItems } from "./gallery-items.js";
// Change code below this line
import * as basicLightbox from "basiclightbox";

const generalBoxEl = document.querySelector(".gallery");

function createImgCardsMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  `;
    })
    .join("");
}

const cardsMarkup = createImgCardsMarkup(galleryItems);

generalBoxEl.insertAdjacentHTML("beforeend", cardsMarkup);

const imgEl = document.querySelector(".gallery__link");

generalBoxEl.addEventListener("click", clickOnCard);

function clickOnCard(e) {
  e.preventDefault();
  console.log(e.turget);
  console.log(e.currentTurget);
  e.turget.scr = e.turget.dataset.source;
  if (e.turget !== imgEl) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);
  instance.show();
}
