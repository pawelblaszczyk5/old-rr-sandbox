import { Outlet, Scripts, ScrollRestoration } from "react-router";

import tokenamiStylesheet from "#app/styles.css?url";

export const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<html lang="en">
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
