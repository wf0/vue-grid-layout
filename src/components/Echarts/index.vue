<template>
  <div ref="echarts" class="echart" style="height: 100%; width: 100%"></div>
</template>

<script>
import * as echarts from "echarts";

const elementResizeDetectorMaker = require("element-resize-detector");
let erd = elementResizeDetectorMaker();

export default {
  props: ["option"],

  data() {
    return {
      myChart: null,
      myChartDom: null,
    };
  },

  watch: {
    option: {
      handler(value) {
        if (!value) return;
        this.initEcharts();
      },
      immediate: true,
      deep: true,
    },
  },

  methods: {
    initEcharts() {
      this.$nextTick(() => {
        if (this.myChart) this.myChart.dispose(); // 销毁
        this.myChartDom = this.$refs.echarts;
        // 初始化统计图
        this.myChart = echarts.init(this.myChartDom);
        this.myChart.setOption(this.option);
        //  使echarts尺寸重置
        this.myChart.resize();

        erd.listenTo(this.$refs.echarts, () => {
          this.$nextTick(function () {
            //使echarts尺寸重置
            this.myChart.resize();
          });
        });
      });
    },
  },

  mounted() {},
};
</script>

<style lang="less" scoped></style>
