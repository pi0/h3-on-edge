# ⚡️ H3 on the edge

Edge workers with straming powered by [unjs/h3](https://github.com/unjs/h3)!

This repo contains examples of h3 app deployment to popular edge platforms. See [`./src/index.ts`](./src/index.ts) for main application and each platform details in next section.

## H3 Web Adapter

With h3 (>= 1.8) you can easily integrate your app with any runtime platform supporting Fetch Web API ([`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) and [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)).

```ts
import { createApp, eventHandler, toWebHandler } from "h3"; // or "https://esm.sh/h3@1.8.0-rc.2"

const app = createApp();

app.use(
  "/",
  eventHandler((event) => "H3 works on edge!"),
);

const webHandler = toWebHandler(app); // (Request) => Promise<Response>
```

## Platforms

### Cloudflare Workers

- Docs: https://workers.cloudflare.com/
- Deployment: https://h3-on-edge.pi0.workers.dev/
- Config: [`./wrangler.toml](./wrangler.toml)
- Entry: [`./src/cloudflare.ts`](./src/cloudflare.ts)
- Local dev: `pnpm cloudflare:dev`
- Local deploy: `pnpm cloudflare:deploy`

### Deno

- Docs: https://deno.com/deploy
- Entry: [`./src/cloudflare.ts`](./src/cloudflare.ts)
- Local dev: `pnpm deno:dev`

### Bun

- Docs: https://bun.sh/
- Entry: [`./src/bun.ts`](./src/bun.ts)
- Local dev: `pnpm bun:dev`

### Lagon

- Docs: https://docs.lagon.app
- Deployment: https://h3-on-edge.lagon.dev
- Entry: [`./src/lagon.ts`](./src/lagon.ts)
- Local dev: `pnpm lagon:dev`
- Local deploy: `pnpm lagon:deploy`

### Netlify

- Docs: https://docs.netlify.com/edge-functions/overview/
- Config: [`./netlify.toml`](./netlify.toml)
- Entry: ['./src/netlify/index.ts'](./src//netlify/index)
- Local dev: `pnpm netlify:dev`

## Setup Local Environment

- Install latest version of Node.js (18 is recommended)
- Enable [Node.js corepack](https://nodejs.org/api/corepack.html) using `corepack enable`
- Clone repository
- Install dependencies using `pnpm install`
- Start Node.js development server using `pnpm dev`

## License

MIT - Pooya Parsa <pooya@pi0.io>
