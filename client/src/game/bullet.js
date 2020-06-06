class Bullet{
    // Класс пули
    // elem скорее всего не нужен будет, надо будет отсюда создавать и добавлять в дом новый элемент
    constructor(start_x, start_y, end_x, end_y) {
        this.area = document.getElementById('game-area')

        let x = end_x - start_x
        let y = end_y - start_y
        let sum = Math.abs(x) + Math.abs(y)
 
        
        this.speed = 5
        this.speed_x = x / sum * this.speed
        this.speed_y = y / sum * this.speed

        this.elem = document.createElement('div')
        this.elem.classList.add('bullet')
        this.elem.style.left = start_x - 5 + 'px'
        this.elem.style.top = start_y + 'px'
        this.area.appendChild(this.elem)
        this.areaRect = this.area.getBoundingClientRect()
        console.log(this.areaRect)
        this.interval = setInterval(() => this.move(), 50)
    }
    destroy() {
        clearInterval(this.interval)
        this.area.removeChild(this.elem)
    }
    move() {
        let elemRect = this.elem.getBoundingClientRect()
        if (elemRect.x < this.areaRect.x ||
            elemRect.x > this.areaRect.x + this.areaRect.width ||
            elemRect.y < this.areaRect.y ||
            elemRect.y > this.areaRect.y + this.areaRect.height
            ) {
            this.destroy()
        }
        this.elem.style.left = elemRect.left + this.speed_x + 'px'
        this.elem.style.top = elemRect.top + this.speed_y + 'px'
    }
}
export default Bullet