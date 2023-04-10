const express = require("express");

const friendsController = require("../controllers/friends.controller");
const friendsRouter = express.Router();

friendsRouter.get("/", friendsController.getFriends);
friendsRouter.post("/", friendsController.postFriend);
friendsRouter.get("/:id", friendsController.getFriend);

module.exports = friendsRouter;
