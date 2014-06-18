var createClient = require("flickr-client");
var client;

module.exports = setup;

function setup (options) {
  client = createClient(options);
  return recent;
}

function recent (options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  client('photos.getRecent', options, function (error, response) {
    if (error) return callback(error);
    debugger;
    callback(undefined, response.photos.photo);
  });
}
