import { createContext, useContext, useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "actions";

import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import Tippy, { useSingleton } from "@tippyjs/react";

import Backdrop from "components/Backdrop";
import Collapse from "components/Collapse";
import Avatar from "components/Avatar";

import useBrandedMenu from "utilities/hooks/useBrandedMenu";
import useMenuType from "utilities/hooks/useMenuType";
import useOnClickOutside from "utilities/hooks/useOnClickOutside";
import useWindowSize from "utilities/hooks/useWindowSize";

const MenuBarContext = createContext();

const MenuBar = () => {
  const dispatch = useDispatch();

  const menuBarVisible = useSelector((state) => state.root.menuBarVisible);

  const [brandedMenu] = useBrandedMenu();
  const [menuType] = useMenuType();
  const windowSize = useWindowSize();

  const [activeMenus, setActiveMenus] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBackdropActive, setIsBackdropActive] = useState(false);
  const [isTooltipDisabled, setIsTooltipDisabled] = useState(false);

  const menuBar = useRef(null);

  const [source, target] = useSingleton();

  // Activate Menu
  const activateMenu = (menuName, withMenuDetail = true) => {
    if (menuType !== "wide") {
      if (activeMenus.includes(menuName) && isMenuOpen) {
        setActiveMenus([]);
        hideMenuDetail();
      } else {
        setActiveMenus([menuName]);

        if (withMenuDetail) {
          setIsMenuOpen(true);
          setIsBackdropActive(true);
        } else {
          hideMenuDetail();
        }
      }
    } else {
      if (activeMenus.includes(menuName)) {
        setActiveMenus([]);
      } else {
        setActiveMenus([menuName]);
      }
    }
  };

  // Check if a Menu is Active
  const isActive = (menuName) => {
    return activeMenus.includes(menuName);
  };

  // Check if a Menu Detail is Open
  const isOpen = (menuName) => {
    return activeMenus.includes(menuName) && isMenuOpen;
  };

  // Hide Menu Detail
  const hideMenuDetail = () => {
    setIsMenuOpen(false);
    setIsBackdropActive(false);
  };

  // Hide Menu Detail - When clicked elsewhere
  useOnClickOutside(menuBar, () => {
    if (menuType !== "wide") {
      hideMenuDetail();
    }
  });

  useEffect(() => {
    if (menuType === "icon-only") {
      setIsTooltipDisabled(true);
    }
  }, [menuType]);

  useEffect(() => {
    if (windowSize.width > 640) {
      dispatch(toggleMenu(true));
    } else {
      dispatch(toggleMenu(false));
    }
  }, [windowSize]);

  return (
    <MenuBarContext.Provider value={{ isOpen, hideMenuDetail }}>
      <Backdrop active={isBackdropActive} workspaceOnly={true} />
      <Tippy
        singleton={source}
        touch={["hold", 500]}
        theme="light-border tooltip"
        offset={[0, 12]}
        animation="scale"
        placement="right"
        appendTo={document.body}
        disabled={isTooltipDisabled}
      />

      <aside
        ref={menuBar}
        className={classNames(
          "menu-bar",
          "menu-sticky",
          { "menu-hidden": !menuBarVisible },
          {
            menu_branded: brandedMenu,
          },
          "menu-" + menuType
        )}
      >
        <div className="menu-items">
          <div
            className={classNames("menu-header", {
              hidden: menuType !== "wide",
            })}
          >
            <Link to="/" className="flex items-center mx-8 mt-8">
              <Avatar size="medium">JD</Avatar>
              <div className="ltr:ml-4 rtl:mr-4 ltr:text-left rtl:text-right">
                <h5>John Doe</h5>
                <p className="mt-2">Editor</p>
              </div>
            </Link>
            <hr className="mx-8 my-4" />
          </div>
          <Tippy content="Bosh sahifa" singleton={target}>
            <Link
              to="/"
              onClick={() => activateMenu("dashboard", false)}
              className={classNames("link", { active: isActive("dashboard") })}
            >
              <span className="icon la la-laptop"></span>
              <span className="title">Bosh Sahifa</span>
            </Link>
          </Tippy>
          {/* <Tippy content="UI" singleton={target}>
            <button
              onClick={() => activateMenu("ui")}
              className={classNames("link", { active: isActive("ui") })}
            >
              <span className="icon la la-cube"></span>
              <span className="title">UI</span>
            </button>
          </Tippy> */}
          {/* {menuType === "wide" ? (
            <Collapse open={isActive("ui")}>
              <MenuDetailUI />
            </Collapse>
          ) : null} */}
          {/* <Tippy content="Pages" singleton={target}>
            <button
              onClick={() => activateMenu("pages")}
              className={classNames("link", { active: isActive("pages") })}
            >
              <span className="icon la la-file-alt"></span>
              <span className="title">Pages</span>
            </button>
          </Tippy>
          {menuType === "wide" ? (
            <Collapse open={isActive("pages")}>
              <MenuDetailPages />
            </Collapse>
          ) : null}
          <Tippy content="Applications" singleton={target}>
            <button
              onClick={() => activateMenu("applications")}
              className={classNames("link", {
                active: isActive("applications"),
              })}
            >
              <span className="icon la la-store"></span>
              <span className="title">Applications</span>
            </button>
          </Tippy>
          {menuType === "wide" ? (
            <Collapse open={isActive("applications")}>
              <MenuDetailApplications />
            </Collapse>
          ) : null}
          <Tippy content="Menu" singleton={target}>
            <button
              onClick={() => activateMenu("menu")}
              className={classNames("link", { active: isActive("menu") })}
            >
              <span className="icon la la-sitemap"></span>
              <span className="title">Menu</span>
            </button>
          </Tippy>
          {menuType === "wide" ? (
            <Collapse open={isActive("menu")}>
              <MenuDetailMenu />
            </Collapse>
          ) : null} */}
          <Tippy content="Blank Page" singleton={target}>
            <Link
              to="/blank"
              onClick={() => activateMenu("blank", false)}
              className={classNames("link", { active: isActive("blank") })}
            >
              <span className="icon la la-file"></span>
              <span className="title">Blank Page</span>
            </Link>
          </Tippy>
          {/*<Tippy content="Docs" singleton={target}>
            <a
              href="https://yeti.yetithemes.net/docs/react"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <span className="icon la la-book-open"></span>
              <span className="title">Docs</span>
            </a>
          </Tippy> */}
        </div>

        {menuType !== "wide" ? (
          <>
            <MenuDetailUI />
            <MenuDetailPages />
            <MenuDetailApplications />
            <MenuDetailMenu />
          </>
        ) : null}
      </aside>
    </MenuBarContext.Provider>
  );
};

