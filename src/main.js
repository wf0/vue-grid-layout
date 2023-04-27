import Vue from "vue";
import App from "./App.vue";
import "./style.css";
Vue.config.productionTip = false;
// 注册卡片组件
import card from "./components/Card";

import elementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import store from "./store";
// 绑定全局变量
Vue.prototype.$store = store;

Vue.use(card).use(elementUI);
new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
