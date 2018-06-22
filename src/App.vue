<template>
  <div>
    <main-navbar></main-navbar>
    <main>
      <router-view></router-view>
    </main>
    <main-footer></main-footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainNavbar from '@/components/MainNavbar.vue'
import MainFooter from '@/components/MainFooter.vue'

export default Vue.extend({
  name: 'app',
  components: {
    MainNavbar,
    MainFooter
  }
})
</script>