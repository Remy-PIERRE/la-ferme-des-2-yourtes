import { getWindowMedia } from "../../window/windowMedia.js";
import {
  getStoreFiltersCategoryList,
  getStoreFiltersContainerDesk,
  getStoreFiltersContainerMobile,
  getStoreFiltersTemplate,
} from "./getStoreFiltersElements.js";
import {
  setStoreFiltersCategoryTitle,
  setStoreFiltersCategoryWrapper,
} from "./setStoreFiltersElements.js";
import { createStoreFiltersSubCategory } from "./createStoreFiltersSubCategory.js";
import { insertElement } from "../../utils/insertElements.js";
import { isAlreadyCreatedElementById } from "../../utils/getElements.js";
import { deleteElementById } from "../../utils/deleteElements.js";

export const createStoreFiltersCategory = (data) => {
  const { id, title, content } = data;

  if (isAlreadyCreatedElementById(id)) {
    deleteElementById(id);
  }

  let container;
  if (getWindowMedia() === "mobile") {
    container = getStoreFiltersContainerMobile();
  }
  if (getWindowMedia() === "desk") {
    container = getStoreFiltersContainerDesk();
  }

  const template = getStoreFiltersTemplate();

  setStoreFiltersCategoryWrapper(template, id);
  setStoreFiltersCategoryTitle(template, title);

  for (const subCategory of content) {
    const list = getStoreFiltersCategoryList(template);
    createStoreFiltersSubCategory(list, subCategory);
  }

  insertElement(container, template);
};
