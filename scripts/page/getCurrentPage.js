export const getCurrentPage = () => {
  const currentLocation = window.location.pathname;

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

  return currentPage;
};
