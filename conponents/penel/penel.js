// conponents/penel/penel.js
let bus = require('../../utils/bus.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  ready(){
    this.loamore();
  },
  /**
   * 组件的初始数据
   */
  data: {
    songList:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loamore(t) {
      var that = this;
      wx.request({
        url: 'http://tingapi.ting.baidu.com/v1/restserver/ting', // 仅为示例，并非真实的接口地址
        data: {
          method: 'baidu.ting.billboard.billList',
          type: 1,
          size: 10,
          offset: 0
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          wx.stopPullDownRefresh();
          console.log(res.data)
        }
      })
    }
  }
})
