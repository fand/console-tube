var express = require('express');
var router = express.Router();

var FFmpeg = require('fluent-ffmpeg');

var spawn = require('child_process').spawn;
var fs = require('fs');

router.get('/:url', function(req, res) {
  var url = decodeURIComponent(req.params.url);

  var options = ['-q', '-o', '-', url];
  if (url.match(/nicovideo\.jp/)) {    // NicoNico
    var username = 'XXXXXXXX';
    var password = 'XXXXXXXX';
    var auth = ['--username', username, '--password', password];
    options = auth.concat(options);
    var youtube = spawn('youtube-dl', options);
    var command = new FFmpeg({source: youtube.stdout})
          .withSize('320x240')
          .toFormat('webm')
          .writeToStream(res);
  } else {
    var youtube = spawn('youtube-dl', options);
    youtube.stdout.pipe(res);
  }
});

module.exports = router;

// Catch errors.
var sys = require('sys');
process.on('uncaughtException', function(err) {
  sys.puts(err.stack);
});
