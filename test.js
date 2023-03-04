const getCloudflareStatus = require("./index");

const url = "https://www.cloudflare.com";

getCloudflareStatus(url, function (error, status) {
  if (error) {
    console.log(error);
  } else {
    console.log(status);
  }
});
