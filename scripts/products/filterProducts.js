export const filterHomePageProducts = (data) => {
  const filteredData = data.filter((product) => product.homePage);
  return filteredData;
};
