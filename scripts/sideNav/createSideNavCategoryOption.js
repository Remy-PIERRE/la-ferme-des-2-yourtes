import {
  getSideNavCategoryList,
  getSideNavCategoryOptionTemplateMobile,
} from "./getSideNavElements.js";
import {
  setSideNavCategoryOptionInput,
  setSideNavCategoryOptionLabel,
} from "./setSideNavElements.js";
import { insertElement } from "../utils__/insertElements.js";
import { handleSideNavCategoryOptionEvents } from "./handleSideNavCategoryOptionEvents.js";

export const createSideNavCategoryOptionMobile = (templateCategory, option) => {
  const { value, text } = option;

  const container = getSideNavCategoryList(templateCategory);
  const template = getSideNavCategoryOptionTemplateMobile();

  // setSideNavCategoryOptionWrapper(template, value);
  setSideNavCategoryOptionInput(template, value);
  setSideNavCategoryOptionLabel(template, text);

  handleSideNavCategoryOptionEvents(template);
  insertElement(container, template);
};

export const createSideNavCategoryOptionDesk = (template, option) => {};
