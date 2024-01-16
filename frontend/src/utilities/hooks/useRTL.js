import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleRTL } from "actions";

export const useRTL = () => {
  const dispatch = useDispatch();

  const RTL = useSelector((state) => state.root.RTL);

  const setRTL = () => {
    dispatch(toggleRTL());
  };

  useEffect(() => {
    const root = document.documentElement;

    if (RTL) {
      root.setAttribute("dir", "rtl");
    } else {
      root.setAttribute("dir", "ltr");
    }
  }, [RTL]);

  return [RTL, setRTL];
};

export default useRTL;
