<template>
  <header>
    <nav>
      <router-link :to="{name: 'main'}" active-class="active">Main</router-link>
      <router-link :to="{name: 'inner'}" active-class="active">Inner</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({})
</script>
