import {
  getStoreFiltersCategoryTitle,
  getStoreFiltersCategoryWrapper,
  getStoreFiltersSubCategoryInput,
  getStoreFiltersSubCategoryLabel,
} from "./getStoreFiltersElements.js";

export const setStoreFiltersCategoryWrapper = (template, id) => {
  const wrapper = getStoreFiltersCategoryWrapper(template);
  wrapper.id = id;
};

export const setStoreFiltersCategoryTitle = (template, text) => {
  const title = getStoreFiltersCategoryTitle(template);
  title.innerHTML = `${text}`;
};

export const setStoreFiltersSubCategoryInput = (template, value) => {
  const input = getStoreFiltersSubCategoryInput(template);
  input.value = value;
};

export const setStoreFiltersSubCategoryLabel = (template, text) => {
  const label = getStoreFiltersSubCategoryLabel(template);
  label.innerHTML = `${text}`;
};
