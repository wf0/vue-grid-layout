// 引入nodejs 的path模块，path.resolve用来处理绝对路径
const path = require("path");
module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
};
