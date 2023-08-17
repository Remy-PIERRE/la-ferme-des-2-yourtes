import { configPages } from "./configPages.js";

export const getConfig = () => {
  const currentPage = getCurrentPage();

  const currentConfig = configPages[currentPage];
  return currentConfig;
};

const getCurrentPage = () => {
  /* TODO - get current page lol */

  const currentPage = "home";
  return currentPage;
};
