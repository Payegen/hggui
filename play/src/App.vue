<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import HButton from '@hgg-ui/components'
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <HButton size="big" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
