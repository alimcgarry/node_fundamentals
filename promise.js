const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff worked");
  } else {
    reject("Error, it broke!");
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "HII");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "POOKIE");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 10000, "Is it me you're looking for?");
});

Promise.all([promise, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});

// promise
//   .then((result) => result + "!")
//   .then((result2) => result2 + "?")
//   .catch(() => console.log("error!"))
//   .then((result3) => {
//     throw Error;
//     console.log(result3 + "!");
//   });

