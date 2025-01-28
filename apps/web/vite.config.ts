import { lingui } from "@lingui/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";
import stylexPlugin from "@stylexjs/postcss-plugin";
import { reactRouterHonoServer } from "react-router-hono-server/dev";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";

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
				stylexPlugin({
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
