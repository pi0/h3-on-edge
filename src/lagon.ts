import { toWebHandler } from "h3";
import { app } from "./index";

const webHandler = toWebHandler(app);

export function handler(request: Request) {
  return webHandler(request);
}
