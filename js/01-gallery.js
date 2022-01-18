import { galleryItems } from "./gallery-items.js";
// Change code below this line

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

const imgEl = document.querySelector(".gallery__image");

generalBoxEl.addEventListener("click", clickOnCard);

function clickOnCard(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  console.log(e.target);
  console.log(e.target.nodeName);
  console.log(e.target.src);
  console.log(e.target.dataset.source);

  e.target.scr = e.target.dataset.source;
  console.log(e.target.src);

  const instance = basicLightbox.create(`
    <img src= "${e.target.dataset.source}" >
`);
  instance.show();
}
