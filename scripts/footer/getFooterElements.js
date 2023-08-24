const getFooter = () => {
  const footer = document.querySelector("footer");
  return footer;
};

export const getFooterLinksList = () => {
  const footer = getFooter();
  const linksList = [...footer.querySelectorAll(".nav__pages__link")];
  return linksList;
};
