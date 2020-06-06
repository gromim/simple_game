class Game {
  // Класс игры
  // Тут основная логика игры
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }
  keydown(e) {
    if (e.key == "ArrowLeft") {
      this.player.moveLeft();
    } else if (e.key == "ArrowRight") {
      this.player.moveRight();
    } else if (e.key == "ArrowUp") {
      this.player.attack();
    }
  }
}

export default Game;
