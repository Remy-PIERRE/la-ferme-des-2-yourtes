import { deleteAllChildsButNotTemplate } from "../../utils/deleteElements.js";
import { getStoreGalleryContainer } from "./getStoreGalleryElements.js";

export const resetStoreGalleryContainer = () => {
  const container = getStoreGalleryContainer();
  deleteAllChildsButNotTemplate(container);
};
