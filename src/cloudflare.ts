import { toWebHandler } from "h3";
import { app } from "./index";

const webHandler = toWebHandler(app);

export default {
  async fetch(request: Request, env: any, ctx: any): Promise<Response> {
    return webHandler(request, {
      cloudflare: { env, ctx },
    });
  },
};
