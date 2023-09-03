const pagesList = ["/boutique", "/a-propos", "/produit"];

export const getCurrentPage = () => {
  const currentLocation = window.location.pathname;
  console.log("location: ", window.location);

  let currentPage;
  if (!pagesList.find((path) => currentLocation.indexOf(path) > -1)) {
    currentPage = "home";
  }
  if (currentLocation.indexOf("/boutique.html") > -1) {
    currentPage = "store";
  }
  if (currentLocation.indexOf("/a-propos.html") > -1) {
    currentPage = "about";
  }
  if (currentLocation.indexOf("/produit") > -1) {
    currentPage = "product";
  }

  return currentPage;
};
