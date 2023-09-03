import { addOpenClass, removeOpenClass } from "../utils/toggleClasses.js";
import {
  getFooterMentionsLegales,
  getFooterMentionsLegalesModale,
  getFooterMentionsLegalesModaleWrapper,
} from "./getFooterElements.js";

export const handleFooterEvents = () => {
  const mentionsLegales = getFooterMentionsLegales();
  mentionsLegales.addEventListener("click", handleFooterMentionsLegalesClick);

  const mentionsLegalesModaleWrapper = getFooterMentionsLegalesModaleWrapper();
  mentionsLegalesModaleWrapper.addEventListener(
    "click",
    handleFooterMentionsLegalesModaleWrapperClick
  );
};

const handleFooterMentionsLegalesClick = () => {
  const modale = getFooterMentionsLegalesModale();
  addOpenClass(modale);
};

const handleFooterMentionsLegalesModaleWrapperClick = () => {
  const modale = getFooterMentionsLegalesModale();
  removeOpenClass(modale);
};
