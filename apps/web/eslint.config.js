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
		files: ["vite.config.ts"],
		rules: {
			"import-x/no-default-export": "off",
		},
	},
	{
		files: ["app/routes/**/*.tsx", "app/root.tsx", "app/entry.server.tsx"],
		rules: {
			"import-x/no-default-export": "off",
			"react-refresh/only-export-components": [
				"warn",
				{
					allowConstantExport: true,
					allowExportNames: ["meta", "links", "headers", "loader", "action", "clientLoader", "clientAction"],
				},
			],
		},
	},
];
