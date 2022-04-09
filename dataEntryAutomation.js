// dependencies needed

const fs = require("fs");
const axios = require("axios");

exports.DataEntry = async function DataEntry(data, url, headers) {
  // input is an object
  // url is a string
  // headers is an object
  try {
    const dataEntered = {
      ...data,
    };
    await axios
      .post(url, dataEntered, {
        headers: headers,
      })
      .then(async (res) => {
        // console.log data entered after successful entry
        console.log(res.data);
      })
      .catch((err) => {
        // create a file called error.txt and enter data that wasn't successful
        fs.appendFileSync("error.txt", `${err.config.data}\n`);
      });
  } catch (err) {
    throw err;
  }
};
