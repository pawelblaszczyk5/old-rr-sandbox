import { createCss } from "@tokenami/css";

import { config } from "./config.js";

export const css = createCss(config, { escapeSpecialChars: false });

export type { TokenamiProperties } from "@tokenami/css";

export type { TokenamiPropertiesOmit, TokenamiPropertiesPick } from "@tokenami/dev";
