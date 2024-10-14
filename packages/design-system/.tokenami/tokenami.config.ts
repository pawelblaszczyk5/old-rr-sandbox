import { createConfig } from "@tokenami/css";

import { config } from "@moneytor/css/config";

export default createConfig({
	...config,
	include: ["./src/**/*.{ts,tsx}"],
});
