var express = require('express');
var router = express.Router();

var youstream = require('youstream');
var FFmpeg = require('fluent-ffmpeg');

var fs = require('fs');

router.get('/:url', function(req, res) {
  var url = decodeURIComponent(req.params.url);
  var stream = youstream(url);
  var command = new FFmpeg({source: stream})
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

module.exports = router;

// Catch errors.
var sys = require('sys');
process.on('uncaughtException', function(err) {
  sys.puts(err.stack);
});