export default MenuBar;

const MenuDetailUI = () => {
  const { isOpen, hideMenuDetail } = useContext(MenuBarContext);

  return (
    <div
      className={classNames("menu-detail", {
        open: isOpen("ui"),
      })}
    >
      <div className="menu-detail-wrapper">
        <h6 className="uppercase">Form</h6>
        <NavLink to="/form-components" onClick={hideMenuDetail}>
          <span className="la la-cubes"></span>
          Components
        </NavLink>
        <NavLink to="/form-input-groups" onClick={hideMenuDetail}>
          <span className="la la-stop"></span>
          Input Groups
        </NavLink>
        <NavLink to="/form-layout" onClick={hideMenuDetail}>
          <span className="la la-th-large"></span>
          Layout
        </NavLink>
        <NavLink to="/form-validations" onClick={hideMenuDetail}>
          <span className="la la-check-circle"></span>
          Validations
        </NavLink>
        <NavLink to="/form-wizards" onClick={hideMenuDetail}>
          <span className="la la-hand-pointer"></span>
          Wizards
        </NavLink>
        <hr />
        <h6 className="uppercase">Components</h6>
        <NavLink to="/components-alerts" onClick={hideMenuDetail}>
          <span className="la la-bell"></span>
          Alerts
        </NavLink>
        <NavLink to="/components-avatars" onClick={hideMenuDetail}>
          <span className="la la-user-circle"></span>
          Avatars
        </NavLink>
        <NavLink to="/components-badges" onClick={hideMenuDetail}>
          <span className="la la-certificate"></span>
          Badges
        </NavLink>
        <NavLink to="/components-buttons" onClick={hideMenuDetail}>
          <span className="la la-play"></span>
          Buttons
        </NavLink>
        <NavLink to="/components-cards" onClick={hideMenuDetail}>
          <span className="la la-layer-group"></span>
          Cards
        </NavLink>
        <NavLink to="/components-collapse" onClick={hideMenuDetail}>
          <span className="la la-arrow-circle-right"></span>
          Collapse
        </NavLink>
        <NavLink to="/components-colors" onClick={hideMenuDetail}>
          <span className="la la-palette"></span>
          Colors
        </NavLink>
        <NavLink to="/components-dropdowns" onClick={hideMenuDetail}>
          <span className="la la-arrow-circle-down"></span>
          Dropdowns
        </NavLink>
        <NavLink to="/components-modal" onClick={hideMenuDetail}>
          <span className="la la-times-circle"></span>
          Modal
        </NavLink>
        <NavLink to="/components-popovers-tooltips" onClick={hideMenuDetail}>
          <span className="la la-thumbtack"></span>
          Popovers & Tooltips
        </NavLink>
        <NavLink to="/components-tabs" onClick={hideMenuDetail}>
          <span className="la la-columns"></span>
          Tabs
        </NavLink>
        <NavLink to="/components-tables" onClick={hideMenuDetail}>
          <span className="la la-table"></span>
          Tables
        </NavLink>
        <NavLink to="/components-toasts" onClick={hideMenuDetail}>
          <span className="la la-bell"></span>
          Toasts
        </NavLink>
        <hr />
        <h6 className="uppercase">Extras</h6>
        <NavLink to="/extras-carousel" onClick={hideMenuDetail}>
          <span className="la la-images"></span>
          Carousel
        </NavLink>
        <NavLink to="/extras-charts" onClick={hideMenuDetail}>
          <span className="la la-chart-area"></span>
          Charts
        </NavLink>
        <NavLink to="/extras-editors" onClick={hideMenuDetail}>
          <span className="la la-keyboard"></span>
          Editors
        </NavLink>
        <NavLink to="/extras-fullcalendar" onClick={hideMenuDetail}>
          <span className="la la-calendar"></span>
          FullCalendar
        </NavLink>
        <NavLink to="/extras-sortable" onClick={hideMenuDetail}>
          <span className="la la-sort"></span>
          Sortable
        </NavLink>
      </div>
    </div>
  );
};

