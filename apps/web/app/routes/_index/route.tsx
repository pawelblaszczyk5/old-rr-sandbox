import { css } from "@moneytor/css";
import { Button } from "@moneytor/design-system/button";

import type { Route } from "./+types/route.js";

export const loader = () => {
	return new Date();
};

const HomeRoute = ({ loaderData }: Readonly<Route.ComponentProps>) => {
	return (
		<>
			<h1 style={css({ "--color": "var(--color_blue12)", "--hover_color": "var(---, red)" })}>
				Hello world {loaderData.toISOString()}
			</h1>
			<Button />
			<title>New React Router App</title>
			<meta content="Welcome to React Router!" name="description" />
		</>
	);
};

export default HomeRoute;
