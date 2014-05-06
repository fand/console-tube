(function(console){

    var getBox = function (width, height) {
        return "font-size: 1; padding: " + Math.floor(height/2) + "px " +
            Math.floor(width/2) + "px; line-height: " + height + "px;";
    };

    console.tube = function(url, scale) {
        scale = scale || 1;

        // Prepare CSS
        var css = document.createElement('style');
        css.innerHTML = '.debug-tube{position: fixed; top: -10000px; z-index: -1;}';
        document.head.appendChild(css);

        // Create video element.
        var id = url.match(/v=([^&]*)/)[1];
        var video =  document.createElement('video');
        video.src = 'http://192.168.50.11:3000/' + id;
        video.id = 'debug-tube-video';
        video.classList.add('debug-tube');
        video.crossOrigin = "Anonymous";

        // Create canvas element.
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.classList.add('debug-tube');

        document.body.appendChild(video);
        document.body.appendChild(canvas);

        var dim = '';
        var draw = function (video, canvas, ctx, dim) {
            if (video.ended || video.paused) {return;}
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            console.log("%c",
                        dim + "background: url(" + canvas.toDataURL() + "); " +
                        "background-size: " + (this.width * scale) + "px " + (this.height * scale) + "px; " +
                        "color: transparent;");
            setTimeout(function () {
                draw(video, canvas, ctx, dim);
            }, 20);
        };

       // Start playing.
       video.addEventListener('loadstart', function (e) {
           video.play();
           dim = getBox(320, 240);
           canvas.width = 320;
           canvas.height = 240;
           ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
           draw(video, canvas, ctx, dim);
       });
    };

    console.detube = function () {
        var video = document.getElementById('debug-tube-video');
        video.pause();
        var tubes = document.getElementsByClassName('debug-tube');
        for (var i=0; i<tubes.length; i++) {
            document.body.removeChild(tubes[i]);
        }
        console.clear();
    };

})(console);
