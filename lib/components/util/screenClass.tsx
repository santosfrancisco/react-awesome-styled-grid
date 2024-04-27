import { useCallback, useEffect, useState, ReactNode, Fragment } from "react";
import { getScreenClass } from "./screens";
import { ConfigProps } from "../../types";
import { DIMENSIONS } from "../../config";

type ScreenClassProps = {
  render: (screen: string) => ReactNode;
};

export const ScreenClass = (props: ScreenClassProps & ConfigProps) => {
  const [currentScreen, setCurrentScreen] = useState(DIMENSIONS[0]);

  const setScreen = useCallback(() => {
    const lastScreenClass = currentScreen;
    const newScreenClass = getScreenClass(props);
    if (lastScreenClass !== newScreenClass) {
      setCurrentScreen(newScreenClass);
    }
  }, [currentScreen]);

  useEffect(() => {
    setScreen();
  }, []);

  useEffect(() => {
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
  }, [currentScreen]);

  return <Fragment>{props?.render(currentScreen)}</Fragment>;
};
