import { getStoreFiltersSubCategoryTemplate } from "./getStoreFiltersElements.js";
import {
  setStoreFiltersSubCategoryInput,
  setStoreFiltersSubCategoryLabel,
} from "./setStoreFiltersElements.js";
import { insertElement } from "../../utils/insertElements.js";

export const createStoreFiltersSubCategory = (container, data) => {
  const { value, text } = data;

  const template = getStoreFiltersSubCategoryTemplate();

  setStoreFiltersSubCategoryInput(template, value);
  setStoreFiltersSubCategoryLabel(template, text);

  insertElement(container, template);
};
