import {
  getProductPageCarrouselImage,
  getProductPageCarrouselMiniImageImage,
  getProductPageCarrouselMiniWrapper,
} from "./getProductPageCarrouselElements.js";

export const setProductPageCarrouselImage = (template, src) => {
  const image = getProductPageCarrouselImage(template);
  image.src = `public/images/${src}`;
};

export const setProductPageCarrouselMiniImage = (template, src) => {
  const image = getProductPageCarrouselMiniImageImage(template);
  image.src = `public/images/${src}`;
};

export const setProductPageCarrouselMiniWraper = (template, index) => {
  const wrapper = getProductPageCarrouselMiniWrapper(template);
  wrapper.dataset.index = index;
};
