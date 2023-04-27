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
      {{ item.i }}
    </grid-item>
  </div>
</template>

<script>
import { GridItem } from "vue-grid-layout";
export default {
  name: "VueLayoutItem",

  props: ["itemData"],

  components: { GridItem },
};
</script>

<style lang="less" scoped>
.grid-item {
  border-top: 2px solid rgba(1, 153, 209, 0.5);
  background-color: rgba(6, 30, 93, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
</style>
