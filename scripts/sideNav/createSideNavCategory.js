import {
  getSideNavCategoryContainerDesk,
  getSideNavCategoryContainerMobile,
  getSideNavCategoryTemplateDesk,
  getSideNavCategoryTemplateMobile,
} from "./getSideNavElements.js";
import {
  setSideNavCategoryTitle,
  setSideNavCategoryWrapper,
} from "./setSideNavElements.js";
import {
  createSideNavCategoryOptionDesk,
  createSideNavCategoryOptionMobile,
} from "./createSideNavCategoryOption.js";
import { insertElement } from "../utils__/insertElements.js";
import { handleSideNavCategoryEvents } from "./handleSideNavCategoryEvents.js";

export const createSideNavCategory = (config) => {
  createSideNavCategoryDesk(config);
  createSideNavCategoryMobile(config);
};

const createSideNavCategoryMobile = (config) => {
  const { id, title, content, initialValue } = config;

  const container = getSideNavCategoryContainerMobile();
  const template = getSideNavCategoryTemplateMobile();

  setSideNavCategoryWrapper(template, id, initialValue);
  setSideNavCategoryTitle(template, title);

  for (const option of content) {
    createSideNavCategoryOptionMobile(template, option);
  }

  handleSideNavCategoryEvents(template);
  insertElement(container, template);
};

const createSideNavCategoryDesk = (config) => {
  const { id, title, content, initialValue } = config;

  const container = getSideNavCategoryContainerDesk();
  const template = getSideNavCategoryTemplateDesk();

  setSideNavCategoryWrapper(template, id, initialValue);
  setSideNavCategoryTitle(template, title);

  for (const option of content) {
    createSideNavCategoryOptionDesk(template, option);
  }

  insertElement(container, template);
};
