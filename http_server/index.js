const { fdatasync } = require("fs");
const http = require("http");

const PORT = 3000;

const server = http.createServer();

const friends = [
  {
    id: 0,
    name: "Nikola Tesla",
  },
  {
    id: 1,
    name: "Albert Einstein",
  },
  {
    id: 2,
    name: "Isaac Newton",
  },
];

server.on("request", (req, res) => {
  const items = req.url.split("/");
  if (req.method === "POST" && items[1] === "friends") {
    req.on("data", (data) => {
      const friend = data.toString();
      console.log("Request:", friend);
      friends.push(JSON.parse(friend));
    });
  } else if (req.method === "GET" && items[1] === "friends") {
    if (items[1] === "friends") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      if (items.length === 3) {
        const friendsIndex = items[2];
        res.end(JSON.stringify(friends[friendsIndex]));
      } else {
        res.end(JSON.stringify(friends));
      }
    } else if (req.url === "/messages") {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<body>");
      res.write("<h1>Hello there!</h1>");
      res.write("</body>");
      res.write("</html>");
      res.end();
    } else {
      res.statusCode = 404;
      res.end;
    }
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
