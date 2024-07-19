// app.js
App({
  onLaunch() {
    const windowInfo = wx.getWindowInfo()
    this.globalData.windowInfo = { 
      statusBarHeight: windowInfo.statusBarHeight
    }
  },
  globalData: {
    windowInfo: {}  // px
  }
})
