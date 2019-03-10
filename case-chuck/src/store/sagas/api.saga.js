import { takeLatest, fork, put } from "redux-saga/effects";

import {
  FETCH_TEN_JOKES,
  FETCH_SINGLE_JOKE,
  SUCCESS,
  REQUEST,
  ERROR
} from "_store/constants";

import api from "_services/api";

function* fetchTenJokes(action) {
  put({ type: FETCH_TEN_JOKES + REQUEST });
  try {
    const result = api.fetchRandomJokes(10);
    yield put({ type: FETCH_TEN_JOKES + SUCCESS, payload: result });
  } catch (err) {
    yield put({ type: FETCH_TEN_JOKES + ERROR, payload: err });
  }
}

function fetchSingleJoke(action) {
  console.log("fetchSingleJoke", action);
  api.fetchRandomJokes(1);
}

function* fetchJokes(action) {
  if (action.type === FETCH_SINGLE_JOKE) {
    yield fork(fetchSingleJoke, action);
  } else if (action.type === FETCH_TEN_JOKES) {
    yield fork(fetchTenJokes, action);
  }
}

export default function* apiSaga() {
  while (true) {
    yield takeLatest([FETCH_SINGLE_JOKE, FETCH_TEN_JOKES], fetchJokes);
    return;
  }
}
