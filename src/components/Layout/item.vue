<template>
  <div>
    <grid-item
      v-for="item in itemData"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :key="item.i"
      class="grid-item"
    >
      <div class="grid-item-close" @click="closeItem(item)" v-if="isDraggable">
        &times;
      </div>
      <!-- {{ item.i }} -->
      <component :is="item.i"></component>
    </grid-item>
  </div>
</template>

<script>
import { GridItem } from "vue-grid-layout";
export default {
  name: "VueLayoutItem",

  props: ["itemData", "isDraggable"],

  components: { GridItem },

  methods: {
    closeItem(item) {
      this.$emit("closeItemHandle", item);
    },
  },
};
</script>

<style lang="less" scoped>
.grid-item {
  position: relative;
  width: 100%;
  height: 100%;
  border-top: 2px solid rgba(1, 153, 209, 0.5);
  background-color: rgba(6, 30, 93, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  &-close {
    position: absolute;
    right: 5px;
    top: 0;
    font-size: 24px;
    cursor: pointer;
  }
}
</style>
