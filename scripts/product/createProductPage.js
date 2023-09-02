import { insertElement } from "../utils/insertElements.js";
import { createProductPageCarrousel } from "./carrousel/createProductPageCarrousel.js";
import { handleProductPageCarrouselEvents } from "./carrousel/handleProductPageCarrousselEvents.js";
import {
  getProductPageContainer,
  getProductPageTemplate,
} from "./getProductPageElements.js";
import {
  setProductPageDescriptionLong,
  setProductPageDescriptionShort,
  setProductPageTitle,
} from "./setProductPageElements.js";

export const createProductPage = (data) => {
  const {
    title,
    descriptionShort,
    cover,
    images,
    categories,
    descriptionLong,
  } = data;

  const container = getProductPageContainer();
  const template = getProductPageTemplate();

  setProductPageTitle(template, title);
  setProductPageDescriptionShort(template, descriptionShort);
  setProductPageDescriptionLong(template, descriptionLong);

  createProductPageCarrousel(template, [cover, ...images]);

  insertElement(container, template);

  handleProductPageCarrouselEvents();
};
