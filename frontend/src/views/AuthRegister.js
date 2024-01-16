import { useState } from "react";

import classNames from "classnames";
import { Link } from "react-router-dom";

import Button from "components/Button";
import Input from "components/form/Input";
import Label from "components/form/Label";
import Switch from "components/form/Switch";
import Tooltip from "components/Tooltip";

import useDarkMode from "utilities/hooks/useDarkMode";
import useFullscreen from "utilities/hooks/useFullScreen";

const AuthRegister = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [isFullscreen, toggleFullscreen] = useFullscreen();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <section className="top-bar">
        {/* Brand */}
        <span className="brand">Yeti</span>

        <nav className="flex items-center ltr:ml-auto rtl:mr-auto">
          {/* Dark Mode */}
          <Tooltip content="Toggle Dark Mode">
            <Switch
              outlined
              checked={darkMode}
              onChange={() => toggleDarkMode()}
            />
          </Tooltip>

          {/* Fullscreen */}
          <Tooltip content="Fullscreen">
            <button
              className={classNames(
                "hidden lg:inline-block ltr:ml-3 rtl:mr-3 px-2 text-2xl leading-none la",
                {
                  "la-compress-arrows-alt": isFullscreen,
                  "la-expand-arrows-alt": !isFullscreen,
                }
              )}
              onClick={toggleFullscreen}
            ></button>
          </Tooltip>

          {/* Login */}
          <Link
            to="/auth-login"
            className="btn btn_primary uppercase ltr:ml-5 rtl:mr-5"
          >
            Login
          </Link>
        </nav>
      </section>

      <div className="container flex items-center justify-center mt-20 py-10">
        <div className="w-full md:w-1/2 xl:w-1/3">
          <div className="mx-5 md:mx-10">
            <h2 className="uppercase">Create Your Account</h2>
            <h4 className="uppercase">Let's Roll</h4>
          </div>
          <form className="card mt-5 p-5 md:p-10">
            <div className="mb-5">
              <Label className="block mb-2" htmlFor="name">
                Name
              </Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="mb-5">
              <Label className="block mb-2" htmlFor="email">
                Email
              </Label>
              <Input id="email" placeholder="example@example.com" />
            </div>
            <div className="mb-5">
              <Label className="block mb-2" htmlFor="password">
                Password
              </Label>
              <label className="form-control-addon-within">
                <Input
                  id="password"
                  type={isPasswordVisible ? "text" : "password"}
                  className="border-none"
                  defaultValue="12345"
                />
                <span className="flex items-center ltr:pr-4 rtl:pl-4">
                  <button
                    type="button"
                    className="text-gray-300 dark:text-gray-700 la la-eye text-xl leading-none"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  ></button>
                </span>
              </label>
            </div>
            <div className="flex">
              <Button className="ltr:ml-auto rtl:mr-auto uppercase">
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthRegister;
