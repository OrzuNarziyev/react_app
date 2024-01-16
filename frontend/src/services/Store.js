import { createStore } from "@reduxjs/toolkit";

import rootReducer from "reducers";

export const configureStore = (initialState) => {
  return createStore(rootReducer, initialState);
};

const Store = configureStore();

export default Store;
