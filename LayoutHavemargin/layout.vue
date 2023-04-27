<template>
  <div class="layoutBox">
    <!-- 主拖拽区 -->
    <!-- 
      拖拽区 ===> content
      拖拽画布考虑：【这个主要是设计拖拽的宽高、间距、特别！！！是item的宽高对后期的影响是很大的】
      1. 我们目前的 content ：width: 1500px; height:650px
      2. 我们将宽度分为 10列，每一列是多少px?  (width -【col + 1】* margin) / col
      3. 高度的计算方式： row * n + (n + 1) * margin <= height
     -->
    <grid-layout
      :layout="layout"
      :col-num="13"
      :row-height="50"
      :is-draggable="true"
      :is-resizable="false"
      :is-mirrored="false"
      :vertical-compact="false"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <myGridItem :itemData="layout" />

      <!-- 拖拽预览区 -->
      <myGridItemPreview :itemData="previewData" v-if="showPreview" />
    </grid-layout>
  </div>
</template>

<script>
// 引入组件
import { GridLayout } from "vue-grid-layout";

// 引入自己的GridItem
import myGridItem from "./item.vue";
import myGridItemPreview from "./itemPreview.vue";
export default {
  name: "VueLayoutLayout",

  components: { GridLayout, myGridItem, myGridItemPreview },

  data() {
    return {
      layout: [],
      previewData: [],
      showPreview: false,
    };
  },
  methods: {
    initPreviewData() {
      for (let i = 0; i < 13; i++) {
        for (let j = 0; j < 10; j++) {
          this.previewData.push({ x: i, y: j, w: 1, h: 1, i: `${i}*${j}` });
        }
      }
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.layoutBox {
  width: 1440px;
  height: 610px;
}
</style>
