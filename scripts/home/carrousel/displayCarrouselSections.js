import {
  getCarrouselCurrentIndex,
  getCarrouselNextIndex,
  getCarrouselPrevIndex,
} from "./getCarrouselInfo.js";
import {
  resetCarrouselContainerAnimation,
  resetCarrouselSections,
  setCarrouselSection,
} from "./setCarrouselElements.js";
import { resetCarrouselContainerListeners } from "./handleCarrouselEvents.js";

export const displayCarrouselCurrentSections = () => {
  resetCarrouselContainerAnimation();
  resetCarrouselContainerListeners();
  resetCarrouselSections();

  const prevIndex = getCarrouselPrevIndex();
  const prevOrder = 1;
  setCarrouselSection(prevIndex, prevOrder);

  const currentIndex = getCarrouselCurrentIndex();
  const currentOrder = 2;
  setCarrouselSection(currentIndex, currentOrder);

  const nextIndex = getCarrouselNextIndex();
  const nextOrder = 3;
  setCarrouselSection(nextIndex, nextOrder);
};
