class Game {
  // Класс игры
  // Тут основная логика игры
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }
  keydown({key}) {
    const keys = {
      'ArrowLeft': this.player.moveLeft,
      'ArrowRight': this.player.moveRight,
      'ArrowUp': this.player.attack,
    }
    if (keys[key]) keys[key].call(this.player)
  }
}

export default Game;
