<template>
  <div class="m-panel">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MPanel"
}
</script>

<style lang="scss">
.m-panel {
  margin: 10px;
  padding: 10px;
  border-radius: 2px;
  background: #fff;
}
</style>
