import { hasClass } from "../../utils/hasClass.js";

export const getStoreFiltersContainerDesk = () => {
  const container = document.querySelector(
    ".store__sideNav__wrapper__desk .store__sideNav__container"
  );
  return container;
};

export const getStoreFiltersContainerMobile = () => {
  const container = document.querySelector(
    ".store__sideNav__wrapper__mobile .store__sideNav__container"
  );
  return container;
};

export const getStoreFiltersTemplate = () => {
  const template = document
    .querySelector("#sideNavCategoryTemplate")
    .content.cloneNode(true);
  return template;
};

export const getStoreFiltersCategoryWrapper = (template) => {
  const wrapper = template.querySelector(".sideNav__category__wrapper");
  return wrapper;
};

export const getStoreFiltersCategoryTitle = (template) => {
  const title = template.querySelector("h3");
  return title;
};

export const getStoreFiltersCategoryList = (template) => {
  const list = template.querySelector(".sideNav__category__list");
  return list;
};

export const getStoreFiltersSubCategoryTemplate = () => {
  const template = document
    .querySelector("#storeFilterListCheckboxTemplate")
    .content.cloneNode(true);
  return template;
};

export const getStoreFiltersSubCategoryInput = (template) => {
  const input = template.querySelector("input");
  return input;
};

export const getStoreFiltersSubCategoryLabel = (template) => {
  const label = template.querySelector("label");
  return label;
};

export const getStoreFiltersMenuButton = () => {
  const button = document.querySelector(".store__sideNav__menu__button");
  return button;
};

export const getStoreFiltersMenuCross = () => {
  const cross = document.querySelector(".store__sideNav__menu__cross");
  return cross;
};

export const getStoreFiltersCategoriesList = () => {
  const list = [...document.querySelectorAll(".sideNav__category__wrapper")];
  return list;
};

// export const getStoreFiltersSubCategoriesList = () => {
//   const list = document.querySelectorAll(".store__filterList__wrapper");
//   return list;
// };

export const getStoreFiltersMenu = () => {
  const menu = document.querySelector(".store__sideNav__wrapper__mobile");
  return menu;
};

export const getStoreFiltersCategoryWrapperByChild = (child) => {
  let currentElement = child;
  const maxCycles = 3;

  for (let index = 0; index < maxCycles; index++) {
    currentElement = currentElement.parentElement;

    if (hasClass(currentElement, "sideNav__category__wrapper")) {
      break;
    }
  }

  return currentElement;
};

export const getStoreFiltersCategoryListByWrapper = (wrapper) => {
  const list = wrapper.querySelector(".sideNav__category__list");
  return list;
};

export const getStoreFiltersSubCategoriesInputsListByCategoryId = (
  categoryId
) => {
  const category = document.querySelector(`#${categoryId}`);
  const list = [
    ...category.querySelectorAll(".store__filterList__wrapper input"),
  ];
  return list;
};

export const getStoreFiltersSubCategoriesInputsList = () => {
  const list = [
    ...document.querySelectorAll(".store__filterList__wrapper input"),
  ];
  return list;
};

export const getStoreFiltersSearchInputs = () => {
  const inputs = [...document.querySelectorAll(".store__searchInput input")];
  return inputs;
};

export const getStoreFiltersSearchCrosses = () => {
  const crosses = [...document.querySelectorAll(".store__searchInput img")];
  return crosses;
};

export const getStoreFiltersSearchInput = () => {
  const input = document.querySelector(".store__searchInput input");
  return input;
};

export const getStoreFiltersResetButtons = () => {
  const buttons = [...document.querySelectorAll(".store__filters__reset")];
  return buttons;
};
