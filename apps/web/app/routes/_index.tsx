import { useLoaderData } from "@remix-run/react";

export const loader = () => {
	return new Date();
};

const Route = () => {
	const x = useLoaderData<typeof loader>();

	return (
		<>
			<h1>Hello world {x.toISOString()}</h1>
			<title>New Remix App</title>
			<meta content="Welcome to remix!" name="description" />
		</>
	);
};

export default Route;
