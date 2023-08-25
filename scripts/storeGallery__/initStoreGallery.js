import { getDataCategory } from "../data__/dataInstance.js";
import { filterStoreGalleryProducts } from "./filterStoreGalleryProducts.js";
import { createStoreGalleryCard } from "./createStoreGalleryCard.js";
import { createStoreGalleryPagination } from "./createStoreGalleryPagination.js";

export const initStoreGallery = (config) => {
  const { data: dataConfig, pagination } = config;

  const dataProducts = getDataCategory(dataConfig);
  const filteredData = filterStoreGalleryProducts(dataProducts);

  for (const data of filteredData) {
    createStoreGalleryCard(data);
  }

  createStoreGalleryPagination(pagination, filteredData);
};
