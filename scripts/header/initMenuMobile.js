import {
  getHeaderMenuMobile,
  getHeaderMenuMobileButton,
  getHeaderMenuMobileCross,
} from "./getHeaderElements.js";
import { addOpenClass, removeOpenClass } from "../utils/toggleClasses.js";

export const initHeaderMenuMobile = () => {
  handleHeaderMenuMobileEvents();
};

const handleHeaderMenuMobileEvents = () => {
  const button = getHeaderMenuMobileButton();
  button.removeEventListener("click", handleMenuMobileButtonClick);
  button.addEventListener("click", handleMenuMobileButtonClick);

  const cross = getHeaderMenuMobileCross();
  cross.removeEventListener("click", handleHeaderMenuMobileCrossClick);
  cross.addEventListener("click", handleHeaderMenuMobileCrossClick);
};

const handleMenuMobileButtonClick = () => {
  const menu = getHeaderMenuMobile();
  addOpenClass(menu);
};

const handleHeaderMenuMobileCrossClick = () => {
  const menu = getHeaderMenuMobile();
  removeOpenClass(menu);
};
