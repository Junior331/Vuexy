import { generateMedia } from "styled-media-query";

type BreakpointsType = {
  huge: string;
  large: string;
  medium: string;
  small: string;
};

export const breakpoints = {
  huge: "1439px",
  large: "1170px",
  medium: "768px",
  small: "576px",
};

const media = generateMedia<BreakpointsType>(breakpoints);

export default media;
