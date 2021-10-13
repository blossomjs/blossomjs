<template>
  <div class="home-search">
    <div class="search">
      <div class="search-inner">
        <i class="icon el-icon-search"></i>
        <input type="text" class="text" placeholder="输入特效关键字搜索" />
        <div class="btn">搜索</div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.home-search {
  background: url(../../../assets/images/codebg.jpg) center/cover no-repeat;
  text-align: center;
  height: 240px;
  padding-top: 90px;
  box-sizing: border-box;
  .search {
    text-align: left;
    text-align: center;
    .search-inner {
      display: inline-block;
      position: relative;
    }
    .text {
      width: 500px;
      height: 50px;
      background: #fff;
      border: none;
      padding: 0 20px 0 50px;
      outline: none;
      border-radius: 50px;
      &:focus {
        box-shadow: 0 0 20px rgba(229, 63, 120, 0.6);
      }
    }
    .icon {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 20px;
      color: #999;
    }
    .btn {
      position: absolute;
      right: 0;
      top: 0;
      line-height: 50px;
      padding: 0 50px;
      background: #ea1c28;
      background: -webkit-linear-gradient(left, #e53f78, #ea1c28);
      color: #fff;
      border-radius: 50px;
      cursor: pointer;
      @include transition;
      &:hover {
        opacity: 0.9;
      }
      &:active {
        opacity: 0.8;
      }
    }
  }
}
</style>
