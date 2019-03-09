/* eslint-disable import/prefer-default-export */
export const navBar = theme => ({
  nav: {
    height: "6.6rem",
    background: theme.colors.darkBlue,
    display: "flex",
    alignItems: "center"
  },
  navContent: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
    display: "flex",
    flexGrow: 1
  }
});

export const navBarRight = {
  navBarRight: {
    marginLeft: "auto"
  }
};
