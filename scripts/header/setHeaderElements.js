import { getElementAnchor } from "../utils/getElements.js";
import { hasClass } from "../utils/hasClass.js";
import { addActiveClass } from "../utils/toggleClasses.js";

export const setLinkActive = (link) => {
  addActiveClass(link);
  link.href = "";
};

export const setLinkHref = (link) => {
  const anchor = getElementAnchor(link);

  if (hasClass(link, "home")) {
    anchor.href = "/";
  }
  if (hasClass(link, "store")) {
    anchor.href = "/boutique.html";
  }
  if (hasClass(link, "about")) {
    anchor.href = "/a-propos.html";
  }
};
