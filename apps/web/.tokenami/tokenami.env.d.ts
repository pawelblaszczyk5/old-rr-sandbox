import type config from "./tokenami.config.js";

type Config = typeof config;

declare module "@tokenami/dev" {
	interface TokenamiConfig extends Config {}
	interface TokenamiProperties {}
}
