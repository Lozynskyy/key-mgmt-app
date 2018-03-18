import {applyMiddleware, compose, createStore} from "redux";
import actions from "../logic/index";
import {middleware} from "./history";
import {createLogicMiddleware} from "redux-logic";
import allReducers from "../reducers";

const logicMiddleware = createLogicMiddleware(actions);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store=createStore(allReducers, composeEnhancers(applyMiddleware(middleware),applyMiddleware(logicMiddleware)));
console.log(store.getState());
