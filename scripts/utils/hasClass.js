export const hasClass = (element, className) => {
  const answer = [...element.classList].includes(className) ? true : false;
  return answer;
};
