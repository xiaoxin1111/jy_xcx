import { Request } from "../../model/request.js";
let Api = new Request();
Page({
  data: {
    data:"",
    name:"",
    edu:"",
    phome:"",
    sex:1,
    card:"",
    array: ['小学', '中学', '高中', '大学','其他'],
    index:0,
    indexs:"请选择",  //招生老师
    teacher:[]
  },
  onLoad(){
    Api.recruit().then(res=>{
      let teacher = [];
      for(let i = 0;res.data[i]!=undefined;i++){
        teacher.push(res.data[i].username);
      }
      this.setData({
        teacher
      })
    })
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  },
  bindDateChange: function (e) {  //事件
    this.setData({ 
      date: e.detail.value
    })
  },
  setName(ev){  //姓名
    this.setData({
      name: ev.detail.value
    })
  },
  setCard(ev) {  //身份证
    this.setData({
      card: ev.detail.value
    })
  },
  setPhome(ev){ //手机号
    this.setData({
      phome: ev.detail.value
    })
  },
  send(){ //发送数据
    let { name, phome, card, sex, index, indexs, date} = this.data;
    //判断数据是否未填
    if(name == "" || phome == "" || card == "" || indexs == "请选择"){
      wx.showModal({
        title:"提示",
        content:"数据未填"
      })
      return false;
    }
    //正则手机是否输入有误
    if(!/^\d{11}$/.test(phome)){
      wx.showModal({
        title: '提示',
        content: '手机号输入有误',
      })
      return false;
    }
    index = parseInt(index) + 1;
    let teacher = this.data.teacher[indexs];
    Api.setPre(name, card, phome, sex, date, teacher, index).then(res=>{
      console.log(res);
    });
  },
  bindPickerChange(e){
    this.setData({
      index: e.detail.value
    })
  },
  radioChange(ev){
    this.setData({
      sex: ev.detail.value
    })
  },
  bindTeacherChange(ev){
    this.setData({
      indexs: ev.detail.value
    })
  }
})