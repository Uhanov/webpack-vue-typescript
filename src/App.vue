<template>
  <div>
    <main-navbar></main-navbar>
    <main>
      <router-view></router-view>
    </main>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainNavbar from '@/components/MainNavbar'
import MainFooter from '@/components/MainFooter'

export default {
  name: 'app',
  components: {
    MainNavbar,
    MainFooter
  }
}
</script>