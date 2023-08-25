import {
  getSideNavCategoryWrapper,
  getSideNavCategoryTitle,
  getSideNavCategoryOptionLabel,
  getSideNavCategoryOptionInput,
} from "./getSideNavElements.js";

export const setSideNavCategoryWrapper = (template, id) => {
  const wrapper = getSideNavCategoryWrapper(template);
  wrapper.id = id;
};

export const setSideNavCategoryTitle = (template, text) => {
  const title = getSideNavCategoryTitle(template);
  title.innerHTML = `${text}`;
};

// export const setSideNavCategoryOptionWrapper = (template, value) => {
//   const wrapper = getSideNavCategoryOptionWrapper(template);
//   wrapper.dataset.value = value;
// };

export const setSideNavCategoryOptionInput = (template, value) => {
  const input = getSideNavCategoryOptionInput(template);
  input.value = value;
};

export const setSideNavCategoryOptionLabel = (template, text) => {
  const label = getSideNavCategoryOptionLabel(template);
  label.innerHTML = `${text}`;
};
