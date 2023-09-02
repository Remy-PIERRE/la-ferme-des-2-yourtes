import { insertElement } from "../../utils/insertElements.js";
import {
  getProductPageCarrouselMiniImageTemplate,
  getProductPageCarrousselMiniContainer,
} from "./getProductPageCarrouselElements.js";
import {
  setProductPageCarrouselMiniImage,
  setProductPageCarrouselMiniWraper,
} from "./setProductPageCarrouselElements.js";

export const createProductPageCarrouselMiniImage = (
  pageTemplate,
  image,
  index
) => {
  const container = getProductPageCarrousselMiniContainer(pageTemplate);
  const template = getProductPageCarrouselMiniImageTemplate(pageTemplate);

  setProductPageCarrouselMiniWraper(template, index);
  setProductPageCarrouselMiniImage(template, image);

  insertElement(container, template);
};
