import { useLoaderData } from "@remix-run/react";

import { css } from "@moneytor/css";

export const loader = () => {
	return new Date();
};

const Route = () => {
	const x = useLoaderData<typeof loader>();

	return (
		<>
			<h1 style={css({ "--color": "var(--color_test)", "--hover_color": "var(---, red)" })}>
				Hello world {x.toISOString()}
			</h1>
			<title>New Remix App</title>
			<meta content="Welcome to remix!" name="description" />
		</>
	);
};

export default Route;
