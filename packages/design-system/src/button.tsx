import { useState } from "react";

import stylex from "@moneytor/stylex";
import { colors } from "@moneytor/theme/colors.stylex";

const styles = stylex.create({
	button: {
		backgroundColor: "#aeaeae",
		border: "none",
		color: colors.primary,
	},
});

export const Button = () => {
	const [count, setCount] = useState(0);

	return (
		<button
			onClick={() => {
				setCount((count) => {
					return count + 1;
				});
			}}
			type="button"
			{...stylex.props(styles.button)}
		>
			Increase test: {count}
		</button>
	);
};
