<template>
  <div class="WRAP_MIDDLE">
    <h1>活动详情</h1>
    <h2>{{ id }}</h2>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
const id = route.params.id
</script>

<style lang="scss" scoped>
</style>