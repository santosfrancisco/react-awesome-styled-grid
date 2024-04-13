import React, { useState, useEffect } from "react";
import useEventListener from "@use-it/event-listener";
import { useTheme } from "styled-components";
import { getScreenClass } from "./screens";
import { HiddenProps } from "../../../types";

export const Hidden = ({ xs, sm, md, lg, xl, children }: HiddenProps) => {
  const theme = useTheme();
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
  return <React.Fragment>{children}</React.Fragment>;
};
