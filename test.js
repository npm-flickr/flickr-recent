require('with-env')();

var test = require("prova");
var favs = require("./")({
  key: process.env.FLICKR_API_KEY
});

test('last photos', function (t) {
  favs('98269877@N00', function (error, result) {
    t.plan(6);
    t.error(error);
    t.ok(result.length > 80);
    t.ok(result[0].id);
    t.ok(result[0].owner);
    t.ok(result[0].title);
    t.ok(result[0].ispublic);
  });
});
