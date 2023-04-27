<template>
  <div class="top-header">
    <div class="dv-decoration-8 header-left-decoration">
      <svg width="384" height="60">
        <polyline
          stroke="#3f96a5"
          stroke-width="2"
          fill="transparent"
          points="0, 0 30, 30"
        ></polyline>
        <polyline
          stroke="#3f96a5"
          stroke-width="2"
          fill="transparent"
          points="20, 0 50, 30 384, 30"
        ></polyline>
        <polyline
          stroke="#3f96a5"
          fill="transparent"
          stroke-width="3"
          points="0, 57, 200, 57"
        ></polyline>
      </svg>
    </div>
    <div class="dv-decoration-5 header-center-decoration">
      <svg width="614" height="60">
        <polyline
          fill="transparent"
          stroke="#3f96a5"
          stroke-width="3"
          points="0,12 110.52,12 122.80000000000001,24 153.5,24 165.78,36 442.08,36 460.5,24 491.20000000000005,24 503.47999999999996,12 614,12"
        >
          <animate
            attributeName="stroke-dasharray"
            attributeType="XML"
            from="0, 316.1165429846644, 0, 316.1165429846644"
            to="0, 0, 632.2330859693288, 0"
            dur="1.2s"
            begin="0s"
            calcMode="spline"
            keyTimes="0;1"
            keySplines="0.4,1,0.49,0.98"
            repeatCount="indefinite"
          ></animate>
        </polyline>
        <polyline
          fill="transparent"
          stroke="#3f96a5"
          stroke-width="2"
          points="184.2,48 429.79999999999995,48"
        >
          <animate
            attributeName="stroke-dasharray"
            attributeType="XML"
            from="0, 122.79999999999998, 0, 122.79999999999998"
            to="0, 0, 245.59999999999997, 0"
            dur="1.2s"
            begin="0s"
            calcMode="spline"
            keyTimes="0;1"
            keySplines=".4,1,.49,.98"
            repeatCount="indefinite"
          ></animate>
        </polyline>
      </svg>
    </div>
    <div class="dv-decoration-8 header-right-decoration">
      <svg width="384" height="60">
        <polyline
          stroke="#3f96a5"
          stroke-width="2"
          fill="transparent"
          points="384, 0 354, 30"
        ></polyline>
        <polyline
          stroke="#3f96a5"
          stroke-width="2"
          fill="transparent"
          points="364, 0 334, 30 0, 30"
        ></polyline>
        <polyline
          stroke="#3f96a5"
          fill="transparent"
          stroke-width="3"
          points="384, 57, 184, 57"
        ></polyline>
      </svg>
    </div>
    <div class="top-header-title">Vue-Grid-Layout</div>
    <!-- 添加功能菜单 -->
    <div class="top-header-menu">
      <img src="@/assets/hf.svg" alt="" @click="menuClick(1)" />
      <img src="@/assets/menu.svg" alt="" @click="menuClick(2)" />
    </div>

    <!-- 预设 -->
    <el-drawer title="选择默认布局" :visible.sync="drawerPreview">
      <div
        class="preview"
        @click="choosePreview(index - 1)"
        v-for="index in defaultPreviewData.length"
        :key="index"
      >
        <div class="default" title="选择该模板">
          <img :src="img[index - 1]" alt="" />
          <div class="info">
            <div><span>布局名称：</span>默认布局{{ index }}</div>
            <div><span>创建时间：</span>2023-2-23</div>
            <div><span>创建人：</span>~朴：shu</div>
          </div>
        </div>
      </div>
    </el-drawer>

    <!-- 卡片超市 -->
    <el-drawer title="卡片超市" :visible.sync="drawerCard">
      <div class="cardList">
        <div
          class="cardList-item"
          v-for="(item, index) in getCardConfigList"
          :key="index"
          @drag="($event) => dragHandle($event, item)"
          @dragend="($event) => dragendpHandle($event, item)"
        >
          <img :src="card3" alt="" />
          <div class="cardList-item-info">
            <div><span>卡片名称：</span>{{ item.kpzsmc }}</div>
            <div><span>创建时间：</span>2023-2-23</div>
            <div><span>创建人：</span>~朴：shu</div>
          </div>
        </div>
      </div>
      <div class="close">
        <el-button size="mini" @click="clickHandle('close')">关闭</el-button>
        <el-button size="mini" type="danger" @click="clickHandle('reset')">
          取消
        </el-button>
        <el-button size="mini" type="primary" @click="clickHandle('save')">
          保存
        </el-button>
      </div>
    </el-drawer>
  </div>
