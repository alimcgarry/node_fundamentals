function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`sending ${encryptedData} to URL`);
}

function encrypt(data) {
  return `encypted data`;
}

export { send };
