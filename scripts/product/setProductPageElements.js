import { insertElement } from "../utils/insertElements.js";
import {
  getProductPageCarrouselImagesContainer,
  getProductPageCarrouselMiniSections,
  getProductPageCarrouselSection,
  getProductPageDescriptionShort,
  getProductPageTitle,
} from "./getProductPageElements.js";

export const setProductPageTitle = (template, text) => {
  const title = getProductPageTitle(template);
  title.innerHTML = `${text}`;
};

export const setProductPageDescriptionShort = (template, text) => {
  const description = getProductPageDescriptionShort(template);
  description.innerHTML = `${text}`;
};

export const setProductPageCarrousel = (template, [...images]) => {
  const imagesContainer = getProductPageCarrouselImagesContainer(template);
  for (const image of images) {
    const element = createAndSetProductPageCarrouselImage(image);
    insertElement(imagesContainer, element);
  }

  const miniContainer = getProductPageCarrouselMiniSections(template);
};

const createAndSetProductPageCarrouselImage = (src) => {
  const element = document.createElement("img");
  element.src = src;
  return element;
};
