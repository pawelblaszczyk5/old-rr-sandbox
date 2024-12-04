import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";

export default defineConfig({
	plugins: [
		remix({
			future: {
				unstable_optimizeDeps: true,
				v3_fetcherPersist: true,
				v3_lazyRouteDiscovery: true,
				v3_relativeSplatPath: true,
				v3_singleFetch: true,
				v3_throwAbortReason: true,
			},
		}),
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
