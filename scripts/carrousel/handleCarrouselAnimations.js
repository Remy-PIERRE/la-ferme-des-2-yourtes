import { getCarrouselContainer } from "./getCarrouselElements.js";
import {
  getCarrouselNextIndex,
  getCarrouselPrevIndex,
} from "./getCarrouselInfo.js";
import { setCarrouselContainer } from "./setCarrousel.js";
import { displayCarrouselCurrentSections } from "./displayCarrouselSections.js";

/* SETTINGS */
const prevAnimation = "carrousel__prev 0.5s 1";
const nextAnimation = "carrousel__next 0.5s 1";

export const handleCarrouselPrevAnimation = () => {
  const container = getCarrouselContainer();
  container.style.animation = prevAnimation;

  container.addEventListener("animationend", handleCarrouselPrevAnimationEnd);
};

export const handleCarrouselNextAnimation = (event) => {
  const container = getCarrouselContainer();
  container.style.animation = nextAnimation;

  container.addEventListener("animationend", handleCarrouselNextAnimationEnd);
};

export const handleCarrouselPrevAnimationEnd = () => {
  const prevIndex = getCarrouselPrevIndex();

  setCarrouselContainer(prevIndex);
  displayCarrouselCurrentSections();
};

export const handleCarrouselNextAnimationEnd = () => {
  const nextIndex = getCarrouselNextIndex();

  setCarrouselContainer(nextIndex);
  displayCarrouselCurrentSections();
};
