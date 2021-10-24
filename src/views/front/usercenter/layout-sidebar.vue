<template>
  <div class="sidebar">
    <div class="uhead">
      <el-image class="img" src="" v-if="user.profileImg"></el-image>
      <div class="default-avatar" v-else><i class="el-icon-user"></i></div>
      <div class="name">{{ user.name || user.uername }}</div>
    </div>
    <div class="menu">
      <div
        class="item"
        :class="{ active: menuActive(item.path) }"
        v-for="(item, i) in menuList"
        :key="i"
        @click="toPath(item)"
      >
        <a href="javascript:;">{{ item.label }}</a>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from "vue"
import { useStore } from "vuex"
import { useRoute, useRouter } from "vue-router"
export default {
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const user = computed(() => store.state.user.info)
    const menuActive = (val) => {
      const path = route.path
      const reg = new RegExp("^" + val)
      return reg.test(path)
    }
    const menuList = ref([
      { label: "我的特效", path: "/usercenter/effects" },
      { label: "我的收藏", path: "/usercenter/fav" },
      { label: "我的资料", path: "/usercenter/info" },
    ])
    const toPath = (menu) => {
      router.push(menu.path)
    }
    return {
      user,
      menuActive,
      menuList,
      toPath,
    }
  },
}
</script>
<style scoped lang="scss">
.sidebar {
  width: 200px;
  float: left;
  min-height: calc(100vh - 70px);
  background: #fff;
  .uhead {
    @include clearfix;
    text-align: center;
    padding: 20px 0;
    .img {
      width: 90px;
      height: 90px;
    }
    .default-avatar {
      width: 90px;
      height: 90px;
      line-height: 90px;
      background: #eee;
      border-radius: 50%;
      font-size: 30px;
      color: #ccc;
      display: inline-block;
    }
    .name {
      margin-top: 10px;
    }
  }
  .menu {
    margin-top: 20px;
    .item {
      line-height: 44px;
      border-bottom: 1px solid $body-background;
      position: relative;
      &:first-child {
        border-top: 1px solid $body-background;
      }
      &:hover {
        background: $body-background;
      }
      &.active {
        &:before {
          content: "";
          display: block;
          width: 3px;
          height: 20px;
          position: absolute;
          left: 0;
          background: $color-primary;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 0 3px 3px 0;
        }
        a {
          color: $color-primary;
        }
      }
      a {
        display: block;
        color: #666;
        text-decoration: none;
        padding: 0 30px;
      }
    }
  }
}
</style>
