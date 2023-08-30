import { getProductId } from "../data/dataStorage.js";
import { getProductById } from "../products/filterProducts.js";
import { setCurrentHref } from "../utils/href.js";
import { createProductPage } from "./createProductPage.js";

export const initProduct = () => {
  const productId = getProductId();

  /* TODO - find solution for reloading page with modified url */
  // setCurrentHref(productId);

  const dataProduct = getProductById(productId);
  console.log("current product: ", dataProduct);
  createProductPage(dataProduct);
};
