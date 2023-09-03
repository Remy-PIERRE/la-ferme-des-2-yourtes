import {
  getCarrouselContainer,
  getCarrouselSectionTemplate,
} from "./getCarrouselElements.js";
import {
  setCarrouselSectionBackground,
  setCarrouselSectionCta,
  setCarrouselSectionDescription,
  setCarrouselSectionImage,
  setCarrouselSectionTitle,
  setCarrouselSectionWrapper,
} from "./setCarrouselElements.js";
import { insertElement } from "../../utils/insertElements.js";
import { isAlreadyCreatedElementById } from "../../utils/getElements.js";
import { deleteElementById } from "../../utils/deleteElements.js";

export const createCarrouselSection = (data, index) => {
  const { id, title, description, cta, imageUrl, bgColor } = data;

  if (isAlreadyCreatedElementById(id)) {
    deleteElementById(id);
  }

  const container = getCarrouselContainer();
  const template = getCarrouselSectionTemplate();

  setCarrouselSectionWrapper(template, id, index);
  setCarrouselSectionImage(template, imageUrl, title);
  setCarrouselSectionBackground(template, bgColor);
  setCarrouselSectionTitle(template, title);
  setCarrouselSectionDescription(template, description);
  setCarrouselSectionCta(template, cta);

  insertElement(container, template);
};
