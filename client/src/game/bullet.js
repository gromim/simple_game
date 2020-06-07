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
        this.speed = 8
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
    needDestroy(enemy) {
        return isIntersection.call(this, enemy) || isOutView.call(this)
    }
}

// Определяет пересечение пули и врага
function isIntersection(enemy) {
    const minX = this.elemRect.x
    const maxX = minX + this.elemRect.width
    const enemyStartX = enemy.elemRect.x
    const enemyEndX = enemyStartX + enemy.elemRect.width

    if (((minX > enemyStartX && maxX < enemyEndX) ||
      (minX < enemyStartX && maxX > enemyStartX) ||
      (minX < enemyEndX && maxX > enemyEndX)
    ) && this.elemRect.y <= enemy.elemRect.y + enemy.elemRect.height) {
        enemy.attacked()
        return true
    }
    return false
}

// Определяет вышла ли пуля за экран
function isOutView() {
    if (this.elemRect.x < this.areaRect.x ||
      this.elemRect.x + this.elemRect.width > this.areaRect.x + this.areaRect.width ||
      this.elemRect.y < this.areaRect.y ||
      this.elemRect.y + this.elemRect.height > this.areaRect.y + this.areaRect.height
    ) {
        console.log('DESTROY')
        return true
    }
}

export default Bullet