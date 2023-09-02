import { createProductPageCarrouselImage } from "./createProductPageCarrouselImage.js";
import { createProductPageCarrouselMiniImage } from "./createProductPageCarrouselMiniImage.js";

export const createProductPageCarrousel = (template, images) => {
  let index = 0;
  for (const image of images) {
    createProductPageCarrouselImage(template, image);
    createProductPageCarrouselMiniImage(template, image, index);
    index++;
  }
};
