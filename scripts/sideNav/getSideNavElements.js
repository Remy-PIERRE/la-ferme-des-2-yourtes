export const getSideNavCategoryContainerDesk = () => {
  const container = document.querySelector(
    ".store__sideNav__wrapper__desk .store__sideNav__container"
  );
  return container;
};

export const getSideNavCategoryTemplateDesk = () => {
  const template = document
    .querySelector(".store__sideNav__wrapper__desk #sideNavCategoryTemplate")
    .content.cloneNode(true);
  return template;
};

export const getSideNavCategoryContainerMobile = () => {
  const container = document.querySelector(
    ".store__sideNav__wrapper__mobile .store__sideNav__container"
  );
  return container;
};

export const getSideNavCategoryTemplateMobile = () => {
  const template = document
    .querySelector(".store__sideNav__wrapper__mobile #sideNavCategoryTemplate")
    .content.cloneNode(true);
  return template;
};

export const getSideNavCategoryWrapper = (template) => {
  const wrapper = template.querySelector(".sideNav__category__wrapper");
  return wrapper;
};

export const getSideNavCategoriesWrappers = () => {
  const list = document.querySelectorAll(".sideNav__category__wrapper");
  return list;
};

export const getSideNavCategoryTitle = (template) => {
  const title = template.querySelector(".sideNav__category__title h3");
  return title;
};

export const getSideNavCategoryList = (template) => {
  const list = template.querySelector(".sideNav__category__list");
  return list;
};

export const getSideNavCategoryOptionTemplateMobile = () => {
  const template = document
    .querySelector(
      ".store__sideNav__wrapper__mobile #sideNavCategoryOptionTemplate"
    )
    .content.cloneNode(true);
  return template;
};

export const getSideNavCategoryOptionWrapper = (template) => {
  const wrapper = template.querySelector(".sideNav__category__option__wrapper");
  return wrapper;
};

export const getSideNavCategoryOptionInput = (template) => {
  const input = template.querySelector("input");
  return input;
};

export const getSideNavCategoryOptionLabel = (template) => {
  const label = template.querySelector("label");
  return label;
};

export const getSideNavCategoryList__wrapper = (wrapper) => {
  const list = wrapper.parentElement.querySelector(".sideNav__category__list");
  return list;
};

export const getSideNavCategoryList__title = (title) => {
  const list = title.parentElement.parentElement.querySelector(
    ".sideNav__category__list"
  );
  return list;
};

export const getSideNavCategoryOptionInput__wrapper = (wrapper) => {
  const input = wrapper.querySelector("input");
  return input;
};

export const getSideNavCategoryOptionInput__label = (label) => {
  const input = label.previousElementSibling;
  return input;
};

export const getSideNavCategoryOptionLabel__input = (input) => {
  const label = input.nextElementSibling;
  return label;
};

export const getSideNavCategories = () => {
  const elements = [
    ...document.querySelectorAll(".sideNav__category__wrapper"),
  ];
  const categories = [...new Set(elements.map((element) => element.id))];
  return categories;
};

export const getSideNavSelectedFiltersElements = (category) => {
  const filtersElements = [...document.querySelectorAll(`#${category}  input`)];
  console.log("filters elements", filtersElements);
  const selectedFiltersElements = filtersElements.filter(
    (element) => element.checked
  );
  const selectedFilters = selectedFiltersElements.map(
    (element) => element.value
  );
  return selectedFilters;
};
