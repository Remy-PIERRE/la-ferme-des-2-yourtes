import {
  isInStorage,
  getDataFromStorage,
  setDataStorage,
} from "./dataStorage.js";
import { setDataInstance } from "./dataInstance.js";
import { getDataFromApi } from "./api.js";

export const initData = async (config) => {
  for (const category of config) {
    const { fileName, storageName } = category;

    if (isInStorage(storageName)) {
      const data = getDataFromStorage(storageName);
      setDataInstance(storageName, data);
    }
    if (!isInStorage(storageName)) {
      const data = await getDataFromApi(fileName);
      setDataInstance(storageName, data);
      setDataStorage(storageName, data);
    }
  }
};
