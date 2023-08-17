import { getDataCategory } from "../data/dataInstance.js";
import { createGalleryCard } from "./createGalleryCard.js";

export const initGallery = (config) => {
  const { data: configData } = config;

  const dataGallery = getDataCategory(configData);
  for (const data of dataGallery) {
    createGalleryCard(data);
  }
};
