import { getWindowMedia } from "../../window/windowMedia.js";
import {
  getStoreFiltersMenu,
  getStoreFiltersMenuButton,
  getStoreFiltersMenuCross,
  getStoreFiltersCategoriesList,
  getStoreFiltersCategoryWrapperByChild,
  getStoreFiltersCategoryListByWrapper,
  getStoreFiltersSubCategoriesInputsList,
  getStoreFiltersSearchInputs,
  getStoreFiltersSearchCrosses,
  getStoreFiltersResetButtons,
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

    const menuCross = getStoreFiltersMenuCross();
    menuCross.addEventListener("click", handleStoreFiltersMenuCrossClick);

    const categoriesList = getStoreFiltersCategoriesList();
    for (const category of categoriesList) {
      category.addEventListener("click", handleStoreFiltersCategoryClick);
    }
  }

  const subCategoriesInputsList = getStoreFiltersSubCategoriesInputsList();
  for (const input of subCategoriesInputsList) {
    input.addEventListener("change", handleStoreFiltersSubCategoryInputChange);
  }

  const searchInputs = getStoreFiltersSearchInputs();
  for (const input of searchInputs) {
    input.addEventListener("input", handleStoreFiltersSearchInputInput);
    input.addEventListener("keydown", handleStoreFiltersSearchInputKeyDown);
  }

  const searchCrosses = getStoreFiltersSearchCrosses();
  for (const searchCross of searchCrosses) {
    searchCross.addEventListener("click", handleStoreFiltersSearchCrossClick);
  }

  const resetButtons = getStoreFiltersResetButtons();
  for (const reset of resetButtons) {
    reset.addEventListener("click", handleStoreFiltersResetClick);
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

const handleStoreFiltersSubCategoryInputChange = () => {
  initSearch();
};

const handleStoreFiltersSearchInputInput = (event) => {
  const inputsList = getStoreFiltersSearchInputs();
  const value = event.target.value;

  for (const input of inputsList) {
    input.value = value;
  }
  initSearch();
};

const handleStoreFiltersSearchInputKeyDown = (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
};

const handleStoreFiltersSearchCrossClick = () => {
  const inputsList = getStoreFiltersSearchInputs();
  for (const input of inputsList) {
    input.value = "";
  }
  initSearch();
};

const handleStoreFiltersResetClick = () => {
  const searchInputs = getStoreFiltersSearchInputs();
  for (const input of searchInputs) {
    input.value = "";
  }

  const subCategoriesInputsList = getStoreFiltersSubCategoriesInputsList();
  for (const input of subCategoriesInputsList) {
    input.checked = false;
  }

  initSearch();
};
