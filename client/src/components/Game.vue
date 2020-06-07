<template>
  <div class="wrapper">
    <div id="game-area" class="game-area" @click="click">
    </div>
    <Header />
    <div v-if="isSelectMode" class="select-mode">
      <h2>Выбери режим:</h2>
      <button @click="selectSolo">Соло</button>
      <button @click="selectOnline">Онлайн</button>
    </div>
  </div>
  
</template>

<script>
import Header from './Header'
import ws from '@/plugins/connect'
import Game from '@/game/game'
import Player from '@/game/player'

export default {
  name: "Game",
  components: { Header },
	data: () => {
		return {
      game: null,
      isSelectMode: true
		}
	},
	mounted() {
		let player = new Player()
		this.game = new Game(player)
    this.game.spawnEnemy()
    document.addEventListener('keydown', e => this.game.keydown(e))
    document.addEventListener('keyup', e => this.game.keyup(e))

	},
	methods: {
		connect() {
			ws.open()
    },
    click(e) {
      this.game.click(e)
    },
    selectOnline() {
      this.isSelectMode = false
      ws.open()
      this.game.start()
    },
    selectSolo() {
      this.isSelectMode = false
      this.game.start()
    }
	}
}
</script>

<style>
  .game-area {
    position: relative;
    height: 95vh;
    background: #4caf50;
  }
  .player {
    background: url('./../assets/pers.png') no-repeat center;
    position: absolute;
    width: 30px;
    height: 30px;
    bottom: 0;
    left: 50vw;
    z-index: 1000;
  }
  .enemy {
    position: absolute;
    width: 100px;
    height: 25px;
    line-height: 25px;
    background: #e74c3c;
    color: #fff;
    text-align: center;
  }
  .bullet {
    position: absolute;
    width: 10px;
    height: 10px;
    background: red;
    border-radius: 50%;
  }
  .select-mode {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 30%;
    border: 1px solid black;
    border-radius: 20px;
    background: whitesmoke;
    
  }
</style>