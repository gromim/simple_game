<template>
  <div id="app">
    <div id="game-area" class="game-area">
      <div ref="enemy" class="enemy"></div>
    </div>
    
    <button @click="connect">Коннект</button>
  </div>
</template>

<script>
import ws from '@/plugins/connect'
import Game from '@/game/game'
import Player from '@/game/player'
import Enemy from '@/game/enemy'

export default {
  name: 'App',
  components: {},
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

<style lang="scss">
.player {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: green;
}
</style>
