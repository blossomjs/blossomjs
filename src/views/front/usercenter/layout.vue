<template>
  <div class="ucenter-container">
    <div class="wrapper">
      <Siderbar />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import RouterView from "../../../components/Layout/router-view.vue"
import Siderbar from "./layout-sidebar.vue"
export default {
  components: { Siderbar, RouterView },
}
</script>
<style scoped lang="scss">
.wrapper {
  width: 100%;
  margin: 0 auto;
  border-radius: $radius;
  @include clearfix;
  .content {
    margin-left: 220px;
    padding-top: 20px;
    overflow: hidden;
  }
}
</style>