</template>

<script>
const img1 = require("@/assets/default1.png");
const img2 = require("@/assets/default2.png");
const img3 = require("@/assets/default3.png");
const img4 = require("@/assets/default4.png");
const card3 = require("@/assets/card3.png");
import { defaultPreviewData } from "../Layout/defaultPreview";
// 获取默认卡片配置
import { getCardConfigList } from "@/util";
export default {
  data() {
    return {
      // 预设抽屉
      drawerPreview: false,
      //  卡片超市
      drawerCard: false,
      // 默认预设布局数据
      defaultPreviewData,
      // 获取卡片配置
      getCardConfigList: getCardConfigList(),
      // 预设图片
      img: [img1, img2, img3, img4],
      // 卡片缩略图
      card3,
    };
  },

  methods: {
    menuClick(type) {
      type === 1
        ? (this.drawerPreview = true)
        : ((this.drawerCard = true), this.$store.commit("setOpenCard", true));
    },

    choosePreview(index) {
      // 赋值给vuex
      this.$store.commit("setDefaultPreviewIndex", index);
      this.$message.success(`已选择默认布局${index + 1}`);
      this.drawerPreview = false;
    },

    clickHandle(command) {
      this.drawerCard = false;
      this.$store.commit("setOpenCard", false);
      switch (command) {
        case "close":
          break;
        case "reset":
          break;
        case "save":
          this.$message.success("保存成功");
          break;
        default:
          break;
      }
    },

    clickHandleE(e) {
      console.log(e);
    },

    // 拖动开始
    dragHandle(e, item) {
      // 如果初始位置为0 不执行
      if (!e.x && !e.y) return;

      this.drawerCard = false;

      const Tx = e.clientX - 58;
      const Ty = e.clientY - 60;
      const atPiont = this.$store.state.atPiont;

      // 如果保持不动*（位置不变）
      if (Tx == atPiont[0] && Ty == atPiont[1]) return;
      this.$store.commit("setAtPiont", [Tx, Ty]);

      // drag 事件一直在执行，只有初始化的时候，不同的 kpid 才执行该语句
      if (
        !this.$store.state.dragItem ||
        this.$store.state.dragItem.kpid != item.kpid
      )
        this.$store.commit("setDragItem", item);
    },

    // 拖动结束
    dragendpHandle(e, item) {
      const Tx = e.clientX - 58;
      const Ty = e.clientY - 60;
      // 清空实时位置
      this.$store.commit("setAtPiont", [null, null]);
      this.$store.commit("setEndPiont", [Tx, Ty]);
    },
  },
};
</script>

<style lang="less" scoped>
.top-header {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  color: #fff;

  svg {
    height: 50px;
  }
  &-title {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    font-weight: 700;
  }
  &-menu {
    position: absolute;
    right: 50px;
    top: 2px;
    img {
      height: 20px;
      cursor: pointer;
      margin-right: 20px;
    }
  }
}
/deep/.el-drawer {
  background-color: #051134;
  border-left: 2px solid rgba(1, 153, 209, 0.5);
  padding-left: 20px;
}
/deep/.el-drawer__header {
  font-size: 20px;
  font-weight: 700;
  padding-left: 0;
  color: #3f96a5;
}

.preview {
  border: solid 1px rgba(1, 153, 209, 0.5);
  margin: 10px;
  height: 150px;
  cursor: pointer;
  .default {
    height: 100%;
    display: flex;

    img {
      width: 200px;
      height: 100%;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 10px;
      font-size: 16px !important;
      span {
        font-weight: 900;
        color: #4d99fb;
      }
    }
  }
}

.cardList {
  height: 590px;
  width: 100%;
  padding-right: 5px;
  overflow-x: hidden;
  &-item {
    border: solid 1px rgba(1, 153, 209, 0.5);
    margin: 10px;
    margin-left: 0;
    height: 150px;
    display: flex;
    width: 100%;
    img {
      width: 200px;
      height: 100%;
      cursor: move;
    }

    &-info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 10px;
      font-size: 16px !important;
      span {
        font-weight: 900;
        color: #4d99fb;
      }
    }
  }
}

.close {
  display: flex;
  /* margin-top: 5px; */
  height: calc(100% - 590px);
  align-items: center;
  justify-content: flex-start;
}
</style>
