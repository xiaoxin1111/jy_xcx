import { Request } from "../../model/request.js";
var WxParse = require('../wxParse/wxParse.js');
let Api = new Request();
Page({
  data: {
    type:0,
    arr:["区域经理","县办","招办","招生人员"],
    text:""
  },
  onLoad: function (options) {
    let type = this.options.type == undefined ? 0:options.type;
    if(type == 0){  //区域经理
      Api.getOrgan().then(res=>{
        console.log(res);
      })
    }else if(type == 1){  //县办

    }else if(type == 2){  //招办

    }else if(type == 3){  //招生人员

    }
    this.setData({
      type,
      text:this.data.arr[type]
    })
  },
  fun(){  //选择人物点击事件
    let type = this.data.type;
    if(type >= 3)return false;
    wx.navigateTo({
      url: '/pages/organ/index?type=' + (++type),
    })
  }
})