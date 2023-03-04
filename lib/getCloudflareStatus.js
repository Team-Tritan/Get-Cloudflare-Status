const request = require("request");

function getCloudflareStatus(url, callback) {
  request(url, function (error, response, body) {
    if (error) {
      callback(error);
    } else {
      const statusCode = response.statusCode;
      const statusText = response.statusMessage;
      if (statusCode >= 200 && statusCode < 300) {
        callback(null, {
          status: "success",
          code: statusCode,
          message: statusText,
        });
      } else if (statusCode >= 400 && statusCode < 500) {
        callback(null, {
          status: "client error",
          code: statusCode,
          message: statusText,
        });
      } else if (statusCode >= 500 && statusCode < 600) {
        callback(null, {
          status: "server error",
          code: statusCode,
          message: statusText,
        });
      } else {
        callback(null, {
          status: "unknown",
          code: statusCode,
          message: statusText,
        });
      }
    }
  });
}

module.exports = getCloudflareStatus;
