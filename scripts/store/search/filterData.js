export const filterData = (filters, currentData) => {
  let filteredData = currentData;

  for (const [category, selectedFilters] of Object.entries(filters)) {
    if (selectedFilters.length > 0) {
      filteredData = filteredData.filter((data) => {
        for (const current of data.categories[category]) {
          if (selectedFilters.includes(current)) {
            return true;
          }
        }
      });
    }
  }

  return filteredData;
};
