import { insertElement } from "../../utils/insertElements.js";
import {
  getProductPageCarrouselImageContainer,
  getProductPageCarrouselImageTemplate,
} from "./getProductPageCarrouselElements.js";
import { setProductPageCarrouselImage } from "./setProductPageCarrouselElements.js";

export const createProductPageCarrouselImage = (pageTemplate, image) => {
  const container = getProductPageCarrouselImageContainer(pageTemplate);
  const template = getProductPageCarrouselImageTemplate(pageTemplate);

  setProductPageCarrouselImage(template, image);

  insertElement(container, template);
};
