import { useState } from "react";

import classNames from "classnames";
import { Link, Navigate, useNavigate } from "react-router-dom";

import Button from "components/Button";
import Input from "components/form/Input";
import Label from "components/form/Label";
import Switch from "components/form/Switch";
import Tooltip from "components/Tooltip";

import useDarkMode from "utilities/hooks/useDarkMode";
import useFullscreen from "utilities/hooks/useFullScreen";


import { authService } from "services/authService";
import { disableCursor } from "@fullcalendar/core/internal";

const ErrorLogin = () => {
  return (
    <small className="block mt-2 invalid-feedback">
      This is help text.
    </small>
  )
}

const ErrorUsername = () => {
  return (
    <small className="block mt-2 invalid-feedback">
      This is help text.
    </small>
  )
}


const ErrorPassword = () => {
  return (
    <small className="block mt-2 invalid-feedback">
      This is help text.
    </small>
  )
}

const AuthLogin = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [isFullscreen, toggleFullscreen] = useFullscreen();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState({ username: false, password: false, valid: { status: false, error: '' } })
  const navigate = useNavigate();


  const submitForm = (event) => {
    event.preventDefault()
    if (username && password) {

      const userData = { username, password }
      // const response = authService.login(userData);
      authService.login(userData)
        .then(res => {
          if (res.status === 200) {
            authService.setData(res.data)
            navigate('/')
          }
        })
        .catch(err => {
          setValidation({
            ...validation,
            valid: { status: true, error: err.code }
          })
        })

      // }

    }

  }

  const onChangeLogin = async (event) => {
    event.preventDefault();
    if (!event.target.value) {
      setValidation({
        ...validation,
        username: true
      })
    } else {
      setValidation({
        ...validation,
        username: false
      })
      setUsername(event.target.value)
    }
  }

  const onChangePassword = async (event) => {
    event.preventDefault();
    if (!event.target.value) {
      setValidation({
        ...validation,
        password: true
      })
    } else {
      setValidation({
        ...validation,
        password: false
      })
      setPassword(event.target.value)
    }
  }

  const valid_password = validation.password ? <small className="block mt-2 invalid-feedback">
    iltimos parol kiriting
  </small> : null

  const valid_username = validation.username ? <small className="block mt-2 invalid-feedback">
    iltimos login  kiriting
  </small> : null

  const valid_content = validation.valid.error === 'ERR_NETWORK' ? <small className="block mt-2 invalid-feedback">
    Tarmoqada muammo kelib chiqdi iltimos biroz o'tib qayta urinib ko'ring
  </small> : validation.valid.status ? <small className="block mt-2 invalid-feedback">
    Bunday foydalanuvchi topilmadi
  </small> : null


  return (
    <>
      {/* Top Bar */}
      <section className="top-bar">
        {/* Brand */}
        {/* <Link to="/"> */}
        <span className="brand">WS</span>
        {/* </Link> */}


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

          {/* Register */}
          {/* <Link
            to="/auth-register"
            className="btn btn_primary uppercase ltr:ml-5 rtl:mr-5"
          >
            Register
          </Link> */}
        </nav>
      </section>

      <div className="container flex items-center justify-center mt-20 py-10">
        <div className="w-full md:w-1/2 xl:w-1/3">
          <div className="mx-5 md:mx-10">
            {/* <h2 className="uppercase">Wagonlarnin</h2> */}
            <h4 className="uppercase">Tizimga kirish</h4>
          </div>
          <form className="card mt-5 p-5 md:p-10" onSubmit={submitForm}>
            <div className="mb-5">
              <Label className="block mb-2" htmlFor="username">
                Login
              </Label>
              <Input
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
                onChange={onChangeLogin}

                id="username" placeholder="login" />
              {valid_username}

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
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  onChange={onChangePassword}
                />
                <span className="flex items-center ltr:pr-4 rtl:pl-4">
                  <button
                    type="button"
                    className="text-gray-300 dark:text-gray-700 la la-eye text-xl leading-none"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  ></button>
                </span>
              </label>
              {valid_password}
              {valid_content}


            </div>
            <div className="flex items-center">
              {/* <Link to="/auth-forgot-password" className="text-sm uppercase">
                Forgot Password?
              </Link> */}
              <Button className="ltr:ml-auto rtl:mr-auto uppercase"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthLogin;
