<template>
  <div class="container">
    <header-bar />
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import HeaderBar from "./HeaderBar.vue"
export default {
  components: { HeaderBar },
}
</script>
<style scoped lang="scss">
.container {
  min-height: 100vh;
  background: $body-background;
}
</style>
