async function getFormulaOneDrivers() {
  const drivers = await fetch(
    "http://ergast.com/api/f1/drivers.json?limit=10&offset=20"
  );
  const driversJSON = await drivers.json();
  console.log(driversJSON.MRData.DriverTable);
}

getFormulaOneDrivers();

urls = [
  "http://ergast.com/api/f1/drivers.json?limit=10&offset=20",
  "http://ergast.com/api/f1/drivers.json?limit=10&offset=30",
  "http://ergast.com/api/f1/drivers.json?limit=10&offset=40",
];

async function getAllFormulaOneDrivers() {
  const [users, posts, albums] = Promise.all(
    urls.map((url) => {
      fetch(url).then((res) => res.json());
    })
  );
  console.log(users, posts, albums);
}