const MenuDetailPages = () => {
  const { isOpen, hideMenuDetail } = useContext(MenuBarContext);

  return (
    <div className={classNames("menu-detail", { open: isOpen("pages") })}>
      <div className="menu-detail-wrapper">
        <h6 className="uppercase">Authentication</h6>
        <NavLink to="/auth-login" onClick={hideMenuDetail}>
          <span className="la la-user"></span>
          Login
        </NavLink>
        <NavLink to="/auth-forgot-password" onClick={hideMenuDetail}>
          <span className="la la-user-lock"></span>
          Forgot Password
        </NavLink>
        <NavLink to="/auth-register" onClick={hideMenuDetail}>
          <span className="la la-user-plus"></span>
          Register
        </NavLink>
        <hr />
        <h6 className="uppercase">Blog</h6>
        <NavLink to="/blog-list" onClick={hideMenuDetail}>
          <span className="la la-list"></span>
          List
        </NavLink>
        <NavLink to="/blog-list-card-rows" onClick={hideMenuDetail}>
          <span className="la la-list"></span>
          List - Card Rows
        </NavLink>
        <NavLink to="/blog-list-card-columns" onClick={hideMenuDetail}>
          <span className="la la-list"></span>
          List - Card Columns
        </NavLink>
        <NavLink to="/blog-add" onClick={hideMenuDetail}>
          <span className="la la-layer-group"></span>
          Add Post
        </NavLink>
        <hr />
        <h6 className="uppercase">Errors</h6>
        <NavLink to="/errors-403" onClick={hideMenuDetail}>
          <span className="la la-exclamation-circle"></span>
          403 Error
        </NavLink>
        <NavLink to="/errors-404" onClick={hideMenuDetail}>
          <span className="la la-exclamation-circle"></span>
          404 Error
        </NavLink>
        <NavLink to="/errors-500" onClick={hideMenuDetail}>
          <span className="la la-exclamation-circle"></span>
          500 Error
        </NavLink>
        <NavLink to="/errors-under-maintenance" onClick={hideMenuDetail}>
          <span className="la la-exclamation-circle"></span>
          Under Maintenance
        </NavLink>
        <hr />
        <NavLink to="/pages-pricing" onClick={hideMenuDetail}>
          <span className="la la-dollar"></span>
          Pricing
        </NavLink>
        <NavLink to="/pages-faqs-layout-1" onClick={hideMenuDetail}>
          <span className="la la-question-circle"></span>
          FAQs - Layout 1
        </NavLink>
        <NavLink to="/pages-faqs-layout-2" onClick={hideMenuDetail}>
          <span className="la la-question-circle"></span>
          FAQs - Layout 2
        </NavLink>
        <NavLink to="/pages-invoice" onClick={hideMenuDetail}>
          <span className="la la-file-invoice-dollar"></span>
          Invoice
        </NavLink>
      </div>
    </div>
  );
};

