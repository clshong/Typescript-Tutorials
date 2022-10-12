  // 什么是泛形

  // 泛形是指在定义函数，接口或者类的时候，不预先指定具体类型，而在使用的时候在指定类型的一种特性

  // 函数的的泛形写法

  // 函数使用泛形单个写法

  function fn1<T>(arg:T):T{
    return arg
  }
  fn1<number>(23)
  fn1<string>('charls')

  // 函数使用泛形多个写法

  function fn2<T,U>(name:T,age:U){
    return `${name}is${age}`
  }
  fn2<string,number>('charlse',23)
  fn2<string[],boolean>(['charlse'],true)

  // *** 注意：T就是一个标识符，也是可以写成其他代替，但是一般都是T,U,M

  // 接口的泛形写法

  interface Idata {
    length:number;
  }

  function fn3<T extends Idata >(arg:T):number{
    return arg.length;
  }
fn3<string>('charlse')
fn3<number[]>([1,2,3])
fn3<string[]>(['charles','jay'])
fn3<{}[]>([{name:'charlse',age:23},{name:'jay',age:18}])

// 泛形结合class使用

class Person5 <T,U>{
  userName:T;
  userAge:U;
  constructor(name:T,age:U){
    this.userName = name
    this.userAge = age
  }
}

let p5 = new Person5<string,number>('charles',23)