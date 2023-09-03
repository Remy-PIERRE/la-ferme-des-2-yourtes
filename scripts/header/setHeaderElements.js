import { getElementAnchor } from "../utils/getElements.js";
import { hasClass } from "../utils/hasClass.js";
import { addActiveClass } from "../utils/toggleClasses.js";

export const setLinkActive = (link) => {
  addActiveClass(link);
  link.href = "";
};

export const setLinkHref = (link) => {
  const anchor = getElementAnchor(link);
  const pathname = window.location.pathname
    .replace("boutique.html", "")
    .replace("a-propos.html", "")
    .replace("produit.html", "");

  if (hasClass(link, "home")) {
    anchor.href = `${pathname}`;
  }
  if (hasClass(link, "store")) {
    anchor.href = `${pathname}boutique.html`;
  }
  if (hasClass(link, "about")) {
    anchor.href = `${pathname}a-propos.html`;
  }
};
