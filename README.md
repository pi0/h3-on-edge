# ⚡️ H3 on the edge

This repo contains examples of [unjs/h3](https://github.com/unjs/h3) integration with popular runtime platforms.

## H3 Web Adapter

With h3 (>= 1.8) you can easily integrate your app with any runtime platform supporting Fetch API ([`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) => [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)).

```ts
import { createApp, eventHandler, toWebHandler } from "h3"; // or "https://esm.sh/h3@1.8.0-rc.2"

const app = createApp();

app.use(
  "/",
  eventHandler((event) => "H3 works on edge!"),
);

// (Request) => Promise<Response>
const webHandler = toWebHandler(app);
```

You can virtually return anything from an event handler including web [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) and [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)!

See [`./src/index.ts`](./src/index.ts) for main application and each platform details in next section.

## Platforms

### Cloudflare Workers

- [Deployment](https://h3-on-edge.pi0.workers.dev/)
- Entry: [`./src/cloudflare.ts`](./src/cloudflare.ts)
- Config: [`./wrangler.toml](./wrangler.toml)
- Local dev: `pnpm cloudflare:dev`
- Local deploy: `pnpm cloudflare:deploy`

### Deno

- Entry: [`./src/cloudflare.ts`](./src/cloudflare.ts)
- Local dev: `pnpm deno:dev`

### Bun

- Entry: [`./src/bun.ts`](./src/bun.ts)
- Local dev: `pnpm bun:dev`

### Lagon

- [Deployment](https://h3-on-edge.lagon.dev)
- Entry: [`./src/lagon.ts`](./src/lagon.ts)
- Local dev: `pnpm lagon:dev`
- Local deploy: `pnpm lagon:deploy`

### Netlify Edge

- Entry: ['./src/netlify'](./src/netlify/index.ts)
- Config: [`./netlify.toml`](./netlify.toml)
- Local dev: `pnpm netlify:dev`

## Setup Local Environment

- Install latest version of Node.js (18 is recommended)
- Enable [Node.js corepack](https://nodejs.org/api/corepack.html) using `corepack enable`
- Clone repository
- Install dependencies using `pnpm install`
- Start Node.js development server using `pnpm dev`

## License

MIT - Pooya Parsa <pooya@pi0.io>
