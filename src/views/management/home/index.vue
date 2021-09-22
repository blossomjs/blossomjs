<template>
  <m-layout-page>
    <header class="header">
      <div class="avatar-wrap">
        <el-avatar icon="el-icon-user-solid" :size="56"></el-avatar>
      </div>
      <p>今天又是美好的一天。</p>
    </header>
    <img class="home-pic" src="@/assets/images/management/home.jpg" />
  </m-layout-page>
</template>

<script>
export default {
  name: "ManagementHome",
}
</script>

<style lang="scss">
.home-pic {
  width: 100%;
  height: calc(100vh - 200px);
}
.header {
  height: 88px;
  width: 100%;
  background: #fff;
  display: flex;
  .avatar-wrap {
    width: 56px;
    height: 56px;
    background-size: contain;
    background-position: center;
    overflow: hidden;
    margin: 16px;
  }
  p {
    font-size: 14px;
    margin-top: 18px;
    font-weight: bold;
  }
}
</style>
