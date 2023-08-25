import {
  getSideNavCategoryList__title,
  getSideNavCategoryList__wrapper,
  getSideNavCategoryWrapper,
} from "./getSideNavElements.js";
import { toggleOpenClass } from "../utils__/handleHtmlClasses.js";

export const handleSideNavCategoryEvents = (template) => {
  const wrapper = getSideNavCategoryWrapper(template);
  wrapper.addEventListener("click", handleSideNavCategoryWrapperClick);
};

const handleSideNavCategoryWrapperClick = (event) => {
  let list;
  if (event.target.tagName === "DIV") {
    list = getSideNavCategoryList__wrapper(event.target);
  }
  if (event.target.tagName === "H3") {
    list = getSideNavCategoryList__title(event.target);
  }

  if (list) {
    toggleOpenClass(list);
  }
};
