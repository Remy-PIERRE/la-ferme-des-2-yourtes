import {
  createSideNavCategoryOptionTag,
  deleteSideNavCategoryOptionTag,
} from "./createAndDeleteSideNavCategoryOptionTag.js";
import {
  getSideNavCategoryOptionInput__label,
  getSideNavCategoryOptionInput__wrapper,
  getSideNavCategoryOptionLabel__input,
  getSideNavCategoryOptionWrapper,
} from "./getSideNavElements.js";

export const handleSideNavCategoryOptionEvents = (template) => {
  const wrapper = getSideNavCategoryOptionWrapper(template);
  wrapper.addEventListener("click", handleSideNavCategoryOptionWrapperClick);
};

const handleSideNavCategoryOptionWrapperClick = (event) => {
  let input;
  if (event.target.tagName === "LABEL") {
    input = getSideNavCategoryOptionInput__label(event.target);
  }
  if (event.target.tagName === "DIV") {
    input = getSideNavCategoryOptionInput__wrapper(event.target);
  }

  if (input) {
    input.checked = !input.checked;

    const label = getSideNavCategoryOptionLabel__input(input);

    const value = input.value;
    const text = label.innerHTML;

    if (input.checked) {
      createSideNavCategoryOptionTag(value, text);
    }
    if (!input.checked) {
      deleteSideNavCategoryOptionTag(value, text);
    }
  }
};
