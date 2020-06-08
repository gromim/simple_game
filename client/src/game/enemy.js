class Enemy{
    // Класс врага
    // elem - ref из vue, чтобы взимодействовать отсюда
    constructor() {
        const colors = ['#FFC107', '#03A9F4', '#FF5722', '#9E9E9E', '#673AB7']
        this.area = document.getElementById('game-area')
        this.elem = document.createElement('div')
        this.elem.style.background = `${colors[getRandom(0, colors.length-1)]}`
        this.hp = getRandom(5, 20)
        this.elem.classList.add('enemy')
        this.area.appendChild(this.elem)
        this.areaRect = this.area.getBoundingClientRect()
        this.elemRect = this.elem.getBoundingClientRect()
        this.elem.style.left = this.areaRect.left + Math.floor(this.areaRect.width / 2) + 'px'
        this.elem.style.left =
            getRandom(0, parseInt(this.areaRect.width) - parseInt(this.elemRect.width)) + 'px'
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

const getRandom = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1))

export default Enemy
