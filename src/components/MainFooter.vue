<template>
  <footer>
    <span>© {{year}} Vue Webpack 4 Boilerplate</span>
  </footer>
</template>

<script>
export default {
  name: 'main-footer',
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
