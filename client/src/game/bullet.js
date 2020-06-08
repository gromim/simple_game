class Bullet {
    // Класс пули
    // elem скорее всего не нужен будет, надо будет отсюда создавать и добавлять в дом новый элемент
    constructor(start_x, start_y, end_x, end_y) {
        this.area = document.getElementById('game-area')

        // offsets
        let x = end_x - start_x
        let y = end_y - start_y
        let sum = Math.abs(x) + Math.abs(y)
        
        // moves
        this.speed = 16
        this.speed_x = x / sum * this.speed
        this.speed_y = y / sum * this.speed

        // create html element
        this.elem = document.createElement('div')
        this.elem.classList.add('bullet')
        this.elem.style.left = start_x - 5 + 'px'
        this.elem.style.top = start_y + 'px'
        this.area.appendChild(this.elem)

        this.areaRect = this.area.getBoundingClientRect()
        this.elemRect = this.elem.getBoundingClientRect()
    }
    destroy() {
        this.area.removeChild(this.elem)
    }
    update() {
        this.elemRect = this.elem.getBoundingClientRect()
        
        this.elem.style.left = this.elemRect.left + this.speed_x + 'px'
        this.elem.style.top = this.elemRect.top + this.speed_y + 'px'
    }

    // Определяет пересечение пули и врага
    isIntersection(rect) {
        // const minX = this.elemRect.x
        // const maxX = minX + this.elemRect.width
        // const enemyStartX = rect.x
        // const enemyEndX = enemyStartX + rect.width
        this.elemRect = this.elem.getBoundingClientRect()

        // console.log(this.elemRect.top < rect.bottom && (
        //     this.elemRect.right >= rect.left && this.elemRect.right <= rect.right ||
        //     this.elemRect.left >= rect.left && this.elemRect.right <= rect.right
        // ))
        return (this.elemRect.top <= rect.bottom && this.elemRect.bottom >= rect.top) && (
            this.elemRect.right >= rect.left && this.elemRect.right <= rect.right ||
            this.elemRect.left >= rect.left && this.elemRect.right <= rect.right
        )

        // return ((minX > enemyStartX && maxX < enemyEndX) ||
        //   (minX < enemyStartX && maxX > enemyStartX) ||
        //   (minX < enemyEndX && maxX > enemyEndX)
        // ) && this.elemRect.y <= rect.y + rect.height
    }

    needDestroy(enemy) {
        if (this.isIntersection(enemy.elemRect)) {
            enemy.attacked()
            return true
        }
        return !this.isIntersection(this.areaRect)
    }
}
// // Определяет вышла ли пуля за экран
// function isOutView() {
//     if (this.elemRect.x < this.areaRect.x ||
//       this.elemRect.x + this.elemRect.width > this.areaRect.x + this.areaRect.width ||
//       this.elemRect.y < this.areaRect.y ||
//       this.elemRect.y + this.elemRect.height > this.areaRect.y + this.areaRect.height
//     ) {
//         console.log('DESTROY')
//         return true
//     }
// }
export default Bullet
