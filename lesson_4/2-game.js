const game = {
    map: [],
    position: new Position(),
    run: function() {
        this.init()
        while(true) {
            let direction = +prompt('Выберите направление [1, 2, 3, 4, 6, 7, 8, 9] (для выхода - Отмена): ')
            if (direction == 0) {
                break;
            }
            this.move(direction)
        }
    },
    init: function() {
        this.map = [...Array(config.rows)]
                        .map(i => Array(config.columns).fill('x'))

        this.markPosition(this.position.x, this.position.y)
        this.render(this.map)
    },
    markPosition: function(x, y) {
        console.log("Ваше положение -> 'o'")
        this.map[y][x] = 'o'
    },
    render: function() {
        let field = this.map.reduce((str, row) => {
            return str + row.reduce(((str, i, index) => {
                return str + (index == 0 ? '' : ' ') + i
            }), '') + '\n'
        }, '')

        console.log(field)
    },
    clear: function() {
        console.clear()
        this.map[this.position.y][this.position.x] = 'x'
    },
    move(direction) {
        if (!this.isAllowedDirection(direction)) return

        let dPos = this.getDeltaPosition(direction)
        if (!this.isAllowedMovement(dPos)) return

        this.clear()
        this.position.change(dPos.x, dPos.y)
        this.markPosition(this.position.x, this.position.y)
        this.render()
    },
    isAllowedDirection(direction) {
        if (!config.directions.includes(direction)) {
            console.log('Введено неверное направление')
            return false
        }

        return true
    },
    getDeltaPosition: function(direction) {
        let dPos = { x: 0, y: 0 }

        if ([3, 6, 9].includes(direction)) dPos.x = 1
        if ([1, 4, 7].includes(direction)) dPos.x = -1

        if ([1, 2, 3].includes(direction)) dPos.y = 1
        if ([7, 8, 9].includes(direction)) dPos.y = -1

        return dPos
    },
    isAllowedMovement(dPos) {
        if ((this.position.y + dPos.y) >= this.map.length
            || (this.position.y + dPos.y) < 0
            || (this.position.x + dPos.x) >= this.map[0].length
            || (this.position.x + dPos.x) < 0) {
                console.log('Вы достигли границы поля! Выберите другое направление.')
                return false
            }
        
        return true
    }
};