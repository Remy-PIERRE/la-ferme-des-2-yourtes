import { getDataCategory } from "../data/dataInstance.js";

export const filterHomePageProducts = (data) => {
  const filteredData = data.filter((product) => product.homePage);
  return filteredData;
};

export const getProductById = (id) => {
  const currentData = getDataCategory("products");
  const findedData = currentData.find((data) => +data.id === +id);
  return findedData;
};
