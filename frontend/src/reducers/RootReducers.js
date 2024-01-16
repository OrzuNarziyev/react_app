import config from "config";

import {
  SWITCH_FONTS,
  SWITCH_GRAY,
  SWITCH_MENU_TYPE,
  SWITCH_THEME,
  TOGGLE_BRANDED_MENU,
  TOGGLE_DARK_MODE,
  TOGGLE_MENU,
  TOGGLE_RTL,
} from "actions/types";

const initialDarkMode = () => {
  const item = window.localStorage.getItem("dark-mode-enabled");

  return item ? JSON.parse(item) : config.darkMode;
};

const initialRTL = () => {
  const item = window.localStorage.getItem("rtl-enabled");

  return item ? JSON.parse(item) : config.RTL;
};

const initialBrandedMenu = () => {
  const item = window.localStorage.getItem("branded-menu-enabled");

  return item ? JSON.parse(item) : config.brandedMenu;
};

const initialMenuType = () => {
  const item = window.localStorage.getItem("menu-type");

  return item ? JSON.parse(item) : config.menuType;
};

const initialTheme = () => {
  const item = window.localStorage.getItem("theme");

  return item ? JSON.parse(item) : config.theme;
};

const initialGray = () => {
  const item = window.localStorage.getItem("gray");

  return item ? JSON.parse(item) : config.gray;
};

const initialFonts = () => {
  const item = window.localStorage.getItem("fonts");

  return item ? JSON.parse(item) : config.fonts;
};

const initialState = {
  menuBarVisible: undefined,
  darkMode: initialDarkMode(),
  RTL: initialRTL(),
  brandedMenu: initialBrandedMenu(),
  menuType: initialMenuType(),
  theme: initialTheme(),
  gray: initialGray(),
  fonts: initialFonts(),
};

const RootReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menuBarVisible: action.payload,
      };

    case TOGGLE_DARK_MODE:
      window.localStorage.setItem(
        "dark-mode-enabled",
        JSON.stringify(!state.darkMode)
      );

      return { ...state, darkMode: !state.darkMode };

    case TOGGLE_RTL:
      window.localStorage.setItem("rtl-enabled", JSON.stringify(!state.RTL));

      return { ...state, RTL: !state.RTL };

    case TOGGLE_BRANDED_MENU:
      window.localStorage.setItem(
        "branded-menu-enabled",
        JSON.stringify(!state.brandedMenu)
      );

      return { ...state, brandedMenu: !state.brandedMenu };

    case SWITCH_MENU_TYPE:
      window.localStorage.setItem("menu-type", JSON.stringify(action.payload));

      return { ...state, menuType: action.payload };

    case SWITCH_THEME:
      window.localStorage.setItem("theme", JSON.stringify(action.payload));

      return { ...state, theme: action.payload };

    case SWITCH_GRAY:
      window.localStorage.setItem("gray", JSON.stringify(action.payload));

      return { ...state, gray: action.payload };

    case SWITCH_FONTS:
      window.localStorage.setItem("fonts", JSON.stringify(action.payload));

      return { ...state, fonts: action.payload };
    default:
      return state;
  }
};

export default RootReducers;
