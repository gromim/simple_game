<template>
  <div id="app">
    <button @click="connect">Коннект</button>
  </div>
</template>

<script>
import ws from '@/plugins/connect'
export default {
  name: 'App',
  components: {},
  created() {

  },
  methods: {
    connect() {
      ws.open()
    }
  }
}
</script>

<style lang="scss">
</style>
