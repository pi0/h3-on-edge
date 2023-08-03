import { toWebHandler } from "h3";
// @ts-ignore
import { app } from "../index.ts";

const webHandler = toWebHandler(app);

export default function (request: Request) {
  return webHandler(request);
}

export const config = {
  path: "/**",
};
