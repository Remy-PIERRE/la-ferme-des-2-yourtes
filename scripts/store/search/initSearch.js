import { getDataCategory } from "../../data/dataInstance.js";
import { getStoreSelectedFilters } from "../filters/getStoreSelectedFilters.js";
import { displayStoreGalleryCards } from "../gallery/displayStoreGalleryCards.js";
import { filterData } from "./filterData.js";

export const initSearch = () => {
  const data = getDataCategory("products");
  const filters = getStoreSelectedFilters();
  console.log("selected filters: ", filters);

  const filteredData = filterData(filters, data);
  console.log("filtered data: ", filteredData);

  displayStoreGalleryCards(filteredData);
};
