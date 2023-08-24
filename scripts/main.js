import { initHeader } from "./header/initHeader.js";
import { initFooter } from "./footer/initFooter.js";
import { initWindow } from "./window/initWindow.js";
import { initData } from "./data/initData.js";
import { getCurrentPage } from "./page/getCurrentPage.js";
import { initHome } from "./home/initHome.js";
import { initStore } from "./store/initStore.js";
import { getDataCategory } from "./data/dataInstance.js";

const initPage = async () => {
  console.log("init page");

  console.log("init header");
  initHeader();
  console.log("init footer");
  initFooter();
  console.log("init window");
  initWindow();

  console.log("init data");
  await initData();
  console.log("data => products: ", getDataCategory("products"));
  console.log("data => carrousel: ", getDataCategory("carrousel"));

  const currentPage = getCurrentPage();
  if (currentPage === "home") {
    console.log("init home");
    initHome();
  }
  if (currentPage === "store") {
    console.log("init store");
    initStore();
  }
};

localStorage.clear();
initPage();
