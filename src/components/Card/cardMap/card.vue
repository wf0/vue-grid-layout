<template>
  <div class="box" ref="echart">
    <comEchart :option="option" />
    <div class="top5">
      <div
        class="item"
        v-for="(item, index) in top5"
        :key="index"
        :style="{ color: color[index] }"
      >
        Top{{ index + 1 }}-{{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import comEchart from "@/components/Echarts";
import * as echarts from "echarts";

export default {
  name: "cardMap",

  components: { comEchart },

  data() {
    return {
      option: null,
      top5: [],
      color: ["#FF5E00", "#FFA200", "#FFEA00", "#C4E778", "#98D5D7"],
    };
  },

  mounted() {
    this.$nextTick(() => {
      axios
        .get("https://geo.datav.aliyun.com/areas_v2/bound/100000_full.json")
        .then((res) => {
          const map = [];
          let min = 0;
          let max = 0;
          res.data.features.forEach((i) => {
            const item = i.properties;
            max = Math.max(max, Number(item.adcode));
            min = Math.min(min, Number(item.adcode));
            map.push({
              name: item.name,
              value: Number(item.adcode),
            });
          });

          this.top5 = map.sort((a, b) => b.value - a.value).splice(0, 5);

          echarts.registerMap("china", res.data);

          this.option = {
            title: {
              text: "各省份GDP排名变化",
              subtext: "Changes in GDP ranking of provinces",
              textStyle: {
                color: "#fff",
              },
              subtextStyle: {
                color: "#fff",
              },
            },
            visualMap: {
              min,
              max,
              text: ["High", "Low"],
              realtime: false,
              calculable: true,
              inRange: {
                color: ["lightskyblue", "yellow", "orangered"],
              },
              textStyle: {
                color: "#fff",
              },
            },
            series: [
              {
                name: "香港18区人口密度",
                type: "map",
                map: "china",
                label: {
                  show: false,
                },
                data: map,
              },
            ],
          };
        });
    });
  },
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.top5 {
  position: absolute;
  right: 20px;
  bottom: 20px;

  .item {
    margin: 10px 0;
  }
}
</style>
