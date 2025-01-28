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
	...core,
	...react,
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
