import { setPrevWindowMedia } from "./windowMedia.js";
import { handleWindowResizeEvent } from "./handleWindowResizeEvent.js";

export const initWindow = () => {
  setPrevWindowMedia();

  window.addEventListener("resize", handleWindowResizeEvent);
};
