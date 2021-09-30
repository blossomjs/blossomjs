<template>
  <div class="home-work-list">
    <div class="list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <el-image class="img" :src="item.cover">
          <template v-slot:error>
            <div class="error-icon empty-img"></div>
          </template>
        </el-image>
        <div class="det">
          <div class="name" :title="item.name">{{ item.name }}</div>
          <div class="desc">{{ item.desc }}</div>
          <div class="info">
            <span class="time"><i class="el-icon-time"></i> {{ item.time }}</span>
            <span class="count"><i class="el-icon-view"></i> {{ item.viewCount }}</span>
          </div>
        </div>
      </div>
    </div>
    <el-pagination class="pagination" background layout="prev, pager, next" :total="1000"> </el-pagination>
  </div>
</template>
<script>
import { ref } from "vue"
export default {
  name: "Home",
  components: {},
  setup() {
    const list = ref([
      {
        cover: "https://t7.baidu.com/it/u=4036010509,3445021118&fm=193&f=GIF",
        name: "雪花特效",
        desc: "一个简单的 HTML、CSS 和 Javascript 特效",
        time: "2021-09-30",
        viewCount: 3,
      },
      {
        cover: "",
        name: "雪花特效",
        desc: "一个简单的 HTML、CSS 和 Javascript 特效",
        time: "2021-09-30",
        viewCount: 3,
      },
      {
        cover: "https://t7.baidu.com/it/u=4036010509,3445021118&fm=193&f=GIF",
        name: "圆环隧道js特效圆环隧道js特效圆环隧道js特效",
        desc: "一个简单的 HTML、CSS 和 Javascript 特效",
        time: "2021-09-30",
        viewCount: 3,
      },
      {
        cover: "https://t7.baidu.com/it/u=4036010509,3445021118&fm=193&f=GIF",
        name: "雪花特效",
        desc: "一个简单的 HTML、CSS 和 Javascript 特效",
        time: "2021-09-30",
        viewCount: 3,
      },
      {
        cover: "https://t7.baidu.com/it/u=4036010509,3445021118&fm=193&f=GIF",
        name: "雪花特效",
        desc: "一个简单的 HTML、CSS 和 Javascript 特效",
        time: "2021-09-30",
        viewCount: 3,
      },
    ])
    return {
      list,
    }
  },
}
</script>
<style scoped lang="scss">
.list {
  @include clearfix;
  .item {
    width: 235px;
    float: left;
    background: #fff;
    margin: 0 15px 15px 0;
    cursor: pointer;
    @include transition;
    &:hover {
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
      transform: translateY(-10px);
    }
    &:nth-child(4n) {
      margin-right: 0;
    }
    .img {
      width: 100%;
      height: 240px;
    }
    .det {
      padding: 15px;
      .name {
        @include word-wrap;
      }
      .desc {
        color: #999;
        font-size: 12px;
        margin-top: 10px;
        line-height: 20px;
        height: 40px;
        overflow: hidden;
      }
      .info {
        margin-top: 10px;
        font-size: 13px;
        border-top: 1px solid #eee;
        padding-top: 10px;
        color: #999;
        .count {
          float: right;
        }
      }
    }
    .error-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 80px;
    }
  }
}
.pagination {
  text-align: center;
  padding: 20px 0;
}
</style>
