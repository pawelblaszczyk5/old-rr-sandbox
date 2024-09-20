declare module "@remix-run/node" {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- augmenting global interface
	interface Future {
		unstable_singleFetch: true;
	}
}
