const callbacks = {};

export const setWindowResizeCallback = (section, callback) => {
  callbacks[section] = callback;
};

export const runWindowResizeCallbacks = () => {
  console.log(
    "callbacks: ",
    (() => {
      for (const name of Object.keys(callbacks)) {
        return name;
      }
    })()
  );

  for (const callback of Object.values(callbacks)) {
    callback();
  }
};
