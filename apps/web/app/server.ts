import { createHonoServer } from "react-router-hono-server/node";

export default await createHonoServer({
	defaultLogger: false,
	getLoadContext: () => {
		return { language: "en-US" };
	},
});
