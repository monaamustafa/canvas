var myCanvas = document.querySelector('canvas');
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight
var ctx = myCanvas.getContext('2d');


function Circle(x, y, dx, dy, size, randomColor) {
    this.x = x;
    this.dx = dx;
    this.y = y;
    this.dy = dy;
    this.size = size;
    this.randomColor = randomColor
    this.draw = function () {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
        ctx.strokeStyle = '#' + this.randomColor
        ctx.stroke()
    }
    this.update = function () {
        if (this.x + this.size > innerWidth || this.x - this.size < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.size > innerHeight || this.y - this.size < 0) {
            this.dy = -this.dy
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();

    }
}
var circleArray = [];
for (let index = 0; index < 100; index++) {
    var size = Math.random() * 50;
    // console.log(size,Math.floor(size))
    var x = Math.random() * (innerWidth-size*2)+size;
    var y = Math.random() * (innerHeight-size*2)+size;
    var dx = (Math.random() - 0.5) * 5;
    var dy = (Math.random() - 0.5) * 5;
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    circleArray.push(new Circle(x, y, dx, dy, size, randomColor))
}

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    for (let index = 0; index < 100; index++) {
        circleArray[index].update();
    }
}
animate()