<template>
  <div class="wrapper">
    <div id="game-area" class="game-area">
      <div ref="enemy" class="enemy">100</div>
    </div>
    <Header />
  </div>
</template>

<script>
import Header from './Header'
import ws from '@/plugins/connect'
import Game from '@/game/game'
import Player from '@/game/player'
import Enemy from '@/game/enemy'

export default {
  name: "Game",
  components: { Header },
	data: () => {
		return {
			game: null
		}
	},
	mounted() {
		let player = new Player()
		let enemy = new Enemy(this.$refs.enemy)
		this.game = new Game(player, enemy)
		document.addEventListener('keydown', e => this.game.keydown(e))
	},
	methods: {
		connect() {
			ws.open()
		},
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
    width: 100px;
    height: 25px;
    line-height: 25px;
    background: #e74c3c;
    color: #fff;
    text-align: center;
  }
</style>