// pages/details/index.js

import { Request } from "../../model/request.js";
var WxParse = require('../wxParse/wxParse.js');
let Api = new Request();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:[
      "集团通知","集团新闻","优惠活动","政策制度","投诉举报"
    ],
    title:"",
    list: [

    ],
    page:1,
    total:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title : this.data.text[options.type],
      type:options.type
    })
    if(options.type == 0){  //通知
      Api.inform(0).then(res=>{
        this.loadData(res.data.list.list.data, 1);
      })
    }else if(options.type == 1){  //新闻
      Api.news(0).then(res=>{
        this.loadData(res.data.list.data,1);
      });
    } else if (options.type == 2){   //优惠
      Api.activity(0).then(res=>{
        this.loadData(res.data.list.list.data,1);
      })
    } else if (options.type == 3){   //制度
      Api.system(0).then(res => {
        this.loadData(res.data.list.data,1);
      })
    }else if(options.type == 4){
      Api.complain(0).then(res=>{
        this.loadData(res.data.list.data, 1);
      })
    }
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {  //下拉刷新
    let type = this.data.type;
    if (type == 0) {  //通知
      Api.inform(0).then(res => {
        this.loadData(res.data.list.list.data);
      })
    } else if (type == 1) {  //新闻
      Api.news(0).then(res => {
        this.loadData(res.data.list.data);
      });
    } else if (type == 2) {   //优惠
      Api.activity(0).then(res => {
        this.loadData(res.data.list.list.data);
      })
    } else if (type == 3) {   //制度
      Api.system(0).then(res => {
        this.loadData(res.data.list.data);
      })
    } else if (type == 4) {
      Api.complain(0).then(res=>{
        this.loadData(res.data.list.data);
      })
    }

  },
  loadData(data,index){ //刷新后的数据
    this.setData({
      page: 1,
      list: data
    })
    if(index == 1)return false;
    this.loadSuccess("刷新成功");
  },
  loadSuccess(value){
    wx.showToast({
      title: value,
      icon: 'success',
      duration: 2000
    })
  },
  getTime(time){
    console.log(time);
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {  //上拉加载更多数据
    let type = this.data.type;
    if (type == 0) {  //通知
      Api.inform(this.data.page++).then(res => {
        let data = res.data.list.list.data;
        this.dispose(data);
      })
    } else if (type == 1) {  //新闻
      Api.news(this.data.page++).then(res => {
        let data = res.data.list.data;
        this.dispose(data);
      });
    } else if (type == 2) {   //优惠
      Api.activity(this.data.page++).then(res => {
        let data = res.data.list.list.data;
        this.dispose(data);
      })
    } else if (type == 3) {   //制度
      Api.system(this.data.page++).then(res => {
        let data = res.data.list.data;
        this.dispose(data);
      });
    } else if (type == 4){
      Api.complain(0).then(res => {
        let data = res.data.list.data;
        this.dispose(data);
      })
    }
  },
  dispose(data){  //渲染值
    let list = this.data.list;
    console.log(data);
    if (data.length <= 0){
      this.loadSuccess("没有更多数据");
      return false;
    }
    list = list.concat(data);
    this.setData({
      list
    })
    this.loadSuccess("加载成功");
  },
  det(ev){
    let id = ev.currentTarget.dataset.index;
    id = this.data.list[id].id;
    wx.navigateTo({
      url: '/pages/details/index?id=' + id,
    })
  },
})