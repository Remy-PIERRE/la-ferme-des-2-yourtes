export const getHeader = () => {
  const header = document.querySelector("header");
  return header;
};

export const getHeaderLinksList = () => {
  const header = document.querySelector("header");
  const linksList = [...header.querySelectorAll(".nav__pages__link")];
  return linksList;
};

export const getHeaderMenuMobile = () => {
  const menu = document.querySelector(".menu__mobile");
  return menu;
};

export const getHeaderMenuMobileButton = () => {
  const header = getHeader();
  const button = header.querySelector(".header__menu__button");
  return button;
};

export const getHeaderMenuMobileCross = () => {
  const menu = getHeaderMenuMobile();
  const cross = menu.querySelector(".menu__mobile__cross");
  return cross;
};
