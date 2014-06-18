## flickr-recent

Get recent uploaded photos on Flickr

## Install

```bash
$ npm install flickr-recent
```

## Usage

```js
var recent = require('flickr-recent')({
  key: 'api-key'
})

recent(function (error, result) {
  photos.length
  // => 100

  photos[0]
  // => { "id": "14261747769", "owner": "38040930@N05", "secret": "ed6e9380d7", "server": "2925", "farm": 3, "title": "Desert Camo BumbleBot one off #mikedie #bumblebot #resin #dunny #rwk #transformers #bumblebee #camo  Mikedie.bigcartel.com", "ispublic": 1, "isfriend": 0, "isfamily": 0 }
})
```

[flickr-client](http://github.com/npm-flickr/flickr-client) can be passed to avoid repeating auth options:

```js
var client = require('flickr-client')({
  key: 'api-key'
});

var recent = require('flickr-recent')(client)
```
