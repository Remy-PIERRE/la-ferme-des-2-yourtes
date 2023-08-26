export const deleteElementById = (id) => {
  const element = document.querySelector(`#${id}`);
  element.remove();
};

export const deleteAllChilds = (element) => {
  const childsList = element.querySelectorAll(":scope > *");
  for (const child of childsList) {
    child.remove();
  }
};

export const deleteAllChildsButNotTemplate = (element) => {
  const childsList = element.querySelectorAll(":scope > *");
  for (const child of childsList) {
    if (child.tagName !== "TEMPLATE") {
      child.remove();
    }
  }
};
