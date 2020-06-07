class Enemy{
    // Класс врага
    // elem - ref из vue, чтобы взимодействовать отсюда
    constructor() {
        this.area = document.getElementById('game-area')
        this.elem = document.createElement('div')
        this.hp = 10
        this.elem.classList.add('enemy')
        this.area.appendChild(this.elem)

        this.areaRect = this.area.getBoundingClientRect()
        this.elemRect = this.elem.getBoundingClientRect()
        this.elem.style.left = this.areaRect.left + Math.floor(this.areaRect.width / 2) + 'px'

        this.speed = 5
        this.direction = Math.random() > 0.5 ? 'right' : 'left'
    }
    update() {
        this.elem.innerText = this.hp
        this.elemRect = this.elem.getBoundingClientRect()

        if (this.direction == 'left') {
            if (this.elemRect.left > this.areaRect.left) {
                this.elem.style.left = this.elemRect.left - this.speed + 'px'
            } else {
                this.direction = 'right'
            }
        }
        else if (this.direction == 'right') {
            if (this.elemRect.right < this.areaRect.right) {
                this.elem.style.left = this.elemRect.left + this.speed + 'px'
            } else {
                this.direction = 'left'
            }
        }
    }
    attacked() {
        this.hp -= 1
    }
    destroy() {
        this.isDestroyed = true
        this.area.removeChild(this.elem)
    }
    needDestroy() {
        return this.hp <= 0 && !this.isDestroyed
    }
}
export default Enemy