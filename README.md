# Console-Tube

![](http://medias.gifboom.com/medias/de50a62790694f3a9df69d5f91456806.mp4)

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

## LICENSE

public domain


# See Also

[console.image](https://github.com/adriancooney/console.image)
<!-- - [http://html5doctor.com/video-canvas-magic/](http://html5doctor.com/video-canvas-magic/) -->
<!-- - [http://granular.cs.umu.se/browserphysics/?p=2287](http://granular.cs.umu.se/browserphysics/?p=2287) -->
<!-- - [https://github.com/fluent-ffmpeg/node-fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg) -->
