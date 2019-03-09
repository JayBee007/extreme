/* eslint-disable import/prefer-default-export */
import color from "color";

export const btn = theme => ({
  btn: {
    fontSize: "1.6rem",
    padding: "1rem 1.5rem",
    color: theme.colors.white,
    backgroundColor: theme.colors.green,
    borderColor: theme.colors.green,
    fontWeight: "bold",
    borderRadius: "0.2rem",
    transition: "all .15s ease-in-out",
    "&:hover": {
      backgroundColor: color(theme.colors.green)
        .darken(0.2)
        .hex(),
      borderColor: color(theme.colors.green)
        .darken(0.2)
        .hex()
    }
  }
});
