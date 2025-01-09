import type { RenderToPipeableStreamOptions } from "react-dom/server";
import type { HandleDocumentRequestFunction } from "react-router";

import { createReadableStreamFromReadable } from "@react-router/node";
import { isbot } from "isbot";
import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { ServerRouter } from "react-router";

export const streamTimeout = 5_000;

const handleRequest = (async (request, responseStatusCode, responseHeaders, routerContext) => {
	return new Promise((resolve, reject) => {
		let statusToSend = responseStatusCode;
		let shellRendered = false;
		const userAgent = request.headers.get("user-agent");

		const readyOption: keyof RenderToPipeableStreamOptions =
			(userAgent && isbot(userAgent)) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";

		const { abort, pipe } = renderToPipeableStream(<ServerRouter context={routerContext} url={request.url} />, {
			onError: (error: unknown) => {
				statusToSend = 500;

				if (shellRendered) {
					// eslint-disable-next-line no-console -- fine for now, it's for errors during streaming after initial request
					console.error(error);
				}
			},
			onShellError: (error: unknown) => {
				reject(error instanceof Error ? error : new Error("Unexpected error occurred", { cause: error }));
			},
			[readyOption]: () => {
				shellRendered = true;
				const body = new PassThrough();
				const stream = createReadableStreamFromReadable(body);

				responseHeaders.set("Content-Type", "text/html");

				resolve(
					new Response(stream, {
						headers: responseHeaders,
						status: statusToSend,
					}),
				);

				pipe(body);
			},
		});

		// Abort the rendering stream after the `streamTimeout` so it has tine to
		// flush down the rejected boundaries
		setTimeout(abort, streamTimeout + 1_000);
	});
}) satisfies HandleDocumentRequestFunction;

export default handleRequest;
