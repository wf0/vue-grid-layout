import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  //数据，相当于data
  state: {
    // 默认为 null 的原因是 选择了第一个默认布局，值为 0 ，会存在第一次监听不到数据变化的情况
    defaultPreviewIndex: null,

    // 标记当前卡片超市处于打开状态【用于打开背景提示框】
    openCard: false,

    // drag 标记实时移动的【move的实时坐标】
    atPiont: [],

    // 最终位置 dragend
    endPiont: [],

    // 标记拖拽元素
    dragItem: null,
  },
  getters: {},
  //里面定义方法，操作state方发
  mutations: {
    setDefaultPreviewIndex(state, data) {
      state.defaultPreviewIndex = data;
    },

    setOpenCard(state, data) {
      state.openCard = data;
    },

    setAtPiont(state, data) {
      state.atPiont = data;
    },

    setEndPiont(state, data) {
      state.endPiont = data;
    },

    setDragItem(state, data) {
      state.dragItem = data;
    },
  },
  // 操作异步操作mutation
  actions: {},
  modules: {},
});
