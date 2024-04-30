import React from "react";
import { ThemeProvider } from "styled-components";
import {
  Container,
  Row,
  Col,
  Visible,
  Hidden,
  ScreenClass,
  ScreenBadge,
  config,
  util
} from "../../../lib";

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ThemeProvider,
  Container,
  Row,
  Col,
  Visible,
  Hidden,
  ScreenClass,
  ScreenBadge,
  config,
  util
};

export default ReactLiveScope;
