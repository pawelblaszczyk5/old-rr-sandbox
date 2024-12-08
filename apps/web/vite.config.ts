import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";

export default defineConfig({
	plugins: [
		reactRouter(),
		babel({
			babelConfig: {
				plugins: [
					["babel-plugin-react-compiler", {}],
					["@babel/plugin-syntax-jsx", {}],
				],
				presets: ["@babel/preset-typescript"],
			},
			filter: /\.[jt]sx?$/u,
			loader: "jsx",
		}),
	],
});
