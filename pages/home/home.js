// pages/home/home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  tapStart:(e) => {
    console.log('keydown'+e.target.dataset.key)
    wx.vibrateShort({

    })
    app.socket.emit('user control', { type: 'keydown', keyCode: e.target.dataset.key });
  }, 
  tapEnd: (e) => {
    console.log('keyup' + e.target.dataset.key)
    wx.vibrateShort({

    })
    app.socket.emit('user control', { type: 'keyup', keyCode: e.target.dataset.key});
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {  
    //游戏页面刷新，跳转首页
    app.socket.on('init',(data) => {
      wx.showToast({
        title: '页面已刷新',
        icon: 'loading',
        duration: 3000,
        mask: false
      })
      wx.redirectTo({
        url: "../index/index"
      })
    })
    //断开连接时操作
    app.socket.on('disconnect',(reson) => {
      wx.showToast({
        title: '连接已断开',
        icon: 'loading',
        duration: 3000,
        mask: false
      })
      wx.redirectTo({
        url: "../index/index"
      })
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})