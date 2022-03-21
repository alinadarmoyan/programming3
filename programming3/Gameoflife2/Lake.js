let LivingCreature = require('./LivingCreature')

module.exports = class Lake extends LivingCreature{
    constructor(x, y) {
        super(x, y)
        this.multiplay = 0
        this.directions = [
            [this.x + 1, this.y + 1]
        ];
    }

    getNewCoordinates() {
        this.directions = [
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char) {
        this.getNewCoordinates()
        return super.chooseCell(char)
    }

    // mul() {
    //     let found = this.chooseCell(0)
    //     let exact = random(found)
    //     for (let i = 0; i < 5; i++) {
    //         if (exact && this.multiplay > 1) {
    //             let x = exact[0]
    //             let y = exact[1]

    //             let lake = new Lake(x, y)
    //             matrix[y][x] = 5
    //             lakeArr.push(lake)
                
    //             this.multiplay = 0
    //         }
    //         this.multiplay++
    //     }
        
    // }

    mul() {
        this.multiply++;
        if (this.multiply >= 5) {
            let emptyCells = super.chooseCell(0)
            //չմոռանաս , որ P5 գրադարանի random ֆունկցիան սերվերը չի հասկանում
            //դա ուղղելու համար կգրենք Math.floor(Math.random() * ինչՈրԶանգված.length)
            let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
            if (this.multiply >= 5 && newCell) {
                let x = newCell[0]
                let y = newCell[1]
                var Lake = new Lake(x, y)
                lakeArr.push(Lake)
                this.multiply = 0;
            }
        }
    }
}