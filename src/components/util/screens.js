import { DIMENSIONS, BREAKPOINTS } from '../../config'

export function getViewPort () {
  if (typeof window !== 'undefined' && window.innerWidth) {
    return window.innerWidth
  }
  return null
};

const theBreakpoints = BREAKPOINTS
const theScreenClasses = DIMENSIONS

export function getScreenClass () {
  let screenClass
  const viewport = getViewPort()
  if (viewport) {
    screenClass = theScreenClasses[0]
    if (theBreakpoints[1] && viewport >= theBreakpoints[1]) screenClass = theScreenClasses[1]
    if (theBreakpoints[2] && viewport >= theBreakpoints[2]) screenClass = theScreenClasses[2]
    if (theBreakpoints[3] && viewport >= theBreakpoints[3]) screenClass = theScreenClasses[3]
    if (theBreakpoints[4] && viewport >= theBreakpoints[4]) screenClass = theScreenClasses[4]
  }
  return screenClass
};
