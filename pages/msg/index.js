import { Request } from "../../model/request.js";
let Api = new Request();
Page({
  data:{
    name:"",
    data:[],
  },
  search_value(ev){
    this.setData({
      name: ev.detail.value
    })
  },
  search(){
    Api.search(this.data.name).then(res=>{
      this.setData({
        data:res.data
      })
    })
  }
})