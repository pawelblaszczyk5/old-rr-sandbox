import type config from "./tokenami.config.js";

export type Config = typeof config;

declare module "@tokenami/dev" {
	interface TokenamiConfig extends Config {
		CI: false;
	}
	interface TokenamiProperties {}
}
