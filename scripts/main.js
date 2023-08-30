import { initHeader } from "./header/initHeader.js";
import { initFooter } from "./footer/initFooter.js";
import { initWindow } from "./window/initWindow.js";
import { initData } from "./data/initData.js";
import { getCurrentPage } from "./page/getCurrentPage.js";
import { initHome } from "./home/initHome.js";
import { initStore } from "./store/initStore.js";
import { getDataCategory } from "./data/dataInstance.js";
import { initProduct } from "./product/initProduct.js";

const initPage = async () => {
  console.log("init page: ", getCurrentPage());

  console.log("init header");
  initHeader();
  console.log("init footer");
  initFooter();
  console.log("init window");
  initWindow();

  console.log("init data");
  await initData();
  console.log("data => products: ", getDataCategory("products"));
  console.log(
    "data => productsCategories: ",
    getDataCategory("productsCategories")
  );
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
  if (currentPage === "product") {
    console.log("init product");
    initProduct();
  }
};

// localStorage.clear();
initPage();
