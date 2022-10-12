// arr 类型

// arr to String
// arr数组内全部是字符串类型

let arrS= ['charlse','jay','leo']

let arrstr:string[] = ['charlse','jay','leo'] //***

let arrstr2:Array<string> = ['charlse','jay','leo'] //***泛形

// arr to Number
// arr数组内全部是数字类型

let arrN = [18,20,23]

let arrNum:number[] = [18,20,23]

let arrNum2:Array<number> = [18,20,23]

// arr to boolean
// arr数组内全部是布尔类型

let arrB = [true,false]

let arrBol:boolean[] = [true,false]

let arrBol2:Array<boolean> = [true,false]

// arr to Mixed
// arr数组内混合数字、布尔、字符串类型

let arrM = ['charles',23,true]

let arrMix:(string | number | boolean)[] = ['charles',23,true]

let arrMix2:[string,number,boolean]= ['charles',23,true,]  //弊端必须按照格式来,一对一的约束，只能3个元素

let arrMix3:Array<( string | number | boolean)> = ['charles',23,true]

// arr to obj

let arrO = [
  {
    name:'charlse',
    boy:true,
    age:23,
  },
  {
    name:'jay',
    boy:true,
    age:30,
  },
  {
    name:'kim',
    boy:false,
    age:18,
  }
]

interface user {
  name:string;
  boy:boolean;
  age:number
}
// 最佳方法
let arrObj:Array<user>= [
  {
    name:'charlse',
    boy:true,
    age:23,
  },
  {
    name:'jay',
    boy:true,
    age:30,
  },
  {
    name:'kim',
    boy:false,
    age:18,
  }
]

let arrObj2:user[] = [
  {
    name:'charlse',
    boy:true,
    age:23,
  },
  {
    name:'jay',
    boy:true,
    age:30,
  },
  {
    name:'kim',
    boy:false,
    age:18,
  }
]

// 不推荐这么写 
let arrObj3 :{
  name:string;
  boy:boolean;
  age:number
}[] = [
  {
    name:'charlse',
    boy:true,
    age:23,
  },
  {
    name:'jay',
    boy:true,
    age:30,
  },
  {
    name:'kim',
    boy:false,
    age:18,
  }
]

// arr to array

let arrToA = [[1,2,3],[2,3,4]]

let arrToArr:number[][] = [[1,2,3],[2,3,4]]

let arrToArr2:Array<number>[]= [[1,2,3],[2,3,4]]
