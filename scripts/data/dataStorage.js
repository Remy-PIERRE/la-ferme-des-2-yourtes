export const isInStorage = (name) => {
  const answer = window.localStorage.getItem(name) ? true : false;
  return answer;
};

export const getDataFromStorage = (name) => {
  const data = JSON.parse(window.localStorage.getItem(name));
  return data;
};

export const setDataStorage = (name, data) => {
  window.localStorage.setItem(name, JSON.stringify(data));
};
