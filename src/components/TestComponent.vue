<template>
  <section>
    <span>{{count}}</span>
    <button v-on:click="addToCount">Recount it</button>
  </section>
</template>

<script>
export default {
  name: 'test-component',
  data () {
    return {
      count: 0
    }
  },
  props: {
    countStep: {
      type: Number,
      default: 0
    }
  },
  methods: {
    addToCount () {
      this.count+= this.countStep || 1
      this.$emit('count', this.count)
    }
  }
}
</script>
