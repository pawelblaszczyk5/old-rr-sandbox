export interface AppLoadContext {
	language: "en-US" | "pl-PL";
}

declare module "react-router" {
	interface AppLoadContext {
		language: "en-US" | "pl-PL";
	}
}
