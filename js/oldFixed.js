var myCanvas = document.querySelector('canvas');
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight
var ctx = myCanvas.getContext('2d');

for (let index = 0; index < 100; index++) {
    var x = Math.random() * window.innerWidth;

    var y = Math.random() * window.innerHeight;
    var size = Math.random() * 50;
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor);
    ctx.beginPath()
    ctx.arc(x, y, size, 0, 2 * Math.PI)
    ctx.strokeStyle = '#' + randomColor
    ctx.stroke()

}



