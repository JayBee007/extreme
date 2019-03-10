/* eslint-disable import/prefer-default-export */
export const cardStyles = theme => ({
  card: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    wordWrap: "break-word",
    backgroundColor: theme.colors.white,
    backgroundClip: "border-box",
    border: "1px solid rgba(0,0,0,.125)",
    borderRadius: ".25rem",
    width: "30%",
    marginBottom: "1.5rem",
    fontSize: "2rem",
    padding: "0.8rem"
  },
  icon: {
    marginTop: "auto",
    marginLeft: "auto"
  }
});
