import {
  getCarrouselContainer,
  getCarrouselContainerSections,
  getCarrouselSectionCta,
  getCarrouselSectionDescription,
  getCarrouselSectionImage,
  getCarrouselSectionTitle,
  getCarrouselSectionWrapper,
} from "./getCarrouselElements.js";
import {
  addHiddenClass,
  removeHiddenClass,
} from "../utils__/handleHtmlClasses.js";
import {
  handleCarrouselPrevAnimationEnd,
  handleCarrouselNextAnimationEnd,
} from "./handleCarrouselAnimations.js";

export const setCarrouselContainer = (index) => {
  const container = getCarrouselContainer();
  container.dataset.currentIndex = index || 0;
};

export const setCarrouselSectionWrapper = (template, id, index) => {
  const wrapper = getCarrouselSectionWrapper(template);
  wrapper.id = id;
  wrapper.dataset.index = index;
};

export const setCarrouselSectionImage = (template, src, alt) => {
  const image = getCarrouselSectionImage(template);
  image.src = src;
  image.alt = alt;
};

export const setCarrouselSectionTitle = (template, text) => {
  const title = getCarrouselSectionTitle(template);
  title.innerHTML = `${text}`;
};

export const setCarrouselSectionDescription = (template, text) => {
  const description = getCarrouselSectionDescription(template);
  description.innerHTML = `${text}`;
};

export const setCarrouselSectionCta = (template, config) => {
  const { text, path } = config;

  const button = getCarrouselSectionCta(template);
  button.innerHTML = `${text}`;
  button.dataset.path = path;
};

export const resetCarrouselContainerAnimation = () => {
  const container = getCarrouselContainer();
  container.style.animation = "";
};

export const resetCarrouselContainerListeners = () => {
  const container = getCarrouselContainer();
  container.removeEventListener(
    "animationend",
    handleCarrouselPrevAnimationEnd
  );
  container.removeEventListener(
    "animationend",
    handleCarrouselNextAnimationEnd
  );
};

export const resetCarrouselSections = () => {
  const sectionsList = getCarrouselContainerSections();
  for (const section of sectionsList) {
    addHiddenClass(section);
    section.style.order = "none";
  }
};

export const setCarrouselSection = (index, order) => {
  const sectionsList = getCarrouselContainerSections();
  const section = sectionsList.find(
    (section) => +section.dataset.index === +index
  );

  removeHiddenClass(section);
  section.style.order = order;
};
