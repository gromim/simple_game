import Bullet from "./bullet"

class Player {
  // Класс игрока
  constructor() {
    // Добавление игрока в поле
    this.area = document.getElementById('game-area')
    this.elem = document.createElement('div')
    this.elem.classList.add('player')
    this.area.append(this.elem)
    // Получение начальных размеров и позиций
    this.areaRect = this.area.getBoundingClientRect()
    this.elemRect = this.elem.getBoundingClientRect();
    // Скорость движения
    this.speed = 5
    // Начальная позиция
    this.elem.style.left = this.areaRect.left + Math.floor(this.areaRect.width / 2) + 'px'
    this.lastAttack = 0

    this.direction = null
  }
  moveLeft() {
    this.elemRect = this.elem.getBoundingClientRect()
    if (this.elemRect.left >= this.areaRect.left) {
        this.direction = 'left'
    }
  }
  moveRight() {
    this.elemRect = this.elem.getBoundingClientRect()
    if (this.elemRect.right <= this.areaRect.right) {
        this.direction = 'right'
    }
  }
  stop() {
      this.direction = null
  }
  update() {
    this.elemRect = this.elem.getBoundingClientRect()
    
    if (this.direction == 'left' && this.elemRect.left > this.areaRect.left) {
        this.elem.style.left = this.elemRect.left - this.speed + 'px'
    }
    else if (this.direction == 'right' && this.elemRect.right < this.areaRect.right) {
        this.elem.style.left = this.elemRect.left + this.speed + 'px'
    }
  }
  attack(target_x, target_y) {
    
    let now = new Date().getTime()
    // if (now - this.lastAttack > 1000) {
        
    // }
    this.addBullet(new Bullet(this.elemRect.x + this.elemRect.width / 2, this.elemRect.y, target_x, target_y))
    this.lastAttack = now
  }
}
export default Player;
