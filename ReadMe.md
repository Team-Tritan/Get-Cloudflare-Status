## Get Cloudflare Status

Yet another useless project, brought to you by [Redacted Devs](https://tritan.gg)

Get the status of a page covered by cloudflare, in a readable object!

## Example

```js
const getCloudflareStatus = require("cloudflare-status");

const url = "https://www.cloudflare.com";

/**
 *  Returns an object through the callback.
 *  @status - string
 *  @code - integer
 *  @message - string
 * */
getCloudflareStatus(url, function (error, status) {
  if (error) {
    console.log(error);
  } else {
    console.log(status);
  }
});
```

## Contributing

- Contribute on the open source [github](https://github.com/Team-Tritan/Get-Cloudflare-Status)!
