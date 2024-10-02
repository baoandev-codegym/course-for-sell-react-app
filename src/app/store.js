import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = configureStore(
  {
    reducer: {},
  },
  composeEnhancers(applyMiddleware())
);
