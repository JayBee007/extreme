/* eslint-disable import/prefer-default-export */
import color from "color";

export const home = theme => ({
  home: {
    flex: 1,
    background: color(theme.colors.orange)
      .lighten(0.2)
      .hex()
  }
});
