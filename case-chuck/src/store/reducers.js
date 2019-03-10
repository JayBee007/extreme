import { combineReducers } from "redux";

import appReducer from "./reducers/app.reducers";
import authReducer from "./reducers/auth.reducers";
import apiReducer from "./reducers/api.reducers";
import favReducer from "./reducers/fav.reducers";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  jokes: apiReducer,
  fav: favReducer
});

export default rootReducer;
