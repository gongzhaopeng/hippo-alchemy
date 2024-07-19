// pages/home/home.js
Page({

  /**
   * Page initial data
   */
  data: {
    windowInfo: {},
    urls: {
      homeSite: 'gongzhaopeng.github.io/resume',
      blog: 'championgump.wordpress.com',
      digitalMan: 'gongzhaopeng.github.io/fake-chat',
      tts: 'gongzhaopeng.github.io/fake-chat/#/tts/custom-voice'
    },
    alchemistTags: [
      '数字化解决方案', '机器学习', '跑者', '软件研发',
      '基础教育测评', '踢球者', '人工智能', '在线教育'
    ],
    alchemistTagColors: [
      'salmon', 'cadetblue', 'forestgreen'
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    const appInstance = getApp()
    this.setData({
      windowInfo: appInstance.globalData.windowInfo
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  },

  tapHomeSite() {
    this._tapLink('个人主页', this.data.urls.homeSite)
  },

  tapBlog() {
    this._tapLink('个人博客', this.data.urls.blog)
  },

  tapDigitalMan() {
    this._tapLink('专家数字人', this.data.urls.digitalMan)
  },

  tapTts() {
    this._tapLink('个性化人声播报', this.data.urls.tts)
  },

  _tapLink(name, url) {
    wx.setClipboardData({
      data: `https://${url}`,
      success() {
        wx.showToast({
          title: `'${name}'链接已复制, 浏览器地址栏里粘贴打开`,
          icon: 'none',
          duration: 4000
        })
      }
    })
  }
})