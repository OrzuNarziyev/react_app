import { useState } from "react";

import classNames from "classnames";

import useDarkMode from "utilities/hooks/useDarkMode";
import useRTL from "utilities/hooks/useRTL";
import useBrandedMenu from "utilities/hooks/useBrandedMenu";
import useMenuType from "utilities/hooks/useMenuType";
import useTheme from "utilities/hooks/useTheme";
import useGray from "utilities/hooks/useGray";
import useFonts from "utilities/hooks/useFonts";

const Customizer = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [RTL, toggleRTL] = useRTL();
  const [brandedMenu, toggleBrandedMenu] = useBrandedMenu();
  const [menuType, switchMenuType] = useMenuType();
  const [theme, switchTheme] = useTheme();
  const [gray, switchGray] = useGray();
  const [fonts, switchFonts] = useFonts();

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  const menuTypes = [
    {
      id: "default",
      label: "Default",
    },
    {
      id: "hidden",
      label: "Hidden",
    },
    {
      id: "icon-only",
      label: "Icon Only",
    },
    {
      id: "wide",
      label: "Wide",
    },
  ];

  const themes = [
    {
      id: "default",
      label: "Sky",
      color: "#0284C7",
    },
    {
      id: "red",
      label: "Red",
      color: "#DC2626",
    },
    {
      id: "orange",
      label: "Orange",
      color: "#EA580C",
    },
    {
      id: "amber",
      label: "Amber",
      color: "#D97706",
    },
    {
      id: "yellow",
      label: "Yellow",
      color: "#CA8A04",
    },
    {
      id: "lime",
      label: "Lime",
      color: "#65A30D",
    },
    {
      id: "green",
      label: "Green",
      color: "#65A30D",
    },
    {
      id: "emerald",
      label: "Emerald",
      color: "#059669",
    },
    {
      id: "teal",
      label: "Teal",
      color: "#0D9488",
    },
    {
      id: "cyan",
      label: "Cyan",
      color: "#0891B2",
    },
    {
      id: "blue",
      label: "Blue",
      color: "#2563EB",
    },
    {
      id: "indigo",
      label: "Indigo",
      color: "#4F46E5",
    },
    {
      id: "violet",
      label: "Violet",
      color: "#7C3AED",
    },
    {
      id: "purple",
      label: "Purple",
      color: "#9333EA",
    },
    {
      id: "fuchsia",
      label: "Fuchsia",
      color: "#C026D3",
    },
    {
      id: "pink",
      label: "Pink",
      color: "#DB2777",
    },
    {
      id: "rose",
      label: "Rose",
      color: "#E11D48",
    },
  ];

  const grays = [
    {
      id: "default",
      label: "Pure",
      color: "#4B5563",
    },
    {
      id: "slate",
      label: "Slate",
      color: "#475569",
    },
    {
      id: "zinc",
      label: "Zinc",
      color: "#52525B",
    },
    {
      id: "neutral",
      label: "Neutral",
      color: "#525252",
    },
    {
      id: "stone",
      label: "Stone",
      color: "#57534E",
    },
  ];

  const fontsList = [
    {
      id: "default",
      heading: "Nunito",
      headingLabel: "Nunito",
      body: "Nunito_Sans",
      bodyLabel: "Nunito Sans",
    },
    {
      id: "montserrat",
      heading: "Montserrat",
      headingLabel: "Montserrat",
      body: "Montserrat",
      bodyLabel: "Montserrat",
    },
    {
      id: "raleway",
      heading: "Raleway",
      headingLabel: "Raleway",
      body: "Raleway",
      bodyLabel: "Raleway",
    },
    {
      id: "poppins",
      heading: "Poppins",
      headingLabel: "Poppins",
      body: "Poppins",
      bodyLabel: "Poppins",
    },
    {
      id: "oswald",
      heading: "Oswald",
      headingLabel: "Oswald",
      body: "Oswald",
      bodyLabel: "Oswald",
    },
    {
      id: "roboto-condensed-roboto",
      heading: "Roboto Condensed",
      headingLabel: "Roboto Condensed",
      body: "Roboto",
      bodyLabel: "Roboto",
    },
    {
      id: "inter",
      heading: "Inter",
      headingLabel: "Inter",
      body: "Inter",
      bodyLabel: "Inter",
    },
    {
      id: "yantramanav",
      heading: "Yantramanav",
      headingLabel: "Yantramanav",
      body: "Yantramanav",
      bodyLabel: "Yantramanav",
    },
  ];

  const randomItem = (items) => {
    return items[Math.floor(Math.random() * items.length)];
  };

  const randomize = () => {
    const randomBoolean = Math.random() < 0.25; // True 25%

    if (randomBoolean) {
      toggleDarkMode();
    }

    if (randomBoolean) {
      toggleBrandedMenu();
    }

    if (randomBoolean) {
      switchMenuType(randomItem(menuTypes).id);
    }

    switchTheme(randomItem(themes).id);
    switchGray(randomItem(grays).id);
    switchFonts(randomItem(fontsList).id);
  };

  return (
    <aside
      id="customizer"
      className={classNames("sidebar", "sidebar_customizer", {
        open: isCustomizerOpen,
      })}
    >
      {/* Togglers */}
      <div className="toggler-wrapper">
        <div>
          <button
            className="toggler"
            onClick={() => setIsCustomizerOpen(!isCustomizerOpen)}
          >
            <span className="la la-gear animate-spin-slow"></span>
          </button>
          <button className="randomizer mt-2" onClick={randomize}>
            <span className="la la-random"></span>
          </button>
        </div>
      </div>

      {/* Theme Customizer */}
      <div className="flex items-center justify-between h-20 p-4">
        <div>
          <h2>Theme Customizer</h2>
          <p>Customize & Preview</p>
        </div>
        <button
          className="close text-2xl leading-none hover:text-primary la la-times"
          onClick={() => setIsCustomizerOpen(false)}
        ></button>
      </div>
      <hr />
      <div className="overflow-y-auto">
        <div className="flex items-center justify-between p-4">
          <h5>Dark Mode</h5>
          <label className="switch switch_outlined">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => toggleDarkMode()}
            />
            <span></span>
          </label>
        </div>
        <hr />
        <div className="flex items-center justify-between p-4">
          <h5>RTL</h5>
          <label className="switch switch_outlined">
            <input type="checkbox" checked={RTL} onChange={() => toggleRTL()} />
            <span></span>
          </label>
        </div>
        <hr />
        <div className="flex items-center justify-between p-4">
          <div>
            <h5>Branded Menu</h5>
            <small>Menu will be set to primary color</small>
          </div>
          <label className="switch switch_outlined">
            <input
              type="checkbox"
              checked={brandedMenu}
              onChange={() => toggleBrandedMenu()}
            />
            <span></span>
          </label>
        </div>
        <hr />
        <div className="p-4">
          <h5>Menu Types</h5>
          <div className="flex flex-col space-y-2 mt-5">
            {menuTypes.map((item) => (
              <label key={item.id} className="custom-radio">
                <input
                  type="radio"
                  name="menuType"
                  checked={menuType === item.id ? true : false}
                  onChange={() => switchMenuType(item.id)}
                />
                <span></span>
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        </div>
        <hr />
        <div className="p-4">
          <h5>Themes</h5>
          <div className="themes">
            {themes.map((item) => (
              <button
                key={item.id}
                className={classNames({
                  active: theme === item.id,
                })}
                onClick={() => switchTheme(item.id)}
              >
                <span
                  className={classNames("color", "bg-[" + item.color + "]")}
                ></span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
        <hr />
        <div className="p-4">
          <div>
            <h5>50 Shades of Gray</h5>
            <small>5 x 10 Shades</small>
          </div>
          <div className="themes">
            {grays.map((item) => (
              <button
                key={item.id}
                className={classNames({
                  active: gray === item.id,
                })}
                onClick={() => switchGray(item.id)}
              >
                <span
                  className={classNames("color", "bg-[" + item.color + "]")}
                ></span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
        <hr />
        <div className="p-4">
          <h5>Fonts</h5>
          <div className="themes fonts">
            {fontsList.map((item) => (
              <button
                key={item.id}
                className={classNames({
                  active: fonts === item.id,
                })}
                onClick={() => switchFonts(item.id)}
              >
                <h5 className={"font-['" + item.heading + "']"}>
                  {item.headingLabel}
                </h5>
                <p className={"font-['" + item.body + "']"}>{item.bodyLabel}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Customizer;
