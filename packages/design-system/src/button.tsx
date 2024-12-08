import { useState } from "react";

import { css } from "@moneytor/css";

export const Button = () => {
	const [count, setCount] = useState(0);

	return (
		<button
			onClick={() => {
				setCount((count) => {
					return count + 1;
				});
			}}
			style={css({ "--background": "var(--color_gray6)" })}
			type="button"
		>
			Increase test: {count}
		</button>
	);
};
