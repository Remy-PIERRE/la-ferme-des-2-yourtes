import { createProductPageCarrouselImage } from "./createProductPageCarrouselImage.js";
import { createProductPageCarrouselMiniImage } from "./createProductPageCarrouselMiniImage.js";

export const createProductPageCarrousel = (template, images) => {
  for (const image of images) {
    createProductPageCarrouselImage(template, image);
    createProductPageCarrouselMiniImage(template, images);
  }
};
