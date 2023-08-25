import { initCarrousel } from "./carrousel/initCarrousel.js";
import { initHomeGallery } from "./gallery/initHomeGallery.js";

export const initHome = () => {
  initCarrousel();
  initHomeGallery();
};
