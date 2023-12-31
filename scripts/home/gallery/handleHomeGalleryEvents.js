import { getOriginPathName } from "../../utils/getPathName.js";
import { getHomeGalleryCards } from "./getHomeGalleryElements.js";

export const handleHomeGalleryEvents = () => {
  const cards = getHomeGalleryCards();
  for (const card of cards) {
    card.addEventListener("click", handleHomeGalleryCardClick);
  }
};

const handleHomeGalleryCardClick = (event) => {
  const card = event.currentTarget;
  window.localStorage.setItem("currentProduct", card.id);
  window.location.href = `${getOriginPathName()}produit.html`;
};
