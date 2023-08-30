import { insertElement } from "../utils/insertElements.js";
import { createProductPageCarrousel } from "./carrousel/createProductPageCarrousel.js";
import {
  getProductPageContainer,
  getProductPageTemplate,
} from "./getProductPageElements.js";
import {
  setProductPageDescriptionShort,
  setProductPageTitle,
} from "./setProductPageElements.js";

export const createProductPage = (data) => {
  const { title, descriptionShort, cover, images, categories } = data;

  const container = getProductPageContainer();
  const template = getProductPageTemplate();

  setProductPageTitle(template, title);
  setProductPageDescriptionShort(template, descriptionShort);

  createProductPageCarrousel(template, [cover, ...images]);
  // setProductPageCarrousel(template, [cover, ...images]);

  insertElement(container, template);
};
