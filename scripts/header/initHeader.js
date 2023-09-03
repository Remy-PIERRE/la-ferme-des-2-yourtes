import { initHeaderMenuMobile } from "./initMenuMobile.js";
import { getCurrentPage } from "../page/getCurrentPage.js";
import { getHeaderLinksList } from "./getHeaderElements.js";
import { setLinkActive, setLinkHref } from "./setHeaderElements.js";
import { hasClass } from "../utils/hasClass.js";
import { handleHeaderEvents } from "./handleHeaderEvents.js";

export const initHeader = () => {
  const currentPage = getCurrentPage();
  const linksList = getHeaderLinksList();

  for (const link of linksList) {
    if (hasClass(link, currentPage)) {
      setLinkActive(link);
    }
    if (!hasClass(link, currentPage)) {
      setLinkHref(link);
    }
  }

  initHeaderMenuMobile();
  handleHeaderEvents();
};
