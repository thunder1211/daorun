<template>
  <div :class="{onOpenmenuFixed: store.isOpenmenu}">
  <PageHead/>
  <slot></slot>
  <PageFoot/>
</div>
</template>

<script setup>
import { store } from '../store.js'

function onClickMenuicon() {
  store.changeOpenmenu()
}
</script>


<style lang="scss" scoped>
.onOpenmenuFixed{
  position: absolute;
  width: 100%;
  height: 100%;
  /* overflow: auto; */
}
</style>