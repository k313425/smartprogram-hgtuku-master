//app.js
//引入wxValidate.js文件
import WxValidate from "./util/WxValidate";
App({
  onLaunch: function () {
    if (!swan.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      swan.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true
      });
    }
    this.globalData = {};
  },
  //创建实例对象
  WxValidate: (rules, messages) => new WxValidate(rules, messages)
});