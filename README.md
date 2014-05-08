# Console-Tube

![](http://cdn-ak.f.st-hatena.com/images/fotolife/a/amagitakayosi/20140507/20140507072043.gif)

Watch youtube in Chrome debugger console.

## Prerequisite

- [ffmpeg](http://www.ffmpeg.org)
- [youtube-dl](http://rg3.github.io/youtube-dl/)

## How To Use

git clone this repo and run

```bash
$ git clone https://github.com/fand/console-tube
$ cd console-tube
$ npm install
$ node bin/www  #=> listen on localhost:3000 by default.
```

Load "console-tube.js" to your webpage.

```html
<html>
  <script src="//localhost:3000/console-tube.js"></script>
</html>
```

Then "console.tube()" on debugger console.

```javascript
console.tube('http://www.youtube.com/watch?v=XXXXXXXX');
```

## Tips

- `console.detube()` to stop video.
- `console.tube(url, server_url)` if server in not on localhost.


## LICENSE

public domain


# See Also

[console.image](https://github.com/adriancooney/console.image)
<!-- - [http://html5doctor.com/video-canvas-magic/](http://html5doctor.com/video-canvas-magic/) -->
<!-- - [http://granular.cs.umu.se/browserphysics/?p=2287](http://granular.cs.umu.se/browserphysics/?p=2287) -->
<!-- - [https://github.com/fluent-ffmpeg/node-fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg) -->
