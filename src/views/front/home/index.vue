<template>
  <HomeSearch />
  <div class="container">
    <HomeFilter />
    <HomeWorkList />
  </div>
  <HomeFooter />
</template>

<script>
import HomeSearch from "./home-search.vue"
import HomeFilter from "./home-filter.vue"
import HomeWorkList from "./home-work-list.vue"
import HomeFooter from "./home-footer.vue"
export default {
  name: "Home",
  components: { HomeSearch, HomeFilter, HomeWorkList, HomeFooter },
  setup() {
    return {}
  },
}
</script>
<style scoped lang="scss">
.container {
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
