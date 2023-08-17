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

export const addHiddenClass = (element) => {
  if (![...element.classList].includes("hidden")) {
    element.classList.toggle("hidden");
  }
};

export const removeHiddenClass = (element) => {
  if ([...element.classList].includes("hidden")) {
    element.classList.toggle("hidden");
  }
};
