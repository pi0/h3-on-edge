import { toWebHandler } from "h3";
// @ts-ignore
import { app } from "./index.ts";

const webHandler = toWebHandler(app);

// @ts-ignore
Deno.serve(webHandler);
