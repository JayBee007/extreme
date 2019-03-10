import { all } from "redux-saga/effects";

import apiSaga from "./sagas/api.saga";

function* rootSaga() {
  yield all([apiSaga()]);
}
export default rootSaga;
