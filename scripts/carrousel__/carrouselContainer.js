import {
  getCarrouselContainer,
  getCarrouselContainerSections,
} from "./getCarrouselElements.js";

/* GLOBALS */
const containerPrevAnimation = "carrousel__prev 0.4s 1";
const containerNextAnimation = "carrousel__next 0.4s 1";

export const setContainerPrevIndex = () => {
  const prevIndex = getCarrouselContainerPrevIndex();
  setCarrouselContainerIndex(prevIndex);
};

export const setContainerNextIndex = () => {
  const nextIndex = getCarrouselContainerNextIndex();
  setCarrouselContainerIndex(nextIndex);
};

const getCarrouselContainerPrevIndex = () => {
  const currentIndex = getCarrouselContainerCurrentIndex();
  const maxIndex = getCarrouselContainerMaxIndex();

  const index = currentIndex === 0 ? maxIndex : +currentIndex - 1;
  return index;
};

const getCarrouselContainerNextIndex = () => {
  const currentIndex = getCarrouselContainerCurrentIndex();
  const maxIndex = getCarrouselContainerMaxIndex();

  const index = currentIndex === maxIndex ? 0 : +currentIndex + 1;
  return index;
};

const getCarrouselContainerCurrentIndex = () => {
  const container = getCarrouselContainer();
  const index = container.dataset.index;
  return index;
};

const getCarrouselContainerMaxIndex = () => {
  const sections = getCarrouselContainerSections();
  const index = sections.length - 1;
  return index;
};

const setCarrouselContainerIndex = (index) => {
  const container = getCarrouselContainer();
  container.dataset.index = index;
};

export const handleCarrouselContainerPrevAnimation = () => {
  const container = getCarrouselContainer();
  container.style.animation = containerPrevAnimation;

  container.addEventListener("animationend", resetCarrouselContainerSections);
};

export const handleCarrouselContainerNextAnimation = () => {
  const container = getCarrouselContainer();
  container.style.animation = containerNextAnimation;

  container.addEventListener("animationend", resetCarrouselContainerSections);
};

const resetCarrouselContainerSections = () => {
  const currentIndex = getCarrouselContainerCurrentIndex();
  const sectionsList = getCarrouselContainerSections();

  console.log("current index", currentIndex);

  for (let i = 0; i < sectionsList.length; i++) {
    const section = sectionsList[i];
    if (section.dataset.index === currentIndex) {
      section.style.order = 2;
    }
    if (section.dataset.index === currentIndex + 1) {
      section.style.order = 3;
    }
    if (section.dataset.index === currentIndex - 1) {
      section.style.order = 1;
    }
  }
};
