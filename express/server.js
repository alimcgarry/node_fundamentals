const express = require("express");

const app = express();

const friends = [
  {
    id: 0,
    name: "Albert Einstein",
  },
  {
    id: 1,
    name: "Sir Isaac Newton",
  },
];

PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post("/friends", (req, res) => {
  if (!req.body.name) {
    res.status(400).json({
      error: "Missing friend name",
    });
  }
  const newFriend = {
    id: friends.length,
    name: req.body.name,
  };
  console.log(req.body);
  friends.push(newFriend);
  res.json(newFriend);
});

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:id", (req, res) => {
  const friendId = req.params.id;
  const friend = friends[friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
});

app.get("/messages", (req, res) => {
  res.send("Tiger bunny");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
