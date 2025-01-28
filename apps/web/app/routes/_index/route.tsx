import { Trans, useLingui } from "@lingui/react/macro";

import { Button } from "@moneytor/design-system/button";
import stylex from "@moneytor/stylex";
import { colors } from "@moneytor/theme/colors.stylex";

import type { Route } from "./+types/route.js";

export const loader = () => {
	return new Date();
};

const styles = stylex.create({
	testHeading: {
		color: {
			":hover": colors.primary,
			default: colors.secondary,
		},
	},
});

const HomeRoute = ({ loaderData }: Readonly<Route.ComponentProps>) => {
	const { i18n, t } = useLingui();

	return (
		<>
			<h1 {...stylex.props(styles.testHeading)}>
				<Trans>Hello world {i18n.date(loaderData)}</Trans>
			</h1>
			<Button />
			<title>{t`Moneytor - awesome expense tracker`}</title>
			<meta content="Welcome to React Router!" name="description" />
		</>
	);
};

export default HomeRoute;
