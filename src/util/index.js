export const getCardConfigList = () => {
  // 获取 Card 文件夹下的所有 config.js 配置项，并配置成数据，同时满足 item i、w、h、x、y 的数据格式
  const config = require.context("../components/Card/", true, /config.js$/);
  // 将得到的上下文作用域转为数组方便遍历
  const requireAll = (context) => context.keys().map(context);

  const list = [];
  requireAll(config).forEach((conf) => {
    const item = conf.option;
    list.push({
      kpzsmc: item.kpzsmc,
      kpid: item.kpid,
      x: item.x,
      y: item.y,
      w: item.kd,
      h: item.gd,
      minW: item.zxkd,
      minH: item.zxgd,
      maxW: item.zdkd,
      maxH: item.zdgd,
      i: item.kpid, // 防止 key 重复
    });
  });
  return list;
};
