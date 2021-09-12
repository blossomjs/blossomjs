<template>
  <div class="header-bar">
    <div class="logo">
      <img src="../../assets/images/logo.png" />
    </div>
    <div class="title">
      <span class="tit">blossomjs</span>
      <span class="txt">特效仓库</span>
      <span class="txt">to build the next generation web interface</span>
    </div>
    <ul class="nav-menu">
      <li><a href="#">登录</a></li>
      <li><a href="#">注册</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HeaderBar",
}
</script>
<style scoped lang="scss">
.header-bar {
  background: #000;
  color: #fff;
  padding: 0 20px;
  height: 70px;
  @include clearfix;
  .logo {
    float: left;
    padding-top: 10px;
    img {
      height: 50px;
    }
  }
  .title {
    line-height: 70px;
    float: left;
    > span {
      margin-left: 20px;
    }
    .tit {
      font-size: 24px;
    }
    .txt {
      opacity: 0.5;
    }
  }
  .nav-menu {
    float: right;
    margin: 0;
    li {
      list-style: none;
      float: left;
      padding: 0 10px;
      line-height: 70px;
      a {
        color: #fff;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
          color: $color-primary;
        }
      }
    }
  }
}
</style>
