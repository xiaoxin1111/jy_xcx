import {Http} from "./http.js"
let http = new Http();
class Request{
  inform(p) {  //通知
    let data = http.send("http://jy.haoyunyun.cn/api/shows", "get", {
      page: p,
      key: "c56d0e9a7ccec67b4ea131655038d604"
    });
    return data;
  }
  news(p){  //新闻
    let data = http.send("http://jy.haoyunyun.cn/xinwenapi","get",{
      page:p
    });
    return data;
  }
  system(p){  //制度
    let data = http.send("http://jy.haoyunyun.cn/zhengceapi","get",{
      page:p
    })
    return data;
  }
  activity(p){  //活动
    let data = http.send("http://jy.haoyunyun.cn/api/select","get",{
      key:"c56d0e9a7ccec67b4ea131655038d604",
      page:p
    })
    return data;
  }
  search(name){ //搜索
    let data = http.send("http://3w.houbowang.com/json/student.php","get",{
      uu:name
    });
    return data;
  }
  getGood(){  //读取喜报
    let data = http.send("http://3w.houbowang.com/json/studentList.php","get");
    return data;
  }
  setPre(name, card, phome, sex, timer, teacher,edu){  //写入预报名
    let data = http.send("http://jy.haoyunyun.cn/studentadd","get",{
      username:name,
      education:edu,
      card:card,
      tel:phome,
      sex:sex,
      date:timer,
      zsls:teacher
    })
    return data;  
  }
  recruit(){  //获取招生老师
    let data = http.send("http://jy.haoyunyun.cn/api/zsls","get");
    return data;
  }
  complain(){ //投诉
    let data = http.send("http://jy.haoyunyun.cn/wenzhangapi","get");
    return data;
  }
  //http://jy.haoyunyun.cn/api/qyjl
  login(user,pass,phome){  //登入
    let data = http.send("http://jy.haoyunyun.cn/api/login","post",{
      username:user,
      password:pass,
      tel:phome
    });
    return data;
  }
  getApply(p){ //获取就业学生
    let data = http.send("http://jy.haoyunyun.cn/studentapi","get",{page:p});
    return data;
  }
  getOrgan(id){ //获取组织结构
    let data = http.send("http://jy.haoyunyun.cn/api/qyjl","get",{
      id:1
    });
    return data;
  }
}
export{Request}