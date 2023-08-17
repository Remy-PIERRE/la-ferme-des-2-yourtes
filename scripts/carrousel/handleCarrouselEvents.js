import {
  getCarrouselNextButton,
  getCarrouselPrevButton,
} from "./getCarrouselElements.js";
import {
  handleCarrouselNextAnimation,
  handleCarrouselPrevAnimation,
} from "./handleCarrouselAnimations.js";

export const handleCarrouselEvents = () => {
  const prevButton = getCarrouselPrevButton();
  prevButton.addEventListener("click", handleCarrouselPrevAnimation);

  const nextButton = getCarrouselNextButton();
  nextButton.addEventListener("click", handleCarrouselNextAnimation);
};
