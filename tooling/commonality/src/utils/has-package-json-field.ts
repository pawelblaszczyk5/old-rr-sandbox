import type { Check, PackageJson } from "commonality";

import { json } from "commonality";

export const hasPackageJsonField = (name: string) => {
	return {
		level: "error",
		message: `Package must have a "${name}" field in package.json`,
		validate: async (ctx) => {
			const packageJson = await json<PackageJson>(ctx.package.path, "package.json").get();

			if (!packageJson) {
				return false;
			}

			const fieldValue = packageJson[name];

			return typeof fieldValue === "string" && fieldValue.length > 0;
		},
	} satisfies Check;
};
