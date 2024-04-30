import { useState, useEffect, Fragment } from "react";
import useEventListener from "@use-it/event-listener";
import { ConfigProps, VisibleProps } from "../../types";
import { getScreenClass } from "./screens";

export const Visible = ({
  xs,
  sm,
  md,
  lg,
  xl,
  children,
  theme
}: VisibleProps & ConfigProps) => {
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

  const isVisible = () => {
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
  if (!isVisible()) return false;
  return <Fragment>{children}</Fragment>;
};
