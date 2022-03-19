const matrix = []

// import { Grass } from "Grass";
import {Predator} from './Predator.js';
console.log(matrix);
const side = 15
const grassArr = []
const grassEaterArr = []
const predatorArr = []
const lakeArr = []
const volcanoArr = []


function generator(matrixSize, grassCount, grassEaterCount, predatorCount){
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = []
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0
        }
    }
    matrix[44][44] = 6
    matrix[44][43] = 6
    matrix[44][45] = 6
    matrix[43][44] = 7
    matrix[43][43] = 6
    matrix[43][45] = 6
    matrix[42][45] = 6
    matrix[42][44] = 6
    matrix[42][43] = 6
    matrix[45][42] = 8
    matrix[45][43] = 8
    matrix[45][44] = 8
    matrix[45][45] = 8
    matrix[45][46] = 8
    matrix[44][42] = 8
    matrix[44][46] = 8
    matrix[43][42] = 8
    matrix[43][46] = 8
    matrix[42][42] = 8
    matrix[42][46] = 8
    matrix[41][42] = 8
    matrix[41][43] = 8
    matrix[41][44] = 8
    matrix[41][45] = 8
    matrix[41][46] = 8
    matrix[35][10] = 8
    matrix[35][11] = 8
    matrix[35][12] = 8
    matrix[35][8] = 8
    matrix[35][9] = 8
    matrix[34][8] = 8
    matrix[34][9] = 6
    matrix[34][10] = 6
    matrix[34][11] = 6
    matrix[34][12] = 8
    matrix[33][8] = 8
    matrix[33][9] = 6
    matrix[33][10] = 7
    matrix[33][11] = 6
    matrix[33][12] = 8
    matrix[32][8] = 8
    matrix[32][9] = 6
    matrix[32][10] = 6
    matrix[32][11] = 6
    matrix[32][12] = 8
    matrix[31][8] = 8
    matrix[31][9] = 8
    matrix[31][10] = 8
    matrix[31][11] = 8
    matrix[31][12] = 8
    matrix[15][30] = 8
    matrix[15][31] = 8
    matrix[15][32] = 8
    matrix[15][33] = 8
    matrix[15][34] = 8
    matrix[14][30] = 8
    matrix[14][31] = 6
    matrix[14][32] = 6
    matrix[14][33] = 6
    matrix[14][34] = 8
    matrix[13][30] = 8
    matrix[13][31] = 6
    matrix[13][32] = 7
    matrix[13][33] = 6
    matrix[13][34] = 8
    matrix[12][30] = 8
    matrix[12][31] = 6
    matrix[12][32] = 6
    matrix[12][33] = 6
    matrix[12][34] = 8
    matrix[11][30] = 8
    matrix[11][31] = 8
    matrix[11][32] = 8
    matrix[11][33] = 8
    matrix[11][34] = 8

    matrix[0][0] = 5
    matrix[0][1] = 5
    matrix[0][2] = 5
    matrix[0][3] = 5
    matrix[0][4] = 5
    matrix[0][5] = 5
    matrix[0][6] = 5
    matrix[0][7] = 5
    matrix[0][8] = 5
    matrix[0][9] = 5
    matrix[0][10] = 5
    matrix[0][11] = 5
    matrix[0][12] = 5
    matrix[0][13] = 5
    matrix[0][14] = 5
    matrix[0][15] = 5
    matrix[0][16] = 5
    matrix[0][17] = 5
    matrix[1][0] = 5
    matrix[1][1] = 5
    matrix[1][2] = 5
    matrix[1][3] = 5
    matrix[1][4] = 5
    matrix[1][5] = 5
    matrix[1][6] = 5
    matrix[1][7] = 5
    matrix[1][8] = 5
    matrix[1][9] = 5
    matrix[1][10] = 5
    matrix[1][11] = 5
    matrix[1][12] = 5
    matrix[1][13] = 5
    matrix[1][14] = 5
    matrix[1][15] = 5
    matrix[1][16] = 5
    matrix[2][0] = 5
    matrix[2][1] = 5
    matrix[2][2] = 5
    matrix[2][3] = 5
    matrix[2][4] = 5
    matrix[2][5] = 5
    matrix[2][6] = 5
    matrix[2][7] = 5
    matrix[2][8] = 5
    matrix[2][9] = 5
    matrix[2][10] = 5
    matrix[2][11] = 5
    matrix[2][12] = 5
    matrix[2][13] = 5
    matrix[2][14] = 5
    matrix[2][15] = 5
    matrix[3][0] = 5
    matrix[3][1] = 5
    matrix[3][2] = 5
    matrix[3][3] = 5
    matrix[3][4] = 5
    matrix[3][5] = 5
    matrix[3][6] = 5
    matrix[3][7] = 5
    matrix[3][8] = 5
    matrix[3][9] = 5
    matrix[3][10] = 5
    matrix[3][11] = 5
    matrix[3][12] = 5
    matrix[3][13] = 5
    matrix[3][14] = 5
    matrix[4][0] = 5
    matrix[4][1] = 5
    matrix[4][2] = 5
    matrix[4][3] = 5
    matrix[4][4] = 5
    matrix[4][5] = 5
    matrix[4][6] = 5
    matrix[4][7] = 5
    matrix[4][8] = 5
    matrix[4][9] = 5
    matrix[4][10] = 5
    matrix[4][11] = 5
    matrix[4][12] = 5
    matrix[5][0] = 5
    matrix[5][1] = 5
    matrix[5][2] = 5
    matrix[5][3] = 5
    matrix[5][4] = 5
    matrix[5][5] = 5
    matrix[5][6] = 5
    matrix[5][7] = 5
    matrix[5][8] = 5
    matrix[5][9] = 5
    matrix[5][10] = 5
    matrix[6][0] = 5
    matrix[6][1] = 5
    matrix[6][2] = 5
    matrix[6][3] = 5
    matrix[6][4] = 5
    matrix[6][5] = 5
    matrix[6][6] = 5
    matrix[6][7] = 5
    matrix[6][8] = 5
    matrix[7][0] = 5
    matrix[7][1] = 5
    matrix[7][2] = 5
    matrix[7][3] = 5
    matrix[7][4] = 5
    matrix[7][5] = 5
    matrix[46][46] = 5
    matrix[46][47] = 5
    matrix[46][48] = 5
    matrix[46][49] = 5
    matrix[42][47] = 5
    matrix[46][43] = 5
    matrix[46][44] = 5
    matrix[46][45] = 5
    matrix[45][47] = 5
    matrix[44][47] = 5
    matrix[43][47] = 5
    for (let i = 0; i < grassCount; i++) {
        let x = Math.floor(random(matrixSize))
        let y = Math.floor(random(matrixSize))
        if (matrix[y][x] != 5 && matrix[y][x] != 6 && matrix[y][x] != 7 && matrix[y][x] != 8) {
            matrix[y][x] = 1
        }
    }
    
    for (let i = 0; i < grassEaterCount; i++) {
        let x = Math.floor(random(matrixSize))
        let y = Math.floor(random(matrixSize))
        if (matrix[y][x] != 5 && matrix[y][x] != 6 && matrix[y][x] != 7 && matrix[y][x] != 8) {
            matrix[y][x] = 2
        }
    }
    for (let i = 0; i < predatorCount; i++) {
        let x = Math.floor(random(matrixSize))
        let y = Math.floor(random(matrixSize))
        if (matrix[y][x] != 5 && matrix[y][x] != 6 && matrix[y][x] != 7 && matrix[y][x] != 8) {
            matrix[y][x] = 3
        }
    }
}

function setup() {
    frameRate(10)
    generator(50, 40, 20, 30)
    createCanvas(side * matrix.length, side * matrix[0].length)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y))
            }
            else if (matrix[y][x] == 2) {
                grassEaterArr.push(new GrassEater(x, y))
                console.log(grassEaterArr);
            } else if (matrix[y][x] == 3) {
                predatorArr.push(new Predator(x, y))
                console.log(predatorArr);
            } else if (matrix[y][x] == 5) {
                lakeArr.push(new Lake(x, y))
                console.log(lakeArr);
            } else if (matrix[y][x] == 7) {
                volcanoArr.push(new Volcano(x, y))
                console.log(volcanoArr);
            }
        }
    }
}

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
    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].eat()
    }
    for (let i in lakeArr) {
        lakeArr[i].mul()
    }
    for (let i in volcanoArr) {
        volcanoArr[i].mul()
    }
}