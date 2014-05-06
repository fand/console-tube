var express = require('express');
var router = express.Router();

var youtube = require('youtube-dl');
var FFmpeg = require('fluent-ffmpeg');
var fs = require('fs');

router.get('/:id', function(req, res) {
    var id = req.params.id;
    var url = 'https://www.youtube.com/watch?v=' + id;
    var video = youtube(url, ['--max-quality=18'], {cwd: __dirname});
    var command = new FFmpeg({source: video})
            .withSize('320x240')
            .toFormat('webm')
            .writeToStream(res);
});

module.exports = router;

// Catch errors.
var sys = require('sys');
process.on('uncaughtException', function(err) {
    sys.puts(err);
});
