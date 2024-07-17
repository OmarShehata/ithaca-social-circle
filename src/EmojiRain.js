var container = document.getElementById('emoji-rain');
var emoji = ['😀', '😁', '😄', '😊', '😎', '😍', '🙂', '🤗', '🤩', '😝', '🥳', '🤠', '😸', '🐸', '🐼', '🐨', '🐔', '🐌', '🐝', '🕺', '💃', '🙌', '🫶', '👋', '👯', '🎈', '✨', '🎉', '🎊', '🏆', '🪩', '🪇', '🍺', '🍻', '🥂', '🍾', '🌸', '🏵️', '🌺', '🪂', '🏘️', '🌝', '🌞', '🌟', '⭐', '🌈', '💖', '💫', '💯', '⭕'];
var circles = [];




function addCircle(delay, range, color) {
  setTimeout(function() {
    const xSpeed = 0.15
    var c = new Circle(range[0] + Math.random() * range[1], -30, color, {
      x: (-xSpeed * 0.5) + Math.random() * xSpeed,
      y: 0.1 + Math.random() * 0.2
    }, range);
    circles.push(c);
  }, delay);
}

function Circle(x, y, c, v, range) {
  var _this = this;
  this.x = x;
  this.y = y;
  this.color = c;
  this.v = v;
  this.range = range;
  this.element = document.createElement('span');
  /*this.element.style.display = 'block';*/
  this.element.style.opacity = 0;
  this.element.style.position = 'absolute';
  this.element.style.fontSize = '26px';
  this.element.style.color = 'hsl('+(Math.random()*360|0)+',80%,50%)';
  this.element.innerHTML = c;
  container.appendChild(this.element);

  this.update = function(delta) {
    if (_this.y > window.innerHeight) {
      _this.y = -30
      _this.x = _this.range[0] + Math.random() * _this.range[1];
    }
    _this.y += _this.v.y * delta;
    _this.x += _this.v.x * delta;
    this.element.style.opacity = 1;
    this.element.style.transform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
    this.element.style.webkitTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
    this.element.style.mozTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
  };
}

var start = null
function animate(timestep) {
    if (start == null) {
        start = timestep
    }
    const elapsed = timestep - start
    start = timestep

   for (var i in circles) {
    circles[i].update(elapsed);
  }
  requestAnimationFrame(animate);
}




function startEmojiRain() {
    for (var i = 0; i < 15; i++) {

        const width = window.innerWidth 
        const step = width / 20
        for (let x = 0; x < width; x += 200) {
          addCircle(i * 150, [x, 300], emoji[Math.floor(Math.random() * emoji.length)]);
        }
      }
      
    animate();
}
window.startEmojiRain = startEmojiRain
// startEmojiRain()