<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { add } from '@hggui/utils'
defineProps<{ msg: string }>()
onMounted(() => {
  console.log('res : ' + add(1, 2))
})
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card bg-white border">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
