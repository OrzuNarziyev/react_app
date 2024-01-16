import { useState } from "react";

const element = document.documentElement;

const openFullscreen = () => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
};

const closeFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
};

const checkFullscreen = () => {
  if (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  ) {
    return true;
  }

  return false;
};

const useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(checkFullscreen());

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);

    if (checkFullscreen()) {
      closeFullscreen();
    } else {
      openFullscreen();
    }
  };

  return [isFullscreen, toggleFullscreen];
};

export default useFullscreen;
