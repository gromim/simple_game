import ws from '@/plugins/connect'
import Enemy from './enemy'

class Game {
  // Класс игры
  // Тут основная логика игры
  constructor(player) {
    this.player = player;
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
    console.log(ws)
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
        if (bullet.needDestroy(this.enemy)) {
            this.removeBullet(bullet);
        }
      })
      if (this.enemy.needDestroy()) {
        this.removeEnemy(this.enemy)
        if (this.enemy.isDestroyed) {
          this.spawnEnemy()
        }
      }
    }
  addBullet(bullet) {
      this.bullets.push(bullet)
  }
  removeBullet(bullet) {
      this.bullets.splice(this.bullets.indexOf(bullet), 1)
      bullet.destroy()
  }
  removeEnemy(enemy) {
      enemy.destroy()
  }
  spawnEnemy() {
    this.enemy = new Enemy()
  }
}

export default Game;
