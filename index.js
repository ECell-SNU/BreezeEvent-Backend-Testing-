const app = require("./app");
const http = require("http");
const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});

module.exports = app;
