<template>
  <div class="app_main">
    <topVue />
    <layout />
    <Footer />
  </div>
</template>

<script>
import topVue from "./components/Top/index.vue";
import layout from "./components/Layout/index.vue";
import Footer from "./components/Footer/index.vue";
export default {
  components: { topVue, layout, Footer },
};
</script>

<style lang="less" scoped>
.app_main {
  // 固定app的宽高是为了后期计算方便，在实际项目中，也会有一个 baseWidth baseHeight (UI设计的原始宽高)
  // border: solid red 1px;
  width: 1500px;
  height: 700px;
  background: url("~@/assets/bg.png") 100% 100% no-repeat;
  overflow: hidden;
}
</style>
