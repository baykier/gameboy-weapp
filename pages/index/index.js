//index.js
//获取应用实例
const app = getApp()
const io = require('../../utils/js/weapp.socket.io.js')
app.globalData.socket = io('http://127.0.0.1:3000');

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
        res.openid = app.globalData.openid;
        app.globalData.socket.emit('user join',res,(msg) => {
          if (msg == 'success'){
            wx.redirectTo({
              url: "../home/home"
            })
          }else{
            wx.showToast({
              title: '二维码已过期',
              icon: 'loading',
              duration: 3000,
              mask: false
            })
          }
        })
       
      }
    })
  }
})
