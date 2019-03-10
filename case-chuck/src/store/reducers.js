import { combineReducers } from "redux";

import appReducer from "./reducers/app.reducers";
import authReducer from "./reducers/auth.reducers";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer
});

export default rootReducer;
