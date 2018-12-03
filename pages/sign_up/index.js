import { Request } from "../../model/request.js";
var WxParse = require('../wxParse/wxParse.js');
let Api = new Request();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    sex:null,
    tel:null,
    card:null,
    time:"",
    teacher:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {sex,tel,card,time,teacher,username} = options;
    console.log(options)
    this.setData({
      sex:sex,
      tel:tel,
      card:card,
      time:time,
      teacher:teacher,
      name:username,
    })
  },
})