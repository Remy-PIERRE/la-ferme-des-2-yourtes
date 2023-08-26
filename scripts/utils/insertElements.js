export const insertElement = (parent, child) => {
  parent.appendChild(child);
};

export const replaceOrInsertElement = (parent, child) => {};

/* 
const insertCheckbox = (container, template, id) => {
  if (isAlreadyCreated__id(id)) {
    getElement__id(id).replaceWith(template);
  } else {
    container.appendChild(template);
  }
};
*/
