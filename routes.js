// This file was automatically added by edgio deploy.
// You should commit this file to source control.
import { nextRoutes } from "@edgio/next";
import { Router } from "@edgio/core/router";

// Remove this line to suppress Next's default behavior of removing trailing slashes via a redirect.
// If trailingSlash: true is set in next.config.js, removing this line will remove the redirect that adds the trailing slash.
nextRoutes.setEnforceTrailingSlash(true);

export default new Router()
  .match("/", ({ cache, serveStatic, renderWithApp }) => {
    cache({
      edge: {
        maxAgeSeconds: 10,
        staleWhileRevalidateSeconds: 60 * 60 * 24 * 365,
      },
    });
    serveStatic(".next/server/pages/index.html", {
      // When the user requests data that is not already statically rendered, fall back to SSR.
      onNotFound: () => renderWithApp(),
    });
  })
  .match("/service-worker.js", ({ serviceWorker }) => {
    return serviceWorker(".next/static/service-worker.js");
  })
  .use(nextRoutes); // automatically adds routes for all files under /pages
