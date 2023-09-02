import {
  getProductPageCarrouselImageContainerAfterInsert,
  getProductPageCarrouselMiniImages,
} from "./getProductPageCarrouselElements.js";

export const handleProductPageCarrouselEvents = () => {
  const miniImages = getProductPageCarrouselMiniImages();

  for (const miniImage of miniImages) {
    miniImage.addEventListener(
      "click",
      handleProductPageCarrouselMiniImageClick
    );
  }
};

const handleProductPageCarrouselMiniImageClick = (event) => {
  const miniImage = event.currentTarget;
  const index = miniImage.dataset.index;
  const imagesWrapper = getProductPageCarrouselImageContainerAfterInsert();

  imagesWrapper.style.left = `-${100 * index}%`;
};
