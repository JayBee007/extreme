/* eslint-disable import/prefer-default-export */
export const input = theme => ({
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1.5rem"
  },
  inputLabel: {
    paddingBottom: "0.2rem",
    letterSpacing: "0.2rem"
  },
  input: {
    display: "inline-block",
    height: "3.8rem",
    fontSize: "inherit",
    padding: "0.5rem",
    border: "none",
    background: theme.colors.white
  },
  inputError: {
    display: "inline-block",
    fontSize: "1.2rem",
    color: theme.colors.red,
    height: "1.3rem"
  }
});
