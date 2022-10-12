// 返回值约束

function BackFn(a:number,b:number) : number {
  return a + b
}
BackFn(1,2)

// 可选参数

function OptionFn(a:number,b?:number) : number {
  if(!!b){
    b = 123
  }
  return a 
}
OptionFn(1,2)

// 函数参数默认值

function DefaultFn(a:number,b:number=1) : number {
  return a + b
}
DefaultFn(1)

// 箭头函数约束

let ArrowFn:(params1:number,params2:string) => string = (a:number,b:string):string => {
  return a + b
}
ArrowFn(1,'2')