var express = require('express');
var router = express.Router();

var FFmpeg = require('fluent-ffmpeg');

var spawn = require('child_process').spawn;
var fs = require('fs');

router.get('/:url', function(req, res) {
  var url = decodeURIComponent(req.params.url);

  fs.readFile('./auth.json', function (err, data) {
    var auths = JSON.parse(data);

    var options = login(url, auths);
    options = options.concat(['-q', '-o', '-', url]);

    var youtube = spawn('youtube-dl', options);
    var command = new FFmpeg({source: youtube.stdout})
          .withSize('320x240')
          .toFormat('webm')
          .on('start',function () {
            console.log('start');
          })
          .on('end',function () {
            console.log('end');
          })
          .writeToStream(res);
  });
});

module.exports = router;

// Catch errors.
var sys = require('sys');
process.on('uncaughtException', function(err) {
  sys.puts(err.stack);
});

var login = function (url, auths) {
  var hostname = require('url').parse(url).hostname;
  for (var host in auths) {
    if (hostname.match(host)) {
      return auths[host];
    }
  }
  return [];
};
