<template>
  <footer>
    <span>© {{year}} Vue Webpack 4 Boilerplate</span>
  </footer>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    name: 'main-footer',
    data () {
      return {
        year: new Date().getFullYear()
      }
    }
  })
</script>
