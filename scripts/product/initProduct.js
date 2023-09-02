import { getProductId } from "../data/dataStorage.js";
import { getProductById } from "../products/filterProducts.js";
import { setCurrentHref } from "../utils/href.js";
import { createProductPage } from "./createProductPage.js";

export const initProduct = () => {
  const productId = getProductId();

  const dataProduct = getProductById(productId);
  console.log("current product: ", dataProduct);
  createProductPage(dataProduct);
};
