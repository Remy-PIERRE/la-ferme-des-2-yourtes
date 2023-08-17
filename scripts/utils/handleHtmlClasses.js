export const addOpenClass = (element) => {
  if (![...element.classList].includes("open")) {
    element.classList.toggle("open");
  }
};

export const removeOpenClass = (element) => {
  if ([...element.classList].includes("open")) {
    element.classList.toggle("open");
  }
};
