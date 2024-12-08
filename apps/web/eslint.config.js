import core from "@moneytor/eslint-config/core";
import react from "@moneytor/eslint-config/react";
import node from "@moneytor/eslint-config/node";

export default [
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		ignores: [".tokenami/tokenami.env.d.ts"],
	},
	...core,
	...react,
	...node,
	{
		files: ["vite.config.ts", "react-router.config.ts", "app/routes.ts", ".tokenami/tokenami.config.ts"],
		rules: {
			"import-x/no-default-export": "off",
		},
	},
	{
		files: [".tokenami/tokenami.env.d.ts"],
		rules: {
			"@typescript-eslint/no-empty-object-type": "off",
		},
	},
	{
		files: ["app/routes/**/*.tsx", "app/root.tsx"],
		rules: {
			"import-x/no-default-export": "off",
			"react-refresh/only-export-components": [
				"error",
				{
					allowConstantExport: true,
					allowExportNames: ["meta", "links", "headers", "loader", "action", "clientLoader", "clientAction"],
				},
			],
		},
	},
	{
		rules: {
			"unicorn/prevent-abbreviations": [
				"error",
				{
					allowList: {
						env: true,
						rel: true,
					},
					checkProperties: true,
					checkShorthandProperties: true,
				},
			],
		},
	},
];
