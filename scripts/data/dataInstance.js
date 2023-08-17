import { AllData } from "./Data.js";

/* GLOBALS */
let dataInstance = false;

export const setDataInstance = (name, data) => {
  if (!dataInstance) {
    dataInstance = new AllData();
  }

  dataInstance.addCategory(name, data);
};

export const getDataCategory = (name) => {
  const data = dataInstance.getCategory(name);
  return data;
};
