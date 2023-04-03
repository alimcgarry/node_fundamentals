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
