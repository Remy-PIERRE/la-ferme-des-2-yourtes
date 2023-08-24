import { getDataCategory } from "../data__/dataInstance.js";
import { createSideNavCategory } from "./createSideNavCategory.js";

export const initSideNav = (config) => {
  const { categories: configCategories } = config;
  const categories = getDataCategory(configCategories);

  for (const category of categories) {
    createSideNavCategory(category);
  }
};
