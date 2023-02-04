import { reducers as combineReducers } from "./index.reducers";
import { createStore } from "redux";

export const store = createStore(combineReducers);