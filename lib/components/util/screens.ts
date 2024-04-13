import { ConfigProps, GridBreakpoints } from "@site/types";
import config, { DIMENSIONS } from "../../config";

export function getViewPort() {
  if (typeof window !== "undefined" && window.innerWidth) {
    return window.innerWidth;
  }
  return null;
}

export function getScreenClass(props?: ConfigProps) {
  const screenClasses = DIMENSIONS;
  const breakpoints = config(props).breakpoints;

  const rootFont =
    typeof window !== "undefined"
      ? +window
          .getComputedStyle(document.querySelector("html"))
          .getPropertyValue("font-size")
          .replace("px", "") || 16
      : 16;

  const pxBreakpoints = Object.values(breakpoints).map((bp) => bp * rootFont);

  let screenClass: GridBreakpoints;
  const viewport = getViewPort();
  if (viewport) {
    screenClass = screenClasses[0];
    if (pxBreakpoints[1] && viewport >= pxBreakpoints[1])
      screenClass = screenClasses[1];
    if (pxBreakpoints[2] && viewport >= pxBreakpoints[2])
      screenClass = screenClasses[2];
    if (pxBreakpoints[3] && viewport >= pxBreakpoints[3])
      screenClass = screenClasses[3];
    if (pxBreakpoints[4] && viewport >= pxBreakpoints[4])
      screenClass = screenClasses[4];
  }
  return screenClass;
}
