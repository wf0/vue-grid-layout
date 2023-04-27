<template>
  <div class="layout"><myLayoutVue /></div>
</template>

<script>
import myLayoutVue from "./layout.vue";
export default {
  name: "layout-index",
  components: { myLayoutVue },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.layout {
  width: 1500px;
  display: flex;
  justify-content: center;
  height: 610px;
  overflow: hidden;
}
</style>
