import { getDataCategory } from "../../data/dataInstance.js";
import { getStoreFiltersSubCategoriesInputsListByCategoryId } from "./getStoreFiltersElements.js";

export const getStoreSelectedFilters = () => {
  const dataCategories = getDataCategory("productsCategories");

  const selectedFilters = {};

  for (const category of dataCategories) {
    const { id } = category;
    selectedFilters[id] = [];

    const subCategoriesInputsList =
      getStoreFiltersSubCategoriesInputsListByCategoryId(id);
    const subCategorySelectedFilters = subCategoriesInputsList.filter(
      (input) => input.checked
    );

    if (subCategorySelectedFilters.length !== 0) {
      for (const input of subCategorySelectedFilters) {
        selectedFilters[id].push(input.value);
      }
    }
  }

  return selectedFilters;
};
