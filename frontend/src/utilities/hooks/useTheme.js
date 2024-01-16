import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "actions";

const useTheme = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.root.theme);

  const setTheme = (theme) => {
    dispatch(switchTheme(theme));
  };

  useEffect(() => {
    const root = document.documentElement;

    root.classList.forEach((value) => {
      if (value.startsWith("theme-")) {
        root.classList.remove(value);
      }
    });

    root.classList.add("theme-" + theme);
  }, [theme]);

  return [theme, setTheme];
};

export default useTheme;
