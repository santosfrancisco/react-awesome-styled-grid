/* eslint-disable @typescript-eslint/consistent-type-definitions */
// import original module declarations
import "styled-components";
import { Config } from ".";
import { CUSTOM_CONF } from "../lib/config";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    [CUSTOM_CONF]: Partial<Config>;
  }
}
