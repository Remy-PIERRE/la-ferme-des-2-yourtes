import { getPrevWindowMedia, getWindowMedia } from "./windowMedia.js";
import { runWindowResizeCallbacks } from "./windowResizeCallbacks.js";

export const handleWindowResizeEvent = () => {
  const prevWindowMedia = getPrevWindowMedia();
  const currentWindowMedia = getWindowMedia();

  if (prevWindowMedia !== currentWindowMedia) {
    runWindowResizeCallbacks();
  }
};
