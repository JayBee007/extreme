/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";

export const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["app", "jokes"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(
    persistedReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware)
      // window.__REDUX_DEVTOOLS_EXTENSION__ &&
      //   window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
