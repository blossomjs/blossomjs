<template>
  <div class="m-layout-page">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MLayoutPage",
}
</script>

<style lang="scss">
.m-layout-page {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
}
</style>
