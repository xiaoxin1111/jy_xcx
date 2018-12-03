import { Request } from "../../model/request.js";
var WxParse = require('../wxParse/wxParse.js');
let Api = new Request();
Page({
  data: {
    name:"",
    notice: [
      "第一条公告",
      "第二条公告",
      "第三条公告"
    ],
    news: [
      "第一条新闻",
      "第二条新闻",
      "第三条新闻"
    ],
    activity:[
      "第一条优惠",
      "第二条优惠",
      "第三条优惠"
    ],
    system:[
      "第一条政策制度",
      "第二条政策制度",
      "第三条政策制度"
    ],
    images:[
      {
        imgSrc: "/static/images/images.png",
        text: "工作喜报"
      },
      {
        imgSrc: "/static/images/images.png",
        text: "搜索学生"
      },
      {
        imgSrc: "/static/images/images.png",
        text: "举报投诉"
      },
      {
        imgSrc: "/static/images/images.png",
        text: "组织结构"
      },
      {
        imgSrc: "/static/images/images.png",
        text: "学生报名"
      },
      {
        imgSrc: "/static/images/images.png",
        text: "icon"
      },
      {
        imgSrc: "/static/images/images.png",
        text: "icon"
      }, {
        imgSrc: "/static/images/images.png",
        text: "icon"
      },
      {
        imgSrc: "/static/images/images.png",
        text: "icon"
      },
      {
        imgSrc: "/static/images/images.png",
        text: "icon"
      },
      {
        imgSrc: "/static/images/images.png",
        text: "icon"
      },
      {
        imgSrc: "/static/images/images.png",
        text: "icon"
      },
      {
        imgSrc: "/static/images/images.png",
        text: "icon"
      },
      {
        imgSrc: "/static/images/images.png",
        text: "icon"
      },
      {
        imgSrc: "/static/images/images.png",
        text: "icon"
      },
    ],
    listData_inform:[],
    listData_news:[],
    listData_activity:[],
    listData_system:[]
  },
  fun(ev) {
    let index = ev.currentTarget.dataset.index;
    if (index == 0) { //工作喜报
      wx.navigateTo({
        url: '/pages/show/index',
      })
    } else if (index == 1) {  //搜索学生
      wx.navigateTo({
        url: '/pages/msg/index',
      })
    } else if (index == 2) {  //举报投诉
      wx.navigateTo({
        url: '/pages/list/index?type=4',
      })
    } else if (index == 3){   //组织结构
      wx.navigateTo({
        url: '/pages/organ/index',
      })
    }else if(index == 4){ //学生报名
      wx.navigateTo({
        url: '/pages/sign_up/user',
      })
    }
  },
  onLoad(){
    Api.inform(0).then(res => {
      let listData_inform = [];
      let list = res.data.list.list.data;
      for(let i = 0;i<3;i++){
        listData_inform.push(list[i]);
      }
      this.setData({
        listData_inform
      })
    })
    Api.news(0).then(res => {
      let listData_news = [];
      let list = res.data.list.data;
      for (let i = 0; i < 3; i++) {
        listData_news.push(list[i]);
      }
      this.setData({
        listData_news
      })
    });
    Api.activity(0).then(res => {
      let listData_activity = [];
      let list = res.data.list.list.data;
      for (let i = 0; i < 3; i++) {
        listData_activity.push(list[i]);
      }
      this.setData({
        listData_activity
      })
    })
    Api.system(0).then(res => {
      let listData_system = [];
      let list = res.data.list.data;
      console.log(list);
      for (let i = 0; i < 3; i++) {
        listData_system.push(list[i]);
      }
      this.setData({
        listData_system
      })
    })
    //读取个人信息
    let _this = this;
    wx.getStorage({
      key: 'user',
      success(res){
        let data = JSON.parse(res.data);
        console.log(data);
        _this.setData({
          name: data.name
        })
      }
    })
  }
})  