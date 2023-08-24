let prevWindowMedia;

export const setPrevWindowMedia = () => {
  prevWindowMedia = getWindowMedia();
};

export const getPrevWindowMedia = () => {
  return prevWindowMedia;
};

export const getWindowMedia = () => {
  const windowWidth = window.innerWidth;

  let media;
  if (windowWidth < 976) {
    media = "mobile";
  }
  if (windowWidth >= 976) {
    media = "desk";
  }

  return media;
};
