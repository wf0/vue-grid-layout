<template>
  <div class="footer">
    <div class="footer-line">
      <svg width="1459" height="5">
        <polyline
          stroke="rgba(0, 194, 255, 0.3)"
          stroke-width="2"
          points="0, 2.5 1459, 2.5"
        ></polyline>
        <polyline
          stroke="rgba(0, 194, 255, 1)"
          stroke-width="2"
          points="5, 2.5 288.8, 2.5"
          stroke-dasharray="0, 291.8"
          fill="freeze"
        >
          <animate
            id="d10ani21677073433208"
            attributeName="stroke-dasharray"
            values="0, 291.8;291.8, 0;"
            dur="3s"
            begin="d10ani11677073433208.end"
            fill="freeze"
          ></animate>
          <animate
            attributeName="stroke-dasharray"
            values="291.8, 0;0, 291.8"
            dur="0.01s"
            begin="d10ani71677073433208.end"
            fill="freeze"
          ></animate>
        </polyline>
        <polyline
          stroke="rgba(0, 194, 255, 1)"
          stroke-width="2"
          points="294.8, 2.5 1164.2, 2.5"
          stroke-dasharray="0, 875.4"
        >
          <animate
            id="d10ani41677073433208"
            attributeName="stroke-dasharray"
            values="0, 875.4;875.4, 0"
            dur="3s"
            begin="d10ani31677073433208.end + 1s"
            fill="freeze"
          ></animate>
          <animate
            attributeName="stroke-dasharray"
            values="875.4, 0;0, 875.4"
            dur="0.01s"
            begin="d10ani71677073433208.end"
            fill="freeze"
          ></animate>
        </polyline>
        <polyline
          stroke="rgba(0, 194, 255, 1)"
          stroke-width="2"
          points="1170.2, 2.5 1454, 2.5"
          stroke-dasharray="0, 291.8"
        >
          <animate
            id="d10ani61677073433208"
            attributeName="stroke-dasharray"
            values="0, 291.8;291.8, 0"
            dur="3s"
            begin="d10ani51677073433208.end + 1s"
            fill="freeze"
          ></animate>
          <animate
            attributeName="stroke-dasharray"
            values="291.8, 0;0, 437.7"
            dur="0.01s"
            begin="d10ani71677073433208.end"
            fill="freeze"
          ></animate>
        </polyline>
        <circle cx="2" cy="2.5" r="2" fill="#03709f">
          <animate
            id="d10ani11677073433208"
            attributeName="fill"
            values="#03709f;#00c2ff"
            begin="0s;d10ani71677073433208.end"
            dur="0.3s"
            fill="freeze"
          ></animate>
        </circle>
        <circle cx="291.8" cy="2.5" r="2" fill="#03709f">
          <animate
            id="d10ani31677073433208"
            attributeName="fill"
            values="#03709f;#00c2ff"
            begin="d10ani21677073433208.end"
            dur="0.3s"
            fill="freeze"
          ></animate>
          <animate
            attributeName="fill"
            values="#03709f;#03709f"
            dur="0.01s"
            begin="d10ani71677073433208.end"
            fill="freeze"
          ></animate>
        </circle>
        <circle cx="1167.2" cy="2.5" r="2" fill="#03709f">
          <animate
            id="d10ani51677073433208"
            attributeName="fill"
            values="#03709f;#00c2ff"
            begin="d10ani41677073433208.end"
            dur="0.3s"
            fill="freeze"
          ></animate>
          <animate
            attributeName="fill"
            values="#03709f;#03709f"
            dur="0.01s"
            begin="d10ani71677073433208.end"
            fill="freeze"
          ></animate>
        </circle>
        <circle cx="1457" cy="2.5" r="2" fill="#03709f">
          <animate
            id="d10ani71677073433208"
            attributeName="fill"
            values="#03709f;#00c2ff"
            begin="d10ani61677073433208.end"
            dur="0.3s"
            fill="freeze"
          ></animate>
          <animate
            attributeName="fill"
            values="#03709f;#03709f"
            dur="0.01s"
            begin="d10ani71677073433208.end"
            fill="freeze"
          ></animate>
        </circle>
      </svg>
    </div>
    <div class="footer-title">©~朴：shu</div>
  </div>
</template>

<script>
export default {
  name: "VueLayoutIndex",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.footer {
  height: 40px;
  width: 100%;
  color: #fff;
  font-size: 16px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &-line {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
