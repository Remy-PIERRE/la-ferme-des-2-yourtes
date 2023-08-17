import { insertElement } from "../utils/insertElements.js";
import {
  getCarrouselContainer,
  getCarrouselSectionTemplate,
} from "./getCarrouselElements.js";
import {
  setCarrouselSectionWrapper,
  setCarrouselSectionImage,
  setCarrouselSectionTitle,
  setCarouselSectionDescription,
  setCarrouselSectionCta,
} from "./setCarrouselElements.js";

export const createCarrouselSection = (data, index) => {
  const { id, title, description, cta, imageUrl } = data;

  console.log("carrousel section data", data);

  const container = getCarrouselContainer();
  const template = getCarrouselSectionTemplate();

  setCarrouselSectionWrapper(template, id, index);
  setCarrouselSectionImage(template, imageUrl, title);
  setCarrouselSectionTitle(template, title);
  setCarouselSectionDescription(template, description);
  setCarrouselSectionCta(template, cta);

  insertElement(container, template);
};
