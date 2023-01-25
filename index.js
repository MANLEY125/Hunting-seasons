const server = require("./api/server");
require("dotenv").config;

console.log(process.env);

const HOST = "localhost";
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Hunting seasons API running on ${HOST}:${PORT}!`);
});
