//index.js
//获取应用实例
const app = getApp()
const io = require('../../utils/js/weapp.socket.io.js')

Page({
  data: {    
    canPlay: wx.canIUse('scanCode')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {    
  },
  playGame: (e) => {
    wx.scanCode({
      onlyFromCamera: true,
      scanType:['qrCode'],
      success: (res) => {
        console.log(res);
        var socket = io('http://192.168.11.191:3000');
        res.openid = app.globalData.openid;
        socket.emit('user join',res)
        wx.redirectTo({
          url: "../home/home"
        })
      }
    })
  }
})
