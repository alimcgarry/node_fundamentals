const REQUEST_TIMEOUT = 9000;

function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`sending ${encryptedData} to URL`);
}

function encrypt(data) {
  return `encypted data`;
}

console.log(require.cache);
console.log("hello from request!");

module.exports = { send, REQUEST_TIMEOUT };
