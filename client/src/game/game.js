class Game {
  // Класс игры
  // Тут основная логика игры
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
    this.loopInterval = null
    this.bullets = []
    this.player.addBullet = (bullet) => this.addBullet(bullet)

    this.keys = {
        'ArrowLeft': this.player.moveLeft,
        'ArrowRight': this.player.moveRight,
      }
  }
  keydown({key}) {
    if (this.keys[key]) this.keys[key].call(this.player)
  }
  keyup({key}) {
      if (this.keys[key]) this.player.stop()
  }
  click(e) {
      this.player.attack(e.x, e.y)
  }
  start() {
    this.loopInterval = setInterval(() => this.update(), 50)
  }
  stop() {
    clearInterval(this.loopInterval)
    this.loopInterval = null
    // clear bullets
    this.bullets.forEach(bullet => {
        bullet.destroy()
    })
    this.bullets = []
  }
  update() {
      this.player.update()
      this.enemy.update()
      this.bullets.forEach(bullet => {
        bullet.update();
        console.log(bullet.needDestroy())
        if (bullet.needDestroy()) {
            this.removeBullet(bullet);
        }
      })
    }
  addBullet(bullet) {
      this.bullets.push(bullet)
  }
  removeBullet(bullet) {
      this.bullets.splice(this.bullets.indexOf(bullet), 1)
      bullet.destroy()
  }
}

export default Game;
