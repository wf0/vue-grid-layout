// 我们将Card 文件夹下的所有卡片都注册为全局组件，配合 componentIS实现动态加载
const component = require.context("./", true, /\.vue$/);

// 将得到的上下文作用域转为数组方便遍历
const requireAll = (context) => context.keys().map(context);

// es6 模块抛出写法
export default {
  // app.use()默认调用install处理实例
  install(Vue) {
    requireAll(component).forEach((item) => {
      // 注意：组件抛出方式为 export default
      const { name } = item.default;
      if (!name) return;
      // vue的全局注册API
      Vue.component(`${name}`, item.default);
    });
  },
};
