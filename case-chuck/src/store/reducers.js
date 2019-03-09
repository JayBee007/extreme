import { combineReducers } from "redux";

import appReducer from "./reducers/app.reducers";

const rootReducer = combineReducers({
  app: appReducer
});

export default rootReducer;
