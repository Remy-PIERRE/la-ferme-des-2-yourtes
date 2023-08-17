import {
  getCarrouselPrevButton,
  getCarrouselNextButton,
} from "./getCarrouselElements.js";
import {
  handleCarrouselContainerPrevAnimation,
  handleCarrouselContainerNextAnimation,
  setContainerNextIndex,
  setContainerPrevIndex,
} from "./carrouselContainer.js";

export const handleCarrouselEvents = () => {
  const prevButton = getCarrouselPrevButton();
  prevButton.addEventListener("click", handleCarrouselPrevButtonClick);

  const nextButton = getCarrouselNextButton();
  nextButton.addEventListener("click", handleCarrouselNextButtonClick);
};

const handleCarrouselPrevButtonClick = () => {
  setContainerPrevIndex();
  handleCarrouselContainerPrevAnimation();
};

const handleCarrouselNextButtonClick = () => {
  setContainerNextIndex();
  handleCarrouselContainerNextAnimation();
};
