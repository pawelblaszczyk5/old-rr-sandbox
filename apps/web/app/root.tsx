import type { LinksFunction } from "@remix-run/node";

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import tokenamiStylesheet from "./styles.css?url";

export const links = (() => {
	return [
		{
			href: tokenamiStylesheet,
			rel: "stylesheet",
		},
	];
}) satisfies LinksFunction;

export const Layout = ({ children }: { readonly children: React.ReactNode }) => {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<Meta />
				<Links />
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
