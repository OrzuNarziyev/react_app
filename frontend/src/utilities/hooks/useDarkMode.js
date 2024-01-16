import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "actions";

const useDarkMode = () => {
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.root.darkMode);

  const setDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  useEffect(() => {
    const className = "dark";
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add(className);
    } else {
      root.classList.remove(className);
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
