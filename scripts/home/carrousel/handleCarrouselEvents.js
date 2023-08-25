import {
  getCarrouselContainer,
  getCarrouselNextButton,
  getCarrouselPrevButton,
} from "./getCarrouselElements.js";
import {
  handleCarrouselNextAnimation,
  handleCarrouselNextAnimationEnd,
  handleCarrouselPrevAnimation,
  handleCarrouselPrevAnimationEnd,
} from "./handleCarrouselAnimations.js";

export const handleCarrouselEvents = () => {
  const prevButton = getCarrouselPrevButton();
  prevButton.addEventListener("click", handleCarrouselPrevAnimation);

  const nextButton = getCarrouselNextButton();
  nextButton.addEventListener("click", handleCarrouselNextAnimation);
};

export const resetCarrouselContainerListeners = () => {
  const container = getCarrouselContainer();
  container.removeEventListener(
    "animationend",
    handleCarrouselPrevAnimationEnd
  );
  container.removeEventListener(
    "animationend",
    handleCarrouselNextAnimationEnd
  );
};
