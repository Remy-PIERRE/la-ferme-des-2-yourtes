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
  const { id, title, descriptionShort, cover, url } = data;

  const container = getHomeGalleryContainer();
  const template = getHomeGalleryCardTemplate();

  setHomeGalleryCardWrapper(template, id, url);
  setHomeGalleryCardImage(template, cover, title);
  setHomeGalleryCardTitle(template, title);
  setHomeGalleryCardDescription(template, descriptionShort);

  insertElement(container, template);
};
