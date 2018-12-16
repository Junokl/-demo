//index.js
//获取应用实例
const app = getApp()
let bus = require("../../utils/bus.js");
Page({
  onReachBottom: function(){
    console.log('到底了');
    bus.$emit('onReachBottom','hi')
  },
  onPullDownRefresh : function(){
    console.log("上拉");
    bus.$emit('onPullDownRefresh','hi')
  }
})
