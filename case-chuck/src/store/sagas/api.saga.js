import { takeLatest, fork, put, call /*select */ } from "redux-saga/effects";

import {
  FETCH_TEN_JOKES,
  FETCH_SINGLE_JOKE,
  SUCCESS,
  REQUEST,
  ERROR,
  RESET
} from "_store/constants";

import api from "_services/api";

// const getFav = state => state.fav.fav;

function makeApiCall(num) {
  return api.fetchRandomJokes(num);
}

function* fetchTenJokes(action) {
  yield put({ type: FETCH_TEN_JOKES + REQUEST });
  yield put({ type: FETCH_SINGLE_JOKE + RESET });
  try {
    const response = yield call(makeApiCall, 10);
    yield put({
      type: FETCH_TEN_JOKES + SUCCESS,
      payload: response.data.value
    });
  } catch (err) {
    yield put({ type: FETCH_TEN_JOKES + ERROR, payload: err });
  }
}

function* fetchSingleJoke(action) {
  yield put({ type: FETCH_SINGLE_JOKE + REQUEST });
  yield put({ type: FETCH_TEN_JOKES + RESET });
  try {
    const response = yield call(makeApiCall, 1);

    yield put({
      type: FETCH_SINGLE_JOKE + SUCCESS,
      payload: response.data.value[0]
    });
  } catch (err) {
    yield put({ type: FETCH_SINGLE_JOKE + ERROR, payload: err });
  }
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
