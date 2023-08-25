import { getDataCategory } from "../../data/dataInstance.js";
import { filterHomePageProducts } from "../../products/filterProducts.js";
import { createHomeGalleryCard } from "./createHomeGalleryCard.js";

export const initHomeGallery = () => {
  const dataProducts = getDataCategory("products");
  const filteredData = filterHomePageProducts(dataProducts);
  console.log("home gallery products: ", filteredData);

  for (const data of filteredData) {
    createHomeGalleryCard(data);
  }
};
