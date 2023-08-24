import { dataConfig } from "./data-config.js";
import { getDataFromApi } from "./api.js";
import {
  getDataFromStorage,
  isInStorage,
  setDataStorage,
} from "./dataStorage.js";
import { setDataInstance } from "./dataInstance.js";

export const initData = async () => {
  for (const category of dataConfig) {
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
