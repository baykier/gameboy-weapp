//index.js
//获取应用实例
const app = getApp()
Page({
  data: {    
    canPlay: wx.canIUse('scanCode'),
    homePage: app.server
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //加载时
  onLoad: function () {    
  },
  //页面显示时
  onShow: function()
  {
    console.log(2);
    //监听扫码结果
    app.socket.on('join result',(msg) => {
      console.log(msg);
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
  },
  //开始游戏
  scanCode: (e) => {
    wx.scanCode({
      onlyFromCamera: true,
      scanType:['qrCode'],
      success: (res) => {
        console.log(res);        
        res.openid = app.globalData.openid;
        app.socket.emit('user join',res)
      }
    })
  }
})
