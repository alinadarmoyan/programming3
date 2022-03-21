// console.log(matrix);
const side = 15
// function setup() {
//     frameRate(10)
//     createCanvas(side * matrix.length, side * matrix[0].length)
// }

function main() {
    var socket = io()
    function draw() {
    
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 0) {
                    fill("white")
                } else if (matrix[y][x] == 1) {
                    fill("green")
                } else if (matrix[y][x] == 2) {
                    fill("yellow")
                } else if (matrix[y][x] == 3) {
                    fill("#da0a00")
                } else if (matrix[y][x] == 5) {
                    fill("blue")
                } else if (matrix[y][x] == 8) {
                    fill('#3d2d17')
                } else if (matrix[y][x] == 7) {
                    fill('#ff2c00')
                } else if (matrix[y][x] == 6) {
                    fill('#503B1D')
                }
                rect(x * side, y * side, side, side)
            }
        }
    
    }
    socket.on('send matrix', draw)
}

window.onload = main