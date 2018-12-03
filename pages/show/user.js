// pages/show/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[
      {
        user:"测试用户1",
        imgSrc:"/static/images/images.png",
        content:"用户信息",
        timer: "2018年11月30日 09:13:15" 
        
      },
      {
        user:"测试用户2",
        imgSrc:"/static/images/images.png",
        content: "用户信息",
        timer: "2018年11月30日 09:13:15"
      },
      {
        user:"测试用户3",
        imgSrc:"/static/images/images.png",
        content: "用户信息",
        timer: "2018年11月30日 09:13:15"        
      },
      {
        user: "测试用户4",
        imgSrc: "/static/images/images.png",
        content: "用户信息",
        timer: "2018年11月30日 09:13:15"        
      },
      {
        user: "测试用户5",
        imgSrc: "/static/images/images.png",
        content: "用户信息",
        timer: "2018年11月30日 09:13:15"        
      },
      {
        user: "测试用户6",
        imgSrc: "/static/images/images.png",
        content: "用户信息",
        timer: "2018年11月30日 09:13:15"        
      },
      {
        user: "测试用户7",
        imgSrc: "/static/images/images.png",
        content: "用户信息",
        timer:"2018年11月30日 09:13:15"
      },
    ]
  },
  jump_msg(ev){
    let id = ev.currentTarget.dataset.index;
    let data = this.data.dataList[id];
    wx:wx.navigateTo({
      url: '/pages/show/index?user=' + data.user,
    })
    console.log(data);
  }
})