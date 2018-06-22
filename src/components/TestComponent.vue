<template>
  <section>
    <span>{{count}}</span>
    <button v-on:click="addToCount">Recount it</button>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
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
  })
</script>
