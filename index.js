const server = require("./server");

const port = 4000;
console.log("INDEX");

server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
