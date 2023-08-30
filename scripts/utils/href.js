export const setCurrentHref = (value) => {
  const currentHref = window.location.href;
  window.history.pushState({}, "", `${currentHref}/${value}`);
};
