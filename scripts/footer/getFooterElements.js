const getFooter = () => {
  const footer = document.querySelector("footer");
  return footer;
};

export const getFooterLinksList = () => {
  const footer = getFooter();
  const linksList = [...footer.querySelectorAll(".nav__pages__link")];
  return linksList;
};

export const getFooterMentionsLegales = () => {
  const element = document.querySelector(".footer__banner__bottom a");
  return element;
};

export const getFooterMentionsLegalesModale = () => {
  const modale = document.querySelector(".footer__mentionsLegales__modale");
  return modale;
};

export const getFooterMentionsLegalesModaleWrapper = () => {
  const wrapper = document.querySelector(
    ".footer__mentionsLegales__modale__wrapper"
  );
  return wrapper;
};
