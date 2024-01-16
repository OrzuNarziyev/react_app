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

export const toggleMenu = (visibility) => {
  return {
    type: TOGGLE_MENU,
    payload: visibility,
  };
};

export const toggleDarkMode = () => {
  return {
    type: TOGGLE_DARK_MODE,
  };
};

export const toggleRTL = () => {
  return {
    type: TOGGLE_RTL,
  };
};

export const toggleBrandedMenu = () => {
  return {
    type: TOGGLE_BRANDED_MENU,
  };
};

export const switchMenuType = (menuType) => {
  return {
    type: SWITCH_MENU_TYPE,
    payload: menuType,
  };
};

export const switchTheme = (theme) => {
  return {
    type: SWITCH_THEME,
    payload: theme,
  };
};

export const switchGray = (gray) => {
  return {
    type: SWITCH_GRAY,
    payload: gray,
  };
};

export const switchFonts = (fonts) => {
  return {
    type: SWITCH_FONTS,
    payload: fonts,
  };
};
