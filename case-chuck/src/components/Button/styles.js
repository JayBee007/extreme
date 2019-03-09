/* eslint-disable import/prefer-default-export */
import color from "color";

export const btn = theme => ({
  btn: {
    fontSize: "1.6rem",
    padding: "1rem 1.5rem",
    color: theme.colors.white,
    backgroundColor: ({ color: clr }) => theme.colors[clr],
    borderColor: ({ color: clr }) => theme.colors[clr],
    fontWeight: "bold",
    borderRadius: "0.2rem",
    transition: "all .15s ease-in-out",
    "&:hover": {
      backgroundColor: ({ color: clr }) =>
        color(theme.colors[clr])
          .darken(0.2)
          .hex(),
      borderColor: ({ color: clr }) =>
        color(theme.colors[clr])
          .darken(0.2)
          .hex()
    }
  }
});
