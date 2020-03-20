//app.js
//引入wxValidate.js文件
import WxValidate from "./util/WxValidate";
App({
  onLaunch: function () {
    this.globalData = {};
  },
  //创建实例对象
  WxValidate: (rules, messages) => new WxValidate(rules, messages)
});
