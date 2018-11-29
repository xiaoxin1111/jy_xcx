// components/preview/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:Object,
    type:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    more() {  //点击更多后
      let type = this.properties.type;
      wx.navigateTo({
        url: '/pages/list/index?type=' + type
      })
    }
  }
})
