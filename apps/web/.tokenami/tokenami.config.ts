import { config, createConfig } from "@moneytor/css/config";

export default createConfig({
	...config,
	include: ["./app/**/*.{ts,tsx}", "./node_modules/@moneytor/design-system/build/styles.css"],
});

declare module "@tokenami/dev" {
	interface TokenamiConfig {
		CI: false;
	}
}
