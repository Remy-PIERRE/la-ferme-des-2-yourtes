import { insertElement } from "../utils__/insertElements.js";
import {
  getCarrouselContainer,
  getCarrouselSectionTemplate,
} from "./getCarrouselElements.js";
import {
  setCarrouselSectionWrapper,
  setCarrouselSectionImage,
  setCarrouselSectionTitle,
  setCarrouselSectionDescription,
  setCarrouselSectionCta,
} from "./setCarrousel.js";

export const createCarrouselSection = (data, index) => {
  const { id, title, description, cta, imageUrl } = data;

  const container = getCarrouselContainer();
  const template = getCarrouselSectionTemplate();

  setCarrouselSectionWrapper(template, id, index);
  setCarrouselSectionImage(template, imageUrl, title);
  setCarrouselSectionTitle(template, title);
  setCarrouselSectionDescription(template, description);
  setCarrouselSectionCta(template, cta);

  insertElement(container, template);
};
