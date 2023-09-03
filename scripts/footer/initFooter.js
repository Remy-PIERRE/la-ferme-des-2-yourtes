import { getCurrentPage } from "../page/getCurrentPage.js";
import { getFooterLinksList } from "./getFooterElements.js";
import { setLinkActive, setLinkHref } from "../header/setHeaderElements.js";
import { hasClass } from "../utils/hasClass.js";
import { handleFooterEvents } from "./handleFooterEvents.js";

export const initFooter = () => {
  const currentPage = getCurrentPage();
  const linksList = getFooterLinksList();

  for (const link of linksList) {
    if (hasClass(link, currentPage)) {
      setLinkActive(link);
    }
    if (!hasClass(link, currentPage)) {
      setLinkHref(link);
    }
  }

  handleFooterEvents();
};
