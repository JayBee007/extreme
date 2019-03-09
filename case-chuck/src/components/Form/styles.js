/* eslint-disable import/prefer-default-export */
import color from "color";

export const form = theme => ({
  formContainer: {
    background: color(theme.colors.purple)
      .darken(0.05)
      .hex(),
    width: "35rem",
    padding: "2.5rem",
    fontSize: "1.8rem",
    color: theme.colors.white,
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  }
});
