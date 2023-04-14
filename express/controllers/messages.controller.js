const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    name: "Evie",
  });
}

function postMessages(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
