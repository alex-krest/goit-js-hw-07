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

  const instance = basicLightbox.create(
    `
    <div class='modal'>
	 <img src= "${e.target.dataset.source}" 
	 alt=${e.target.alt} 
	 width='800'
    heigth='100%'
	 />
	 </div>
`,
    {
      onShow: () => {
        //   instance.element().querySelector("IMG").onclick = instance.close;
        window.addEventListener("keydown", onEscapeClick);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscapeClick);
      },
    }
  );
  function onEscapeClick(e) {
    if (e.key === "Escape") {
      instance.close();
    }
  }
  instance.show();
}
