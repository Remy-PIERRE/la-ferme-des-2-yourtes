import { getDataCategory } from "../../data/dataInstance.js";
import { setWindowResizeCallback } from "../../window/windowResizeCallbacks.js";
import { createStoreFiltersCategory } from "./createStoreFiltersCategory.js";
import { handleStoreFiltersEvents } from "./handleStoreFiltersEvents.js";

export const initStoreFilters = () => {
  const dataFilters = getDataCategory("productsCategories");

  setWindowResizeCallback("storeFilters", initStoreFilters);

  for (const category of dataFilters) {
    createStoreFiltersCategory(category);
  }

  handleStoreFiltersEvents();
};
