export const insertElement = (container, element) => {
  container.appendChild(element);
};

export const insertList = (container, list) => {
  for (const element of list) {
    container.appendChild(element);
  }
};
