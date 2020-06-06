class Player {
  // Класс игрока
  constructor() {
    // Добавление игрока в поле
    this.area = document.getElementById('game-area')
    this.elem = document.createElement('div')
    this.elem.classList.add('player')
    this.area.appendChild(this.elem)
    // Получение начальных размеров и позиций
    this.areaRect = this.area.getBoundingClientRect()
    this.elemRect = this.elem.getBoundingClientRect();
    // Скорость движения
    this.speed = 5
    // Начальная позиция
    this.elem.style.left = this.areaRect.left + Math.floor(this.areaRect.width / 2) + 'px'
  }
  moveLeft() {
    this.elemRect = this.elem.getBoundingClientRect()
    if (this.elemRect.left <= this.areaRect.left) {
        this.elem.style.left = this.areaRect.left + 'px'
    }
    else {
        this.elem.style.left = this.elemRect.left - this.speed + 'px'
    }
  }
  moveRight() {
    this.elemRect = this.elem.getBoundingClientRect()
    if (this.elemRect.right >= this.areaRect.right) {
        this.elem.style.left = this.areaRect.right + 'px'
    }
    else {
        this.elem.style.left = this.elemRect.left + this.speed + 'px'
    }
  }
  attack() {}
}
export default Player;
