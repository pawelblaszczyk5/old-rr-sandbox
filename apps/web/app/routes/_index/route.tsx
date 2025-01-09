import { Trans, useLingui } from "@lingui/react/macro";

import { css } from "@moneytor/css";
import { Button } from "@moneytor/design-system/button";

import type { Route } from "./+types/route.js";

export const loader = () => {
	return new Date();
};

const HomeRoute = ({ loaderData }: Readonly<Route.ComponentProps>) => {
	const { i18n, t } = useLingui();

	return (
		<>
			<h1 style={css({ "--color": "var(--color_blue12)", "--hover_color": "var(---, red)" })}>
				<Trans>Hello world {i18n.date(loaderData)}</Trans>
			</h1>
			<Button />
			<title>{t`Moneytor - awesome expense tracker`}</title>
			<meta content="Welcome to React Router!" name="description" />
		</>
	);
};

export default HomeRoute;
