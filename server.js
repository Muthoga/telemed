const server = Bun.serve({
    port:5883,
    fetch(req) {
      const url = new URL(req.url);
      if (url.pathname === "/") return new Response(Bun.file("index.html"), {
        headers: {
            "Content-Type": "text/html"
        }
      });

      if (url.pathname === "/index.js") return new Response(Bun.file("index.js"), {
        headers: {
            "Content-Type": "text/javascript"
        }
      });
      return new Response("404!");
    },
});

console.log(`Server Listening on port: ${server.port}`);