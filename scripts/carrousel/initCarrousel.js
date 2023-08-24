import { getDataCategory } from "../data__/dataInstance.js";
import { setCarrouselContainer } from "./setCarrousel.js";
import { createCarrouselSection } from "./createCarrouselSection.js";
import { displayCarrouselCurrentSections } from "./displayCarrouselSections.js";
import { handleCarrouselEvents } from "./handleCarrouselEvents.js";

export const initCarrousel = (config) => {
  const { data: configData } = config;

  const dataCarrousel = getDataCategory(configData);
  for (let index = 0; index < dataCarrousel.length; index++) {
    createCarrouselSection(dataCarrousel[index], index);
  }

  setCarrouselContainer();
  displayCarrouselCurrentSections();
  handleCarrouselEvents();
};
