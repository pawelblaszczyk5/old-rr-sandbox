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
	...core,
	...react,
	...node,
	{
		files: [
			"vite.config.ts",
			"react-router.config.ts",
			"lingui.config.ts",
			"app/routes.ts",
			"app/server.ts",
			"app/entry.server.tsx",
		],
		rules: {
			"import-x/no-default-export": "off",
		},
	},
	{
		files: ["app/routes/**/route.tsx", "app/root.tsx"],
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
			"@typescript-eslint/no-restricted-imports": [
				"error",
				{
					patterns: [
						{
							regex: "^\\.(?!\\/\\+types)",
							message: "Don't use relative imports",
						},
					],
				},
			],
		},
	},
];
