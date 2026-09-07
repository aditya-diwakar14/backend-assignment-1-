// server.js
// Basic HTTP server with routing, using only the core http module

const http = require("http");
const { log } = require("./modules/logger");

const PORT = 5173;

const server = http.createServer((req, res) => {
  log(`Request received: ${req.method} ${req.url}`);

  res.setHeader("Content-Type", "text/plain");

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.end("Welcome to Node Server");
      break;

    case "/about":
      res.statusCode = 200;
      res.end("About Page");
      break;

    case "/contact":
      res.statusCode = 200;
      res.end("Contact Page");
      break;

    default:
      res.statusCode = 404;
      res.end("404 Error: Page Not Found");
  }
});

server.listen(PORT, () => {
  log(`Server running at http://localhost:${PORT}/`);
});
