import { Request } from "../../model/request.js";
var WxParse = require('../wxParse/wxParse.js');
let Api = new Request();
Page({
  data:{
    user:"",
    pass:"",
    phome:""
  },
  login(){  //登入
    let {user,pass,phome} = this.data;
    Api.login(user,pass,phome).then(res=>{
      console.log(res);
      res = res.data;
      res.name = user;
      if (res.status == 200){
        wx.setStorage({     
          key:"user",
          data:JSON.stringify(res)
        });
        wx.navigateTo({
          url: '/pages/home/index'
        })
      }else{
        wx.showModal({
          content: res.message,
        })
      }
    });
  },
  userChange(ev){ //用户名
    this.setData({
      user: ev.detail.value
    })
  },
  passChange(ev){ //密码  
    this.setData({
      pass: ev.detail.value
    })
  },
  phomeChange(ev){  //手机号
    this.setData({
      phome: ev.detail.value
    })
  }
  
})