import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

export default () => {
  const store = createStore(
    combineReducers({}),
    compose(applyMiddleware(thunk))
  );

  return store;
};
