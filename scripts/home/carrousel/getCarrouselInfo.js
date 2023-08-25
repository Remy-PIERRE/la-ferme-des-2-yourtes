import {
  getCarrouselContainer,
  getCarrouselContainerSections,
} from "./getCarrouselElements.js";

export const getCarrouselCurrentIndex = () => {
  const container = getCarrouselContainer();
  const index = container.dataset.currentIndex;
  return index;
};

export const getCarrouselMaxIndex = () => {
  const sectionsList = getCarrouselContainerSections();
  const max = sectionsList.length - 1;
  return max;
};

export const getCarrouselPrevIndex = () => {
  const currentIndex = getCarrouselCurrentIndex();
  const maxIndex = getCarrouselMaxIndex();

  const index = +currentIndex === 0 ? maxIndex : +currentIndex - 1;
  return index;
};

export const getCarrouselNextIndex = () => {
  const currentIndex = getCarrouselCurrentIndex();
  const maxIndex = getCarrouselMaxIndex();

  const index = +currentIndex === +maxIndex ? 0 : +currentIndex + 1;
  return index;
};
