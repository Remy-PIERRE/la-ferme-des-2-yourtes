import { hasClass } from "./hasClass.js";

export const getElementAnchor = (element) => {
  const anchor = element.querySelector("a");
  return anchor;
};

export const isAlreadyCreatedElementById = (id) => {
  const answer = document.querySelector(`#${id}`) ? true : false;
  return answer;
};

export const isDirectChildByClass = (element, parentClassName) => {
  const parent = element.parentElement;
  const answer = hasClass(parent, parentClassName) ? true : false;
  return answer;
};
