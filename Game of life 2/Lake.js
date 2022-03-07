class Lake {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.multiplay = 0
        this.directions = [
            // [this.x    , this.y - 1],
            // [this.x - 1, this.y    ],
            // [this.x + 1, this.y - 1],
            // [this.x - 1, this.y - 1]
            [this.x + 1, this.y + 1]
        ];
    }

    getNewCoordinates() {
        this.directions = [
            // [this.x - 1, this.y - 1],
            // [this.x    , this.y - 1],
            // [this.x + 1, this.y - 1],
            // [this.x - 1, this.y    ],
            // [this.x + 1, this.y    ],
            // [this.x - 1, this.y + 1],
            // [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char) {
        this.getNewCoordinates()
        let result = []
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char) {
                    result.push(this.directions[i])
                }
            }
        }
        return result
    }

    mul() {
        let found = this.chooseCell(0)
        let exact = random(found)
        for (let i = 0; i < 5; i++) {
            if (exact && this.multiplay > 1) {
                let x = exact[0]
                let y = exact[1]

                let lake = new Lake(x, y)
                matrix[y][x] = 5
                lakeArr.push(lake)
                
                this.multiplay = 0
            }
            this.multiplay++
        }
        
    }
}