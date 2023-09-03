export const getCurrentPage = () => {
  const currentLocation = window.location.pathname;
  console.log("location: ", window.location);

  let currentPage;
  if (currentLocation === "/") {
    currentPage = "home";
  }
  if (currentLocation === "/boutique.html") {
    currentPage = "store";
  }
  if (currentLocation === "/a-propos.html") {
    currentPage = "about";
  }
  if (currentLocation.indexOf("/produit") > -1) {
    currentPage = "product";
  }

  return currentPage;
};
