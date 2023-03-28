urls = [
  "http://ergast.com/api/f1/drivers.json?limit=10&offset=20",
  "http://ergast.com/api/f1/drivers.json?limit=10&offset=30",
  "http://ergast.com/api/f1/drivers.json?limit=10&offset=40",
];

Promise.all(
  urls.map((url) => {
    fetch(url).then((res) => res.json());
  })
).then((results) => {
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[2]);
});

Promise.all(urls.map((url) => fetch(url).then((res) => res.json()))).then(
  (results) => {
    console.log(results[0].MRData.DriverTable);
    console.log(results[1].MRData.DriverTable);
    console.log(results[2].MRData.DriverTable);
  }
);

async function getData() {
  arrayOfPromises = urls.map((url) => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
}
