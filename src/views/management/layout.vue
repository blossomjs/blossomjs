<template>
  <m-layout-pro
    :logo="logoSrc">
  </m-layout-pro>
</template>

<script>
import mLayoutPro from "@/components/common/m-layout-pro"
import logo from '@/assets/images/management/logo.png'

export default {
  name: "ManagementLayout",
  components: {
    mLayoutPro,
  },
  data () {
    return {
      logoSrc: logo
    }
  }
}
</script>
