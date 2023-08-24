import { hasClass } from "./hasClass.js";

export const addActiveClass = (element) => {
  if (!hasClass(element, "active")) {
    element.classList.toggle("active");
  }
};

export const addOpenClass = (element) => {
  if (!hasClass(element, "open")) {
    element.classList.toggle("open");
  }
};

export const removedOpenClass = (element) => {
  if (hasClass(element, "open")) {
    element.classList.toggle("open");
  }
};
