<template>
  <div class="box">
    <div class="box-title">
      <div>数据指标8</div>
      <div>
        <span>{{ 888 }}</span> 万元
      </div>
    </div>
    <div class="box-echart">
      <comEchart :option="option" />
    </div>
  </div>
</template>

<script>
import comEchart from "@/components/Echarts";

export default {
  name: "card8",
  components: {
    comEchart,
  },
  data() {
    return {
      option: null,
    };
  },
  mounted() {
    this.option = {
      polar: {
        radius: [30, "80%"],
      },
      radiusAxis: {
        max: 4,
      },
      angleAxis: {
        type: "category",
        data: ["a", "b", "c", "d"],
        startAngle: 75,
      },
      tooltip: {},
      series: {
        type: "bar",
        data: [
          {
            value: 2,
            itemStyle: {
              color: "#FF5E00",
            },
          },
          {
            value: 2.7,
            itemStyle: {
              color: "#FFA200",
            },
          },
          {
            value: 3.5,
            itemStyle: {
              color: "#FFEA00",
            },
          },
          // {
          //   value: 0.9,
          //   itemStyle: {
          //     color: "#C4E778",
          //   },
          // },
          {
            value: 1.7,
            itemStyle: {
              color: "#98D5D7",
            },
          },
        ],
        coordinateSystem: "polar",
        label: {
          show: true,
          position: "middle",
          formatter: "{b}: {c}",
        },
      },
      animation: false,
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
  // align-items: flex-end;
  &-title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 20px;
    font-weight: 900;
    span {
      margin-right: 10px;
      font-size: 32px;
      color: #40faee;
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    }
  }
  &-echart {
    height: calc(100% - 40px);
  }
}
</style>
