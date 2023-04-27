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
      :is-draggable="isDraggable"
      :is-resizable="isResizable"
      :is-mirrored="false"
      :vertical-compact="false"
      :preventCollision="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <!-- 背景框 -->
      <myGridItemPreview :itemData="backgroundData" v-if="showPreview" />

      <!-- 预览数据 -->
      <myGridItem
        :itemData="previewData"
        @closeItemHandle="closeItemHandle"
        :isDraggable="isDraggable"
      />

      <!-- 正式数据 layout 渲染区 -->
      <myGridItem
        :itemData="layout"
        @closeItemHandle="closeItemHandle"
        :isDraggable="isDraggable"
      />
    </grid-layout>
  </div>
</template>

<script>
// 引入组件
import { GridLayout } from "vue-grid-layout";

// 引入自己的GridItem
import myGridItem from "./item.vue";
import myGridItemPreview from "./itemPreview.vue";
// 引入 自定义配置项
// import { getCardConfigList } from "./getCard";

// 引入默认预设
import { defaultPreviewData } from "./defaultPreview";

import uuid from "uuid";

// 一定使用深度克隆！数组是引用对象，会导致数据混乱
import { cloneDeep } from "lodash-es";

export default {
  name: "VueLayoutLayout",

  components: { GridLayout, myGridItem, myGridItemPreview },

  data() {
    return {
      // 最终渲染的数据
      layout: [],
      // 背景框
      backgroundData: [],
      // 拖拽的预览数据，不能将拖拽未完成、拖拽出错的数据直接渲染
      previewData: [],
      // 预设数据【提供的固定模板】
      defaultData: [],

      // 用户自定义的拖拽数据【卡片超市拖拽】
      userData: [],
      isDraggable: false,
      isResizable: false,
      useable: false,

      // 标记拖拽阶段
      flag: "",

      showPreview: false,
    };
  },

  watch: {
    "$store.state.defaultPreviewIndex": {
      handler(val) {
        this.layout = defaultPreviewData[val];
      },
      deep: true,
    },
    "$store.state.openCard"(val) {
      val
        ? (this.initPreviewData(),
          (this.isDraggable = true),
          (this.isResizable = true))
        : ((this.showPreview = false),
          (this.isDraggable = false),
          (this.isResizable = false));
    },

    "$store.state.atPiont": {
      handler(val) {
        if (!val[0] && !val[1]) return;
        // 监听实时位置,并生成预览对象
        const item = this.$store.state.dragItem;
        // console.log("实时位置", val, item);
        // 需要映射正式数据
        this.previewData = cloneDeep(this.layout);
        const x = Math.ceil(val[0] / 100) - 1;
        const y = Math.ceil(val[1] / 50) - 1;
        this.useable = this.piontUseable(item, this.previewData, x, y);

        this.previewData.push({
          // x y 要根据实时位置生成
          x,
          y,
          w: item.w,
          h: item.h,
          i: item.i,
        });
      },
      deep: true,
    },
    "$store.state.endPiont": {
      handler(val) {
        // 监听最后位置【转换为正式数据】
        this.layout = cloneDeep(this.previewData);
        this.previewData = []; // 清空预览数据

        // console.log("最后位置", val);
      },
      deep: true,
    },
  },

  methods: {
    initPreviewData() {
      this.showPreview = true;
      this.backgroundData = [];
      for (let i = 0; i < 13; i++) {
        for (let j = 0; j < 10; j++) {
          this.backgroundData.push({
            x: i,
            y: j,
            w: 1,
            h: 1,
            i: uuid, // 防止 key 重复
          });
        }
      }
    },

    // 判断位置是否可用[做成通用函数，可判断任意数组的位置可用性]
    piontUseable(item, data, x, y) {
      let useable = true;
      // 思路就是判断当前数据中是否包含了该位置的元素【1：1】
      // 同时还需要检测大小是否能放下该元素 【大放小】
      // 位置[能放下指的是，在我的宽高尺寸范围内，都没有元素]
      data.forEach((i) => {
        // 当前 数组内的元素的范围：
        // i.x 开始，i.w 结束，判断当前范围内，传入的 x 值 是否合理
        if ((i.x <= x && x <= i.w) || (i.y <= y && y <= i.h)) useable = false;

        // 判断范围【指的是 当前元素的大小 从 x y 开始 w h 范围内 没有元素】
        if (!(i.x >= x && i.x <= item.w) && !(i.y >= y && i.y <= item.h))
          useable = false;
      });
      return useable;
    },

    closeItemHandle(item) {
      // 预览与正式数据公用一个 item 因此，需两者都清除数据
      this.layout.splice(
        this.layout.findIndex((i) => i.i == item.i),
        1
      );
      this.previewData.splice(
        this.previewData.findIndex((i) => i.i == item.i),
        1
      );
    },
  },

  mounted() {
    // this.layout = getCardConfigList();
    // this.layout = defaultPreviewData[this.defaultPreviewIndex];
  },
};
</script>

<style lang="less" scoped>
.layoutBox {
  width: 1440px;
  height: 610px;
}
</style>
