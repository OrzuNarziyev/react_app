import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleBrandedMenu } from "actions";

const useBrandedMenu = () => {
  const dispatch = useDispatch();

  const brandedMenu = useSelector((state) => state.root.brandedMenu);

  const setBrandedMenu = () => {
    dispatch(toggleBrandedMenu());
  };

  useEffect(() => {
    const className = "menu_branded";
    const root = document.documentElement;

    if (brandedMenu) {
      root.classList.add(className);
    } else {
      root.classList.remove(className);
    }
  }, [brandedMenu]);

  return [brandedMenu, setBrandedMenu];
};

export default useBrandedMenu;
