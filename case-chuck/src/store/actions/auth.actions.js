/* eslint-disable import/prefer-default-export */
import { LOGIN, LOGOUT } from "../constants";

export const login = () => ({
  type: LOGIN
});

export const logout = () => ({
  type: LOGOUT
});
