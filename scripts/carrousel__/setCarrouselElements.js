import {
  getCarrouselSectionWrapper,
  getCarrouselSectionImage,
  getCarrouselSectionTitle,
  getCarrouselSectionDescription,
  getCarrouselSectionCta,
} from "./getCarrouselElements.js";

export const setCarrouselSectionWrapper = (template, id, index) => {
  const wrapper = getCarrouselSectionWrapper(template);
  wrapper.id = id;
  wrapper.dataset.index = index;
  wrapper.style.order = index + 1;
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

export const setCarouselSectionDescription = (template, text) => {
  const description = getCarrouselSectionDescription(template);
  description.innerHTML = `${text}`;
};

export const setCarrouselSectionCta = (template, config) => {
  const { text, path } = config;

  const button = getCarrouselSectionCta(template);
  button.innerHTML = `${text}`;
  button.dataset.path = path;
};
