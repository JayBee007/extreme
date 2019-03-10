import { FETCH_TEN_JOKES, FETCH_SINGLE_JOKE } from "_store/constants";

export const fetchTenJokes = () => ({
  type: FETCH_TEN_JOKES
});

export const fetchSingleJoke = () => ({
  type: FETCH_SINGLE_JOKE
});
