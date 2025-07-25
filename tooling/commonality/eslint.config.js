import core from "@moneytor/eslint-config/core";
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
	...node,
	{
		files: ["src/*.ts"],
		rules: {
			"import-x/no-default-export": "off",
		},
	},
	{
		rules: {
			"unicorn/prevent-abbreviations": [
				"error",
				{
					allowList: {
						ctx: true,
					},
					checkProperties: true,
					checkShorthandProperties: true,
				},
			],
		},
	},
];
