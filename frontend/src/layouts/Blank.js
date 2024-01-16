import { Outlet } from "react-router-dom";

import useDarkMode from "utilities/hooks/useDarkMode";
import useFonts from "utilities/hooks/useFonts";
import useGray from "utilities/hooks/useGray";
import useRTL from "utilities/hooks/useRTL";
import useTheme from "utilities/hooks/useTheme";

const LayoutBlank = () => {
  useDarkMode();
  useRTL();
  useTheme();
  useGray();
  useFonts();

  return (
    <>
      <Outlet />
    </>
  );
};

export default LayoutBlank;
