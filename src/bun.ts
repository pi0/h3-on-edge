import { toWebHandler } from "h3";
import { app } from "./index";

const webHandler = toWebHandler(app);

// @ts-ignore
const server = Bun.serve({
  port: 3000,
  fetch(request: Request) {
    return webHandler(request);
  },
});

console.log(`Listening on localhost:${server.port}`);
