/* eslint-disable import/prefer-default-export */

export const layout = {
  layout: {
    display: "flex",
    minHeight: "100%",
    flexDirection: "column"
  }
};

export const content = {
  content: {
    display: "flex",
    flex: 1
  }
};

export const modal = theme => ({
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  btnGroup: {
    display: "flex",
    width: "270px",
    justifyContent: "space-between"
  }
});
