// interface 使用

interface User {
  name: string;
  boy: boolean;
  age: number;
}

// 简单示例
let user: User = {
  name: 'charles',
  boy: true,
  age: 23,
}

interface Ilist {
  items: {
    id: string;
    name: string;
    intro: string
  }[]
}

interface Idata {
  success: boolean;
  code: number;
  message: string;
  data: Ilist
}


// 复杂示例
let data: Idata = {
  "success": true,
  "code": 20000,
  "message": "成功",
  "data": {
    "items": [
      {
        "id": "1",
        "name": "charles",
        "intro": "毕业于家里蹲大学"
      }
    ]
  }
}

// interface 继承

interface Ires extends Idata {
  children?:[] //继承了Idata 相当追加了一个数组children  ？代表可有可有可无  [] | undefiend
}

let data2: Ires = {
  "success": true,
  "code": 20000,
  "message": "成功",
  "data": {
    "items": [
      {
        "id": "1",
        "name": "charles",
        "intro": "毕业于家里蹲大学"
      }
    ]
  }
}