import { resetStoreGalleryContainer } from "./resetStoreGalleryContainer.js";
import { createStoreGalleryCard } from "./createStoreGalleryCard.js";

export const displayStoreGalleryCards = (currentData) => {
  resetStoreGalleryContainer();

  for (const data of currentData) {
    createStoreGalleryCard(data);
  }
};
