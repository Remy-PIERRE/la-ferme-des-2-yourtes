import { getDataCategory } from "../data/dataInstance.js";
import { initStoreFilters } from "./filters/initStoreFilters.js";
import { displayStoreGalleryCards } from "./gallery/displayStoreGalleryCards.js";

export const initStore = () => {
  initStoreFilters();

  const dataProducts = getDataCategory("products");
  displayStoreGalleryCards(dataProducts);
};
