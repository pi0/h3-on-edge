import { createApp, eventHandler, sendStream, setResponseHeader } from "h3";

export const app = createApp();

app.use(
  eventHandler(async (event) => {
    setResponseHeader(event, "Content-Type", "text/html");
    setResponseHeader(event, "Cache-Control", "no-cache");
    setResponseHeader(event, "Transfer-Encoding", "chunked");
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        controller.enqueue(encoder.encode(getHTMLBody()));
        for (const token of getTokens()) {
          controller.enqueue(encoder.encode(token + " "));
          await waitFor(10);
        }
        controller.close();
      },
    });

    return stream;
  }),
);

function waitFor(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getHTMLBody() {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>⚡️ H3 on the Edge</title>
      <style>
        body {
          font-family: monospace;
          max-width: 800px;
          color: #fff;
          background: #333;
          font-size: 1.5em;
          padding: 5em;
          justify-content: center;
          flex-direction: column;
        }
        a {
          color: #fff;
        }
      </style>
    </head>
    <body>
      <h1>⚡️ H3 on the Edge</h1>
      <br />
      <a
        href="https://github.com/pi0/h3-on-edge"
        >Source Code</a
      ><br /><br />
  `;
}

function getTokens() {
  return `
  H3 is a minimal h(ttp) framework designed to offer high performance and portability. It provides a range of compelling features to streamline web development and create efficient applications.
  <br>
One of H3's key strengths is its portability, as it works seamlessly in various environments, including Serverless, Workers, and Node.js. This versatility allows developers to build applications across different platforms without worrying about compatibility issues.
<br>
Another standout feature of H3 is its minimalistic approach. The framework is lightweight and tree-shakable, ensuring that only necessary code is included in the final bundle. This optimization helps reduce application size and improves loading times, benefiting both developers and end-users.

H3 embraces modern development practices by natively supporting promises. Asynchronous operations become more manageable with this built-in promise support, leading to cleaner and more maintainable code.

Moreover, H3 is designed to be extendable. While it comes with a set of composable utilities, developers have the flexibility to extend the framework with custom functionalities according to their specific project requirements.

One of the critical components of H3 is its router, which employs the unjs/radix3 algorithm. This routing system excels in speed and efficiency, providing super-fast route matching for incoming requests.

In conclusion, H3 is a powerful and versatile h(ttp) framework that emphasizes performance, portability, and simplicity. With its minimal design, modern features, extendable nature, and fast router, H3 is an excellent choice for developers seeking to build high-performance web applications with ease.
  `.split(" ");
}
