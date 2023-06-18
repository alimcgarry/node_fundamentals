const friends = require("../models/friends.model");

function getFriend(req, res) {
  const friendId = req.params.id;
  const friend = friends[friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
}

function getFriends(req, res) {
  res.json(friends);
}

function postFriend(req, res) {
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
}

module.exports = {
  getFriend,
  getFriends,
  postFriend,
};
