<template>
  <div>
    <div>
      <button>test</button>
    </div>

    <h3>hello</h3>

    <div>
      <h1>h1h1h1h1</h1>
      <h2>h2h2h</h2>
      <h3>{{ data }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ButtonProps } from './HButton'

defineOptions({
  name: 'HButton'
})

const Props = defineProps(ButtonProps)

const data = computed(() => {
  return 'a' + Props.size
})
</script>

<style lang="scss" scoped></style>
