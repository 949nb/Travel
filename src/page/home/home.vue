<template>
  <div>
    <h1 @click="add">Hello, world</h1>
    <br/>
    <div>{{n}}</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      n: 1
    }
  },
  methods: {
    add() {
      this.n++
    }
  },
}
</script>

<style scoped>

</style>