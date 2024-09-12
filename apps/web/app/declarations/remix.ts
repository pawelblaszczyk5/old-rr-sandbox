declare module "@remix-run/server-runtime" {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- augmenting global interface
	interface Future {
		unstable_singleFetch: true; // 👈 enable _types_ for single-fetch
	}
}
