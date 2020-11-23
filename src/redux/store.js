import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import rootReducer from "./root-reducer";
const middlewares = [logger];
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)
    // other store enhancers if any
  )
);
export default store;
