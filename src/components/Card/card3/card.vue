<template>
  <div class="box">
    <div class="box-title">数据指标3</div>
    <div class="box-num">
      <span>{{ 333 }}</span> 个
    </div>
  </div>
</template>

<script>
export default {
  name: "card3",
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
  align-items: flex-end;
  &-title {
    font-size: 20px;
    font-weight: 900;
  }
  &-num {
    span {
      margin-right: 10px;
      font-size: 32px;
      color: #40faee;
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    }
  }
}
</style>
