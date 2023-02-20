import { reducers as combineReducers } from "./index.reducers";
import { createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core"
import { applyMiddleware } from "redux"
import { allSagasWatcher } from "./index.saga"

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(combineReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(allSagasWatcher);