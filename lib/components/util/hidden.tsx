import { useState, useEffect, Fragment } from "react";
import useEventListener from "@use-it/event-listener";
import { getScreenClass } from "./screens";
import { ConfigProps, HiddenProps } from "../../types";

export const Hidden = ({
  xs,
  sm,
  md,
  lg,
  xl,
  children,
  theme
}: HiddenProps & ConfigProps) => {
  const [currentScreen, setCurrentScreen] = useState("xs");

  const setScreen = () => {
    const newScreen = getScreenClass({ theme });
    if (currentScreen !== newScreen) {
      setCurrentScreen(newScreen);
    }
  };
  useEffect(() => {
    setScreen();
  }, []);

  useEventListener("orientationchange", setScreen);
  useEventListener("resize", setScreen);

  const isHidden = () => {
    switch (currentScreen) {
      case "xs":
        return xs;
      case "sm":
        return sm;
      case "md":
        return md;
      case "lg":
        return lg;
      case "xl":
        return xl;
    }
  };
  if (isHidden()) return false;
  return <Fragment>{children}</Fragment>;
};
