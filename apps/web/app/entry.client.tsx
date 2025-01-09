import { setupI18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

startTransition(async () => {
	const i18n = setupI18n();

	const language = document.documentElement.lang;

	const { messages } =
		language === "en-US" ? await import("#app/locales/en-US.po") : await import("#app/locales/pl-PL.po");

	i18n.loadAndActivate({ locale: language, messages });

	hydrateRoot(
		document,
		<StrictMode>
			<I18nProvider i18n={i18n}>
				<HydratedRouter />
			</I18nProvider>
		</StrictMode>,
	);
});
