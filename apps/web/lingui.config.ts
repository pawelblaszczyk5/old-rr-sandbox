import { defineConfig } from "@lingui/conf";

export default defineConfig({
	catalogs: [
		{
			include: ["app"],
			path: "<rootDir>/app/locales/{locale}",
		},
	],
	locales: ["pl-PL", "en-US"],
	sourceLocale: "en-US",
});
