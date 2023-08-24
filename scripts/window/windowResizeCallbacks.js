const callbacks = {};

export const setWindowResizeCallback = (section, callback) => {
  callbacks[section] = callback;
};

export const runWindowResizeCallbacks = () => {
  for (const callback of Object.values(callbacks)) {
    callback();
  }
};