const MenuDetailApplications = () => {
  const { isOpen, hideMenuDetail } = useContext(MenuBarContext);

  return (
    <div
      className={classNames("menu-detail", { open: isOpen("applications") })}
    >
      <div className="menu-detail-wrapper">
        <NavLink to="/applications-media-library" onClick={hideMenuDetail}>
          <span className="la la-image"></span>
          Media Library
        </NavLink>
        <NavLink to="/applications-point-of-sale" onClick={hideMenuDetail}>
          <span className="la la-shopping-bag"></span>
          Point Of Sale
        </NavLink>
        <NavLink to="/applications-to-do" onClick={hideMenuDetail}>
          <span className="la la-check-circle"></span>
          To Do
        </NavLink>
        <NavLink to="/applications-chat" onClick={hideMenuDetail}>
          <span className="la la-comment"></span>
          Chat
        </NavLink>
      </div>
    </div>
  );
};

const MenuDetailMenu = () => {
  const { isOpen } = useContext(MenuBarContext);

  const [menuType, switchMenuType] = useMenuType();

  const [menuGrandParentCollapse, setMenuGrandParentCollapse] = useState(true);
  const [menuParentCollapse, setMenuParentCollapse] = useState(true);

  const toggleMenuGrandParentCollapse = () => {
    setMenuGrandParentCollapse(!menuGrandParentCollapse);
  };
  const toggleMenuParentCollapse = () => {
    setMenuParentCollapse(!menuParentCollapse);
  };

  return (
    <div className={classNames("menu-detail", { open: isOpen("menu") })}>
      <div className="menu-detail-wrapper">
        <a href="#no-link">
          <span className="la la-cube"></span>
          Default
        </a>
        <a href="#no-link">
          <span className="la la-file-alt"></span>
          Content
        </a>
        <a href="#no-link">
          <span className="la la-shopping-bag"></span>
          Ecommerce
        </a>
        <hr />
        <a href="#no-link">
          <span className="la la-layer-group"></span>
          Main Level
        </a>
        <a href="#no-link">
          <span className="la la-arrow-circle-right"></span>
          Grand Parent
        </a>
        <button
          className={classNames("collapse-header", {
            active: menuGrandParentCollapse,
          })}
          onClick={() => toggleMenuGrandParentCollapse()}
        >
          <span className="collapsible-indicator la la-arrow-circle-down"></span>
          Grand Parent Open
        </button>
        <Collapse open={menuGrandParentCollapse}>
          <a href="#no-link">
            <span className="la la-layer-group"></span>
            Sub Level
          </a>
          <a href="#no-link">
            <span className="la la-arrow-circle-right"></span>
            Parent
          </a>
          <button
            className={classNames("collapsible-header", {
              active: menuParentCollapse,
            })}
            onClick={() => toggleMenuParentCollapse()}
          >
            <span className="collapsible-indicator la la-arrow-circle-down"></span>
            Parent Open
          </button>
          <Collapse open={menuParentCollapse}>
            <a href="#no-link">
              <span className="la la-layer-group"></span>
              Sub Level
            </a>
          </Collapse>
        </Collapse>
        <hr />
        <h6 className="uppercase">Menu Types</h6>
        <button onClick={() => switchMenuType("default")}>
          <span className="la la-hand-point-right"></span>
          Default
        </button>
        <button onClick={() => switchMenuType("hidden")}>
          <span className="la la-hand-point-left"></span>
          Hidden
        </button>
        <button onClick={() => switchMenuType("icon-only")}>
          <span className="la la-th-large"></span>
          Icon Only
        </button>
        <button onClick={() => switchMenuType("wide")}>
          <span className="la la-arrows-alt-h"></span>
          Wide
        </button>
      </div>
    </div>
  );
};
