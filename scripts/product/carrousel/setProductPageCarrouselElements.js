import { getProductPageCarrouselImage } from "./getProductPageCarrouselElements.js";

export const setProductPageCarrouselImage = (template, src) => {
  const image = getProductPageCarrouselImage(template);
  image.src = `public/images/${src}`;
};
