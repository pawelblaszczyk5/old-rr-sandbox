import { Outlet, Scripts, ScrollRestoration, useRouteLoaderData } from "react-router";

import type { Route } from "./+types/root.js";

import tokenamiStylesheet from "#app/styles.css?url";

export const loader = ({ context }: Route.LoaderArgs) => {
	return {
		language: context.language,
	};
};

export const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	const data = useRouteLoaderData<unknown>("root") as Route.ComponentProps["loaderData"] | undefined;

	return (
		<html lang={data?.language ?? "en-US"}>
			<head>
				<meta charSet="utf-8" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link href={tokenamiStylesheet} rel="stylesheet" />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
};

const RootLayout = () => {
	return <Outlet />;
};

export default RootLayout;
