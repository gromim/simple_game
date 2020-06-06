<template>
  <div id="app">
    <div ref='area' class="game-area">
      <div ref="enemy" class="enemy"></div>
      <div ref="player" class="player"></div>
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
  created() {
    let player = new Player(this.$refs.player, document)
    let enemy = new Enemy(this.$refs.enemy)
    this.game = new Game(player, enemy)
  },
  methods: {
    connect() {
      ws.open()
    },
  }
}
</script>

<style lang="scss">


</style>
