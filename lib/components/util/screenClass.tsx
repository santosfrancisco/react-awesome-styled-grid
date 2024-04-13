import React, { useCallback, useEffect, useState } from "react";
import { getScreenClass } from "./screens";
import { useTheme } from "styled-components";

type ScreenClassProps = {
  render: (screen: string) => React.ReactNode;
};

export const ScreenClass = (props: ScreenClassProps) => {
  const theme = useTheme();
  const [currentScreen, setCurrentScreen] = useState("xs");

  const setScreen = useCallback(() => {
    const lastScreenClass = currentScreen;
    const newScreenClass = getScreenClass({ theme });
    if (!lastScreenClass || lastScreenClass !== newScreenClass) {
      setCurrentScreen(newScreenClass);
    }
  }, []);

  useEffect(() => {
    setScreen();
    if (typeof window !== "undefined") {
      window.addEventListener("orientationchange", setScreen, false);
      window.addEventListener("resize", setScreen, false);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("orientationchange", setScreen);
        window.removeEventListener("resize", setScreen);
      }
    };
  }, []);

  return <React.Fragment>{props?.render(currentScreen)}</React.Fragment>;
};
