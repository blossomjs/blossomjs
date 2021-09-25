<template>
  <div class="m-panel" :style="style">
    <header v-if="title">
      <div class="m-panel__header-title">{{ title }}</div>
    </header>
    <main class="m-panel__content">
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: "MPanel",
  props: {
    width: String,
    title: String,
  },
  computed: {
    style() {
      const style = {}
      if (this.width) style.width = this.width
      return style
    },
  },
}
</script>

<style lang="scss">
.m-panel {
  margin: 10px;
  border-radius: 2px;
  background: #fff;
  header {
    min-height: 40px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e8e8e8;
    padding: 0 10px;
    .m-panel__header-title {
      margin: 0;
      color: #262626;
      font-weight: bold;
      font-size: 14px;
    }
  }
  .m-panel__content {
    padding: 10px;
  }
}
</style>
