<template>
  <div class="box">
    <div class="box-title">指标9数据明细</div>
    <div class="box-num">
      <div class="box-num-item" v-for="(item, index) in listL" :key="index">
        <div class="box-num-item-num">
          <div>
            <span class="no"> No.{{ index + 1 }}</span>
            <span class="name">{{ item.name }}</span>
          </div>
          <span>{{ item.num }}</span>
        </div>
        <!-- 宽度动态实现 -->
        <div
          class="box-num-item-line"
          :style="{ width: (item.num / 120) * 100 + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card9",
  data() {
    return {
      listL: [
        { name: "指标9-1", num: 120 },
        { name: "指标9-2", num: 100 },
        { name: "指标9-3", num: 90 },
        { name: "指标9-4", num: 80 },
        { name: "指标9-5", num: 75 },
        { name: "指标9-6", num: 71 },
        { name: "指标9-7", num: 69 },
        { name: "指标9-8", num: 63 },
        { name: "指标9-9", num: 59 },
        { name: "指标9-10", num: 55 },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // align-items: center;
  &-title {
    font-size: 20px;
    font-weight: 900;
  }
  &-num {
    height: calc(100% - 30px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &-item {
      border-bottom: 2px solid rgba(19, 112, 251, 0.5);
      margin-top: 5px;
      &-num {
        display: flex;
        justify-content: space-between;
        div {
          width: 120px;
          display: flex;
          justify-content: space-between;
        }
        .no {
          width: 40px;
          color: #1370fb;
        }
      }
      &-line {
        background-color: #1370fb;
        height: 6px;
        margin-bottom: 2px;
        border-radius: 1px;
        overflow: hidden;
      }
    }
  }
}
</style>
