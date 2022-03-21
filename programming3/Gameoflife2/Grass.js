let LivingCreature = require('./LivingCreature')

module.exports = class Grass extends LivingCreature {
    constructor(x, y, multiplay) {
        super(x, y, multiplay)
    }

    // mul() {
    //     let found = this.chooseCell(0)
    //     let exact = Math.random(found)
    //     if (exact && this.multiplay > 3) {
    //         let x = exact[0]
    //         let y = exact[1]

    //         let grass = new Grass(x, y)
    //         matrix[y][x] = 1
    //         grassArr.push(grass)

    //         this.multiplay = 0
    //     }
    //     this.multiplay++
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
                var gr = new Grass(x, y)
                grassArr.push(gr)
                this.multiply = 0;
            }
        }
    }
}
