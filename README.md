# Console-Tube

![](http://gmork.in/tube.gif)

Watch youtube in Chrome debugger console.

## Prerequisite

[ffmpeg]()
[youtube-dl]()

## How To Use

clone this repo and run

```bash
$ git clone https://github.com/fand/console-tube
$ cd console-tube
$ npm install
$ node bin/www  #=> listen on localhost:3000 by default.
```

load "console-tube.js" to your webpage.

```html
<html>
  <script src="//localhost:3000/console-tube.js"></script>
</html>
```

Then "console.tube()" on console.

```javascript
console.tube('http://www.youtube.com/watch?v=XXXXXXXX');
```

## LICENSE

public domain


# See Also

[](https://github.com/adriancooney/console.image)
[](http://html5doctor.com/video-canvas-magic/)
[](http://granular.cs.umu.se/browserphysics/?p=2287)
[](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg)
