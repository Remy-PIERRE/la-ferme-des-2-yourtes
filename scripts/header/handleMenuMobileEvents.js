import {
  getMenuMobileButton,
  getMenuMobileContainer,
  getMenuMobileCross,
} from "./getHeaderElements.js";
import { addOpenClass, removeOpenClass } from "../utils/handleHtmlClasses.js";

export const handleMenuMobileEvents = () => {
  const button = getMenuMobileButton();
  button.addEventListener("click", handleMenuMobileButtonClick);

  const cross = getMenuMobileCross();
  cross.addEventListener("click", handleMenuMobileCrossClick);
};

const handleMenuMobileButtonClick = () => {
  const menu = getMenuMobileContainer();
  addOpenClass(menu);
};

const handleMenuMobileCrossClick = () => {
  const menu = getMenuMobileContainer();
  removeOpenClass(menu);
};
