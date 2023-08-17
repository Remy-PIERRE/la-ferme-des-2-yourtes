export const getDataFromApi = async (name) => {
  try {
    const resp = await fetch(`/public/json/${name}.json`);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(`Error fetching ${name} data.`, error.message);
  }
};
