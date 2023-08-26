import { getWindowMedia } from "../../window/windowMedia.js";
import {
  getStoreFiltersMenu,
  getStoreFiltersMenuButton,
  getStoreFiltersMenuCross,
  getStoreFiltersCategoriesList,
  // getStoreFiltersSubCategoriesList,
  getStoreFiltersCategoryWrapperByChild,
  getStoreFiltersCategoryListByWrapper,
  getStoreFiltersSubCategoriesInputsList,
} from "./getStoreFiltersElements.js";
import {
  addOpenClass,
  removeOpenClass,
  toggleOpenClass,
} from "../../utils/toggleClasses.js";
import { hasClass } from "../../utils/hasClass.js";
import { isDirectChildByClass } from "../../utils/getElements.js";
import { initSearch } from "../search/initSearch.js";

export const handleStoreFiltersEvents = () => {
  if (getWindowMedia() === "mobile") {
    const button = getStoreFiltersMenuButton();
    button.addEventListener("click", handleStoreFilterMenuButtonClick);

    const cross = getStoreFiltersMenuCross();
    cross.addEventListener("click", handleStoreFiltersMenuCrossClick);

    const categoriesList = getStoreFiltersCategoriesList();
    for (const category of categoriesList) {
      category.addEventListener("click", handleStoreFiltersCategoryClick);
    }
  }

  // const subCategorieslist = getStoreFiltersSubCategoriesList();
  // for (const subCategory of subCategorieslist) {
  //   subCategory.addEventListener("click", handleStoreFiltersSubCategoryClick);
  // }

  const subCategoriesInputsList = getStoreFiltersSubCategoriesInputsList();
  for (const input of subCategoriesInputsList) {
    input.addEventListener("change", handleStoreFiltersSubCategoryInputChange);
  }
};

const handleStoreFilterMenuButtonClick = () => {
  const menu = getStoreFiltersMenu();
  addOpenClass(menu);
};

const handleStoreFiltersMenuCrossClick = () => {
  const menu = getStoreFiltersMenu();
  removeOpenClass(menu);
};

const handleStoreFiltersCategoryClick = (event) => {
  if (
    hasClass(event.target, "sideNav__category__title") ||
    isDirectChildByClass(event.target, "sideNav__category__title")
  ) {
    const wrapper = getStoreFiltersCategoryWrapperByChild(event.target);
    const list = getStoreFiltersCategoryListByWrapper(wrapper);
    toggleOpenClass(list);
  }
};

// const handleStoreFiltersSubCategoryClick = () => {};

const handleStoreFiltersSubCategoryInputChange = () => {
  initSearch();
};
