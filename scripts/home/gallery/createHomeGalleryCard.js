import {
  getHomeGalleryContainer,
  getHomeGalleryCardTemplate,
} from "./getHomeGalleryElements.js";
import {
  setHomeGalleryCardWrapper,
  setHomeGalleryCardImage,
  setHomeGalleryCardTitle,
  setHomeGalleryCardDescription,
} from "./setHomeGalleryElements.js";
import { insertElement } from "../../utils/insertElements.js";

export const createHomeGalleryCard = (data) => {
  const { id, title, descriptionShort, cover } = data;

  const container = getHomeGalleryContainer();
  const template = getHomeGalleryCardTemplate();

  setHomeGalleryCardWrapper(template, id);
  setHomeGalleryCardImage(template, cover, title);
  setHomeGalleryCardTitle(template, title);
  setHomeGalleryCardDescription(template, descriptionShort);

  insertElement(container, template);
};
