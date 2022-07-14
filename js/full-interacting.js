var myCanvas = document.querySelector('canvas');
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight
var ctx = myCanvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;

})

function Circle(x, y, dx, dy, size, randomColor) {
    this.x = x;
    this.dx = dx;
    this.y = y;
    this.dy = dy;
    this.size = size;
    this.oraginSize = size;
    this.randomColor = randomColor
    this.draw = function () {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
        ctx.strokeStyle = this.randomColor
        ctx.fillStyle = this.randomColor
        ctx.fill()
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

        if (mouse.x - this.x < 80 &&
            mouse.y - this.y < 80 &&
            mouse.x - this.x > -80 &&
            mouse.y - this.y > -80
        ) {
            if (this.size <40) {
                this.size += 1;
            }
        } else if (this.size > this.oraginSize) {
            this.size -= 1
        }

        this.draw();
        // console.log(circleArray.length)

    }
}
var randColors=["#025E73","#011F26", "#A5A692","#BFB78F","#F2A71B"];
var circleArray = [];
for (let index = 0; index < 500 ; index++) {
    var size = Math.random() * 8 + 2;
    // console.log(size);
    // console.log(size,Math.floor(size))
    var x = Math.random() * (innerWidth - size * 2) + size;
    var y = Math.random() * (innerHeight - size * 2) + size;
    var dx = (Math.random() - 0.5)* 2;
    var dy = (Math.random() - 0.5)*2 ;
    var randomColor = randColors[Math.floor(Math.random() * randColors.length)];
    // var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    circleArray.push(new Circle(x, y, dx, dy, size, randomColor))
    console.log(circleArray);
}

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    for (let index = 0; index < 500; index++) {
        circleArray[index].update();
    }
}
animate()