<template>
  <div class="m-panel-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MPanelGroup",
  props: {
    height: {
      type: String,
      default: "100%",
    },
  },
}
</script>

<style lang="scss">
.m-panel-group {
  flex: 1;
  display: flex;
  flex-direction: row;
}
</style>
