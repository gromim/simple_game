class Enemy{
    // Класс врага
    // elem - ref из vue, чтобы взимодействовать отсюда
    constructor() {
        this.area = document.getElementById('game-area')
        this.elem = document.createElement('div')
        this.elem.classList.add('bullet')
        this.area.appendChild(this.elem)
    }
}
export default Enemy