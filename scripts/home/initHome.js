import { initCarrousel } from "./carrousel/initCarrousel.js";
import { handleHomeGalleryEvents } from "./gallery/handleHomeGalleryEvents.js";
import { initHomeGallery } from "./gallery/initHomeGallery.js";

export const initHome = () => {
  initCarrousel();
  initHomeGallery();

  handleHomeGalleryEvents();
};
