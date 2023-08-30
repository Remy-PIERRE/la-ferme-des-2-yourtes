import { getDataCategory } from "../data/dataInstance.js";
import { getProductById } from "../products/filterProducts.js";

export const getCurrentProduct = () => {
  const dataProducts = getDataCategory("products");
  const id = window.sessionStorage.getItem("currentProduct");

  const currentProduct = getProductById(dataProducts, id);
  return currentProduct;
};
