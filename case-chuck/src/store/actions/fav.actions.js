/* eslint-disable import/prefer-default-export */
import { ADD_FAV, REMOVE_FAV } from "_store/constants";

export const addFav = joke => ({
  type: ADD_FAV,
  joke
});

export const removeFav = joke => ({
  type: REMOVE_FAV,
  joke
});
