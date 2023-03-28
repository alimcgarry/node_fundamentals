const mission = process.argv[2];

if (mission === "learn") {
  console.log("Time to learn some node code");
} else {
  console.log(`Is ${mission} really more fun?`);
}

console.log(process.argv);

setTimeout(() => console.log("hello"), 2000);
