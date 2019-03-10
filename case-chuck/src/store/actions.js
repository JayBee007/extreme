/* eslint-disable import/prefer-default-export */
import { toggleLoginModal } from "./actions/app.actions";
import { login, logout } from "./actions/auth.actions";
import { fetchTenJokes, fetchSingleJoke } from "./actions/api.actions";
import { addFav, removeFav } from "./actions/fav.actions";

export {
  toggleLoginModal,
  login,
  logout,
  fetchTenJokes,
  fetchSingleJoke,
  addFav,
  removeFav
};
