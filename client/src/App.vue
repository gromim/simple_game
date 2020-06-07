<template>
  <div id="app">
    <Game />
  </div>
</template>

<script>
import Game from './components/Game'


export default {
  name: 'App',
  components: {Game},

}
</script>

<style lang="scss">
body::-webkit-scrollbar {height: 0;width: 0;}
</style>
