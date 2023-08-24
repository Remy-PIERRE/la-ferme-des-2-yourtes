import {
  getSideNavCategories,
  getSideNavSelectedFiltersElements,
} from "./getSideNavElements.js";

export const getSideNavSelectedFilters = () => {
  const filters = [];

  const categories = getSideNavCategories();
  for (const category of categories) {
    const selectedFilters = getSideNavSelectedFiltersElements(category);
    console.log("selected filters", selectedFilters);
    filters.push(...selectedFilters);
  }

  return filters;
};
