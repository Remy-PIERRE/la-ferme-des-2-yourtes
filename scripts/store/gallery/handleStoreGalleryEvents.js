import { getStoreGalleryCards } from "./getStoreGalleryElements.js";

export const handleStoreGalleryEvents = () => {
  const cards = getStoreGalleryCards();
  for (const card of cards) {
    card.addEventListener("click", handleStoreGalleryCardClick, true);
  }
};

const handleStoreGalleryCardClick = (event) => {
  const target = event.currentTarget;
  window.localStorage.setItem("currentProduct", target.id);
  window.location.href = `${window.location.origin}/produit.html`;
};
