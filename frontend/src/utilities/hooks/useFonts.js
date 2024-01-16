import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { switchFonts } from "actions";

const useFonts = () => {
  const dispatch = useDispatch();

  const fonts = useSelector((state) => state.root.fonts);

  const setFonts = (fonts) => {
    dispatch(switchFonts(fonts));
  };

  useEffect(() => {
    const root = document.documentElement;

    root.classList.forEach((value) => {
      if (value.startsWith("font-")) {
        root.classList.remove(value);
      }
    });

    root.classList.add("font-" + fonts);
  }, [fonts]);

  return [fonts, setFonts];
};

export default useFonts;
