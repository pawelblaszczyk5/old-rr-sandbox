import { lingui } from "@lingui/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";
import { reactRouterHonoServer } from "react-router-hono-server/dev";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";

export default defineConfig({
	plugins: [
		reactRouterHonoServer(),
		reactRouter(),
		babel({
			babelConfig: {
				plugins: [
					["@lingui/babel-plugin-lingui-macro", {}],
					["babel-plugin-react-compiler", {}],
					["@babel/plugin-syntax-jsx", {}],
				],
				presets: ["@babel/preset-typescript"],
			},
			filter: /\.[jt]sx?$/u,
			loader: "jsx",
		}),
		lingui(),
	],
});
