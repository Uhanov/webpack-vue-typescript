<template>
  <section>
    <h2>Inner page</h2>
    <test-component></test-component>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
  import TestComponent from '@/components/TestComponent'

  export default Vue.extend({
    components: {
      TestComponent
    }
  })
</script>
