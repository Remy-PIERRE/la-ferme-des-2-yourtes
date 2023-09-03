import { getCurrentPage } from "../page/getCurrentPage.js";
import { getOriginPathName } from "../utils/getPathName.js";
import { getHeaderLogos } from "./getHeaderElements.js";

export const handleHeaderEvents = () => {
  if (getCurrentPage() !== "home") {
    const logos = getHeaderLogos();
    for (const logo of logos) {
      logo.addEventListener("click", handleHeaderLogoCLick);
    }
  }
};
const handleHeaderLogoCLick = () => {
  const path = getOriginPathName();
  window.location.href = `${path}`;
};
