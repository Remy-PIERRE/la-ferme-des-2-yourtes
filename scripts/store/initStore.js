import { getDataCategory } from "../data/dataInstance.js";
import { initStoreFilters } from "./filters/initStoreFilters.js";
import { displayStoreGalleryCards } from "./gallery/displayStoreGalleryCards.js";
import { handleStoreGalleryEvents } from "./gallery/handleStoreGalleryEvents.js";

export const initStore = () => {
  initStoreFilters();

  const dataProducts = getDataCategory("products");
  displayStoreGalleryCards(dataProducts);

  handleStoreGalleryEvents();
};
