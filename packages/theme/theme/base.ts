import { breakpoints, mediaQueries } from "../css/breakpoints";
import { vars } from "../css/vars.css";

export default {
  breakpoints: Object.values(breakpoints).map((bp) => `${bp}px`),
  mediaQueries,
  spacing: vars.space,
  shadows: vars.shadows,
  radii: vars.radii,
  zIndices: { ribbon: 9, dropdown: 10, modal: 100 },
  borders: vars.borders,
};
