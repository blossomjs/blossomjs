<template>
  <div class="device-header">
    <div class="title">{{ effect.title }}</div>
    <div class="devices">
      <div class="item" v-for="item in deviceList" :key="item.value" @click="selectDevice(item.value)">
        <i class="icon-monitor" :class="[item.value, device == item.value ? 'active' : '']"></i>
      </div>
    </div>
  </div>
  <div class="effect-container">
    <div class="wrapper" :class="device" ref="containerRef"></div>
  </div>
</template>
<script>
import { ref } from "vue"
import { useRoute } from "vue-router"
import req from "@/api/web/effect"
export default {
  setup() {
    const route = useRoute()
    const containerRef = ref()
    const effect = ref({})
    //设备相关逻辑
    const deviceList = ref([
      { value: "pc" },
      { value: "pad" },
      { value: "pad-h" },
      { value: "mobile" },
      { value: "mobile-h" },
    ])
    const device = ref("pc")
    const selectDevice = (value) => {
      device.value = value
    }

    //装载数据
    const loadData = (effect) => {
      containerRef.value.innerHTML = effect.html
      const styleDom = document.createElement("style")
      styleDom.setAttribute("id", "effectStyle")
      styleDom.innerHTML = effect.css
      document.head.appendChild(styleDom)
    }
    //编辑
    const id = route.query.id
    const getData = async () => {
      const res = await req("getEffectList", { pageIndex: 1, pageSize: 10 })
      effect.value = res.records.find((a) => (a.effectId = id))
      if (effect.value) {
        loadData(effect.value)
      }
    }
    id && getData()
    return {
      containerRef,
      effect,
      device,
      deviceList,
      selectDevice,
    }
  },
}
</script>
<style scoped lang="scss">
.device-header {
  background: #000;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  color: #fff;
  .title {
    float: left;
  }
  .devices {
    float: left;
    margin-left: 20px;
    .item {
      float: left;
      padding: 0 5px;
      cursor: pointer;
    }
    .icon-monitor {
      display: inline-block;
      width: 17px;
      height: 16px;
      background-image: url(../../../../assets/images/mon-spr.png);
      background-position: 0 0;
      background-repeat: no-repeat;
      &.pc {
        background-position: 0 0;
      }
      &.pad {
        background-position: -24px 0;
      }
      &.pad-h {
        background-position: -49px 0;
      }
      &.mobile {
        background-position: -71px 0;
      }
      &.mobile-h {
        background-position: -94px 0;
      }
      &.active.pc {
        background-position: 0 -16px;
      }
      &.active.pad {
        background-position: -24px -16px;
      }
      &.active.pad-h {
        background-position: -49px -16px;
      }
      &.active.mobile {
        background-position: -71px -16px;
      }
      &.active.mobile-h {
        background-position: -94px -16px;
      }
    }
  }
}
.effect-container {
  .wrapper {
    &.pc {
    }
    &.pad {
      height: 960px !important;
      margin: 0 auto;
      padding: 96px 100px 115px 49px;
      width: 785px;
      margin-top: 40px;
      background: url(../../../../assets/images//bgipad.png) no-repeat 0 0;
      transition: all 0.5s ease 0s;
    }
    &.pad-h {
      height: 703px !important;
      margin: 0 auto;
      padding: 41px 115px 100px 75px;
      width: 1041px;
      margin-top: 40px;
      background: url(../../../../assets/images//bgipadw.png) no-repeat;
      transition: all 0.5s ease 0s;
    }
    &.mobile {
      height: 735px !important;
      margin: 0 auto;
      padding: 102px 25px 159px 23px;
      width: 414px;
      margin-top: 40px;
      background: url(../../../../assets/images//bgiphone2.png) no-repeat;
      transition: all 0.5s ease 0s;
    }
    &.mobile-h {
      height: 273px !important;
      margin: 0 auto;
      padding: 43px 115px 69px 82px;
      width: 605px;
      margin-top: 40px;
      background: url(../../../../assets/images//bgiphonew.png) no-repeat;
      transition: all 0.5s ease 0s;
    }
  }
}
</style>
