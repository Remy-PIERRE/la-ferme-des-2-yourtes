import { getConfig } from "./config/getConfig.js";
import { initHeader } from "./header/initHeader.js";
import { initData } from "./data/initData.js";
import { initCarrousel } from "./carrousel/initCarrousel.js";
import { initGallery } from "./gallery/initGallery.js";
import { getDataCategory } from "./data/dataInstance.js";

const initPage = async () => {
  const config = getConfig();
  const { header, data, carrousel, gallery } = config;

  console.log("location", window.location);

  initHeader(header);

  if (data) {
    console.log("Hello data !", data);
    await initData(data);

    /* DEV - DATA */
    console.log("dataInstance - carrousel", getDataCategory("carrousel"));
    console.log("dataInstance - gallery", getDataCategory("products"));
  }
  if (carrousel) {
    console.log("Hello carrousel !", carrousel);
    initCarrousel(carrousel);
  }
  if (gallery) {
    console.log("Hello gallery !", gallery);
    initGallery(gallery);
  }
};

console.log("Helllo world !");
window.localStorage.clear();
initPage();
