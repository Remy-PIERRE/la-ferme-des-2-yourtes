export const getDataFromApi = async (name) => {
  const origin = window.location.origin;

  try {
    const resp = await fetch(`${origin}/public/json/${name}.json`);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(`Error fetching ${name} data.`, error.message);
  }
};
