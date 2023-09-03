import { getDataCategory } from "../../data/dataInstance.js";
import { createCarrouselSection } from "./createCarrouselSection.js";
import { setCarrouselContainer } from "./setCarrouselElements.js";
import { displayCarrouselCurrentSections } from "./displayCarrouselSections.js";
import { handleCarrouselEvents } from "./handleCarrouselEvents.js";
import { setWindowResizeCallback } from "../../window/windowResizeCallbacks.js";

export const initCarrousel = () => {
  setWindowResizeCallback("homeCarrousel", initCarrousel);

  const dataCarrousel = getDataCategory("carrousel");

  for (let index = 0; index < dataCarrousel.length; index++) {
    createCarrouselSection(dataCarrousel[index], index);
  }

  setCarrouselContainer();
  displayCarrouselCurrentSections();
  handleCarrouselEvents();
};
