function getMessages(req, res) {
  res.send("This is a message");
}

function postMessages(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
