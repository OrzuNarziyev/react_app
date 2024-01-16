import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { switchMenuType } from "actions";

const useMenuType = () => {
  const dispatch = useDispatch();

  const menuType = useSelector((state) => state.root.menuType);

  const setMenuType = (menuType) => {
    dispatch(switchMenuType(menuType));
  };

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("menu-icon-only");

    root.classList.remove("menu-wide");

    root.classList.remove("menu-hidden");

    switch (menuType) {
      case "icon-only":
        root.classList.add("menu-icon-only");

        break;
      case "wide":
        root.classList.add("menu-wide");

        break;
      case "hidden":
        root.classList.add("menu-hidden");

        break;
      default:
    }
  }, [menuType]);

  return [menuType, setMenuType];
};

export default useMenuType;
