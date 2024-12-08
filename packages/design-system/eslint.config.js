import core from "@moneytor/eslint-config/core";
import react from "@moneytor/eslint-config/react";

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
	{
		files: [".tokenami/tokenami.config.ts"],
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
		rules: {
			"unicorn/prevent-abbreviations": [
				"error",
				{
					allowList: {
						env: true,
					},
					checkProperties: true,
					checkShorthandProperties: true,
				},
			],
		},
	},
];
