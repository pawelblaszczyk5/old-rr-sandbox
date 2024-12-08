import type { Check } from "commonality";

import { json } from "commonality";

export const hasScript = (name: string) => {
	return {
		level: "error",
		message: `Package must have a "${name}" script in package.json`,
		validate: async (ctx) => {
			const packageJson = await json(ctx.package.path, "package.json").get();

			if (!packageJson) {
				return false;
			}

			const scripts = packageJson["scripts"] as Record<string, string>;

			return name in scripts;
		},
	} satisfies Check;
};
