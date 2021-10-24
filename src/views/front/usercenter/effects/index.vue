<template>
  <div class="effect-container">
    <div class="title-bar">
      <div class="controls">
        <el-button size="small" type="primary" @click="topublish">上传特效</el-button>
      </div>
      <div class="title">我的特效</div>
    </div>
    <div class="list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <el-image class="img" :src="item.cover">
          <template v-slot:error>
            <div class="error-icon empty-img"></div>
          </template>
        </el-image>
        <div class="det">
          <div class="name" :title="item.title">{{ item.title }}</div>
          <div class="desc">{{ item.description }}</div>
          <div class="info">
            <span class="time"><i class="el-icon-time"></i> {{ item.createTime }}</span>
            <span class="count"><i class="el-icon-view"></i> {{ item.viewCount || 0 }}</span>
          </div>
          <div class="controls">
            <el-button size="small" @click="toshow(item)" icon="el-icon-view">查看</el-button>
            <el-button size="small" @click="toedit(item)" icon="el-icon-edit">编辑</el-button>
          </div>
        </div>
      </div>
    </div>
    <el-pagination class="pagination" background layout="prev, pager, next" :total="total"> </el-pagination>
  </div>
</template>
<script>
import { ref } from "vue"
import { useRouter } from "vue-router"
import req from "@/api/web/effect"
export default {
  name: "Home",
  components: {},
  setup() {
    const router = useRouter()
    const list = ref([])
    const total = ref(0)
    const getList = async () => {
      const res = await req("getEffectList", { pageIndex: 1, pageSize: 10 })
      list.value = res.records
      total.value = res.total
    }
    getList()
    const topublish = () => {
      router.push({
        path: "/effects/publish",
      })
    }
    const toedit = (data) => {
      router.push({
        path: "/effects/publish",
        query: {
          id: data.effectId,
        },
      })
    }
    const toshow = (data) => {
      const url = router.resolve({
        path: "/effects/show",
        query: {
          id: data.effectId,
        },
      })
      window.open(url.href, "_blank")
    }
    return {
      list,
      total,
      topublish,
      toedit,
      toshow,
    }
  },
}
</script>
<style scoped lang="scss">
.list {
  @include clearfix;
  .item {
    width: 50%;
    float: left;
    margin: 0 0 15px 0;
    padding-right: 20px;
    box-sizing: border-box;
    cursor: pointer;
    @include transition;
    &:hover {
      //   box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
      transform: translateY(-5px);
    }
    &:nth-child(4n) {
      margin-right: 0;
    }
    .img {
      width: 240px;
      height: 240px;
      float: left;
      background: #fff;
    }
    .det {
      height: 240px;
      padding: 15px;
      box-sizing: border-box;
      margin-left: 240px;
      background: #fff;
      .name {
        height: 40px;
        line-height: 20px;
        overflow: hidden;
      }
      .desc {
        color: #999;
        font-size: 12px;
        margin-top: 10px;
        line-height: 20px;
        height: 70px;
        overflow: hidden;
      }
      .info {
        margin-top: 10px;
        font-size: 13px;
        border-bottom: 1px solid #eee;
        padding: 10px 0;
        color: #999;
        .count {
          float: right;
        }
      }
      .controls {
        padding-top: 10px;
        text-align: right;
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
.title-bar {
  padding-bottom: 15px;
  margin-right: 20px;
  @include clearfix;
  .controls {
    float: right;
  }
}
</style>
