import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { switchGray } from "actions";

const useGray = () => {
  const dispatch = useDispatch();

  const gray = useSelector((state) => state.root.gray);

  const setGray = (gray) => {
    dispatch(switchGray(gray));
  };

  useEffect(() => {
    const root = document.documentElement;

    root.classList.forEach((value) => {
      if (value.startsWith("gray-")) {
        root.classList.remove(value);
      }
    });

    root.classList.add("gray-" + gray);
  }, [gray]);

  return [gray, setGray];
};

export default useGray;
