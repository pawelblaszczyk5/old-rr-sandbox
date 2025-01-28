import core from "@moneytor/eslint-config/core";

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
	{
		files: ["src/entry.ts"],
		rules: {
			"import-x/no-default-export": "off",
		},
	},
];
