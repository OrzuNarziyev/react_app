import React from "react";
import { Provider } from "react-redux";
import "./App.css";

import Router from "./routesCustom";
import Store from "./services/Store";

const App = () => {
  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  );
};

export default App;
