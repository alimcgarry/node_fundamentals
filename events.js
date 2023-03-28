const EventEmitter = require("events");
const celebrity = new EventEmitter();

// Subscribe to celebrity for Observer 1
celebrity.on("race", (result) => {
  if (result === "win") {
    console.log("Congratulations, you are the best!");
  } else {
    console.log("Oh chucks, he lost");
  }
});

// Subscribe to celebrity for Observer 2
celebrity.on("race", (result) => {
  if (result === "win") {
    console.log("Yes, he lost!");
  } else {
    console.log("Oh fuck, he won it");
  }
});

celebrity.emit("race", "win");
celebrity.emit("race", "lost");
process.on("exit", (code) => {
  console.log("The program is exiting", code);
});
