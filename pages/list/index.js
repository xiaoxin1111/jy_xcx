// pages/details/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:[
      "集团通知","集团新闻","优惠活动","政策制度"
    ],
    title:"",
    list:[
      "第一条信息",
      "第二条信息",
      "第三条信息",
      "第四条信息",
      "第五条信息",
      "第六条信息",
      "第七条信息",
      "第八条信息",
      "第九条信息",
      "第十条信息",
      "第一条信息",
      "第二条信息",
      "第三条信息",
      "第四条信息",
      "第五条信息",
      "第六条信息",
      "第七条信息",
      "第八条信息",
      "第九条信息",
      "第十条信息"
    ],
    data: [
      "第一条信息",
      "第二条信息",
      "第三条信息",
      "第四条信息",
      "第五条信息",
      "第六条信息",
      "第七条信息",
      "第八条信息",
      "第九条信息",
      "第十条信息",
      "第一条信息",
      "第二条信息",
      "第三条信息",
      "第四条信息",
      "第五条信息",
      "第六条信息",
      "第七条信息",
      "第八条信息",
      "第九条信息",
      "第十条信息",
      "第一条信息",
      "第二条信息",
      "第三条信息",
      "第四条信息",
      "第五条信息",
      "第六条信息",
      "第七条信息",
      "第八条信息",
      "第九条信息",
      "第十条信息",
      "第一条信息",
      "第二条信息",
      "第三条信息",
      "第四条信息",
      "第五条信息",
      "第六条信息",
      "第七条信息",
      "第八条信息",
      "第九条信息",
      "第十条信息"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title : this.data.text[options.type]
    })
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
  onPullDownRefresh: function () {  //下拉刷新
    this.setData({
      list: this.data.data
    })
    wx.showToast({
      title: '刷新成功',
      icon: 'success',
      duration: 2000
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {  //上拉加载更多数据
    let data = this.data.data;
    let list = this.data.list;
    list = list.concat(data);
    this.setData({
      list
    })
    wx.showToast({
      title: '加载成功',
      icon: 'success',
      duration: 2000
    })
  },
  det(ev){
    let id = ev.target.dataset.index;
    wx.navigateTo({
      url: '/pages/details/index?id=' + id,
    })
  }
})