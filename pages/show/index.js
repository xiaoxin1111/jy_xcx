// pages/show/index.js
import { Request } from "../../model/request.js";
var WxParse = require('../wxParse/wxParse.js');
let Api = new Request();
Page({
  data: {
    dataList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    Api.getGood().then(res=>{
      this.setData({
        dataList:res.data
      })
    })
  },
})