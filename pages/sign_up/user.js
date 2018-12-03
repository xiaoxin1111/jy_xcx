// pages/sign_up/user.js
import { Request } from "../../model/request.js";
var WxParse = require('../wxParse/wxParse.js');
let Api = new Request();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:[],
    page:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    Api.getApply().then(res => {
      this.setData({
        data: res.data.list.data
      })
    })
  },
  click(ev){  //查看
    let index = ev.currentTarget.dataset.index;
    let data = this.data.data[index];
    console.log(data);
    wx.navigateTo({
      url: '/pages/sign_up/index?username=' + data.username + "&sex=" + data.sex + "&tel=" + data.tel + "&card=" + data.card + "&time=" + data.date + "&teacher=" + data.zsls + "&edu=" + data.education,
    });
  },
  add(){
    wx.navigateTo({
      url: '/pages/apply/index',
    })
  },
  onPullDownRefresh(){  //刷新
    Api.getApply().then(res => {
      this.setData({
        data: res.data.list.data,
        page:1
      });
      wx.showToast({
        title: "刷新成功",
        icon: 'success',
        duration: 2000
      })
    })
  },
  onReachBottom(){  //加载
    Api.getApply(this.data.page++).then(res => {
      let data = this.data.data;
      data = data.concat(res.data.list.data);
      this.setData({
        data: data,
      });
      wx.showToast({
        title: "刷新成功",
        icon: 'success',
        duration: 2000
      })
    })
  }
})