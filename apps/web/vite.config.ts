import type { CSSOptions } from "vite";

import { lingui } from "@lingui/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";
// @ts-expect-error - untyped module
import stylexPlugin from "@stylexjs/postcss-plugin";
import { reactRouterHonoServer } from "react-router-hono-server/dev";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";

type PostCSSPlugin = NonNullable<Extract<CSSOptions["postcss"], { plugins?: Array<any> }>["plugins"]>[number];

const typedStylexPlugin = stylexPlugin as (options: {
	babelConfig?: any;
	cwd?: string;
	exclude?: Array<string>;
	include?: Array<string>;
	useCSSLayers?: boolean;
}) => PostCSSPlugin;

const babelConfig = {
	plugins: [
		["@lingui/babel-plugin-lingui-macro", {}],
		["babel-plugin-react-compiler", {}],
		["@babel/plugin-syntax-jsx", {}],
		[
			"@stylexjs/babel-plugin",
			{
				genConditionalClasses: true,
				importSources: ["@moneytor/stylex"],
				runtimeInjection: false,
				treeshakeCompensation: true,
				unstable_moduleResolution: {
					type: "commonJS",
				},
			},
		],
	],
	presets: ["@babel/preset-typescript"],
};

export default defineConfig({
	css: {
		postcss: {
			plugins: [
				typedStylexPlugin({
					babelConfig: {
						babelrc: false,
						...babelConfig,
					},
					include: ["./app/**/*.{js,jsx,ts,tsx}", "./node_modules/@moneytor/*/build/src/**/*.{js,jsx}"],
					useCSSLayers: true,
				}),
			],
		},
	},
	plugins: [
		reactRouterHonoServer(),
		reactRouter(),
		babel({
			babelConfig,
			filter: /\.[jt]sx?$/u,
			loader: "jsx",
		}),
		lingui(),
	],
});
