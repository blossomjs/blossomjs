<template>
  <div class="container">主页</div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  created() {
    this.$store.dispatch("user/login", {
      username: "huyijin999",
      password: "huyijin999",
    })
  },
}
</script>
