import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
//reducers
import { reducers } from "./index.reducers";
// List of middleware
import middleware, { sagaMiddleware } from "./index.middleware";
//sagas
import sagas from "./index.sagas";

const env = "development";

const isDevelopment = env === "development";

const enhancer =
  (isDevelopment ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) ||
  compose;

 const store = createStore(
  reducers,
  {},
  enhancer(applyMiddleware(...middleware))
);

sagaMiddleware.run(sagas);

export default store;