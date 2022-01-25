import { galleryItems } from "./gallery-items.js";
// Change code below this line

const generalBoxEl = document.querySelector(".gallery");

const cardsMarkup = createImgCardsMarkup(galleryItems);

function createImgCardsMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
	 <a class="gallery__item" 
	 href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
  `;
    })
    .join("");
}
generalBoxEl.insertAdjacentHTML("beforeend", cardsMarkup);

generalBoxEl.addEventListener("click", clickOnImg);

let gallery = new SimpleLightbox(".gallery a", {
	/* options */
	
	captionsData:'alt', 
	captionPosition:'bottom',
	captionDelay: 250, 
});

function clickOnImg(e) {
	   console.log(e.target.parentNode.href);
  if (e.target !== "IMG") {
    return;
  }
  e.target.src=== e.target.parentNode.href
//   gallery.on('show.simplelightbox', function () {
// 	 return e.target.src=== e.target.parentNode.href;
// });
}

