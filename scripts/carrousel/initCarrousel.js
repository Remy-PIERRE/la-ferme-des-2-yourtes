import { getDataCategory } from "../data/dataInstance.js";
import { createCarrouselSection } from "./createCarrouselSection.js";
import { getCarrouselContainer } from "./getCarrouselElements.js";
import { handleCarrouselEvents } from "./handleCarrouselEvents.js";

export const initCarrousel = (config) => {
  const { data: configData } = config;

  setCarrouselContainer();

  const dataCarrousel = getDataCategory(configData);

  for (let index = 0; index < dataCarrousel.length; index++) {
    createCarrouselSection(dataCarrousel[index], index);
  }

  handleCarrouselEvents();
};

const setCarrouselContainer = () => {
  const container = getCarrouselContainer();
  container.dataset.index = 1;
};
