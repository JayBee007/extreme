import { take, fork } from "redux-saga/effects";

function logSaga(action) {
  console.log("log", action);
}

export default function* authSaga() {
  while (true) {
    const action = yield take("*", logSaga);
    yield fork(logSaga, action);
  }
}
