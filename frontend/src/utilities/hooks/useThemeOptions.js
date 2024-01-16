import { useEffect, useState } from "react";

import useFonts from "utilities/hooks/useFonts";
import useTheme from "utilities/hooks/useTheme";

const useThemeOptions = () => {
  const [currentTheme] = useTheme();
  const [currentFonts] = useFonts();

  const style = getComputedStyle(document.body);

  const [colors, setColors] = useState({
    primary: style.getPropertyValue("--color-primary"),
    text: style.getPropertyValue("--color-text-normal"),
  });

  const [fonts, setFonts] = useState({
    heading: style.getPropertyValue("--font-heading"),
    body: style.getPropertyValue("--font-body"),
  });

  useEffect(() => {
    const style = getComputedStyle(document.body);

    const colors = {
      primary: style.getPropertyValue("--color-primary"),
      text: style.getPropertyValue("--color-text-normal"),
    };

    const fonts = {
      heading: style.getPropertyValue("--font-heading"),
      body: style.getPropertyValue("--font-body"),
    };

    setColors(colors);
    setFonts(fonts);
  }, [currentTheme, currentFonts]);

  return { colors, fonts };
};

export default useThemeOptions;
