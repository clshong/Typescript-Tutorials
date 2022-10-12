// 类 

class Person {

  userName:string;
  userAge:number;

  constructor(name:string,age:number){
    this.userName = name;
    this.userAge = age
  }
  run(a:number,b:number):number{
    return a+b;
  }
}
let p1 = new Person('charles',23).run(1,2)

// 修饰符
//  readonly 只读
//  public 公开的，在任何地方都可以使用
//  protected 受保护的，只能在当前类或者当前类的子类部使用
//  private  私有的，当前类的内部使用


class Persons {

  protected userName:string;
  readonly userAge:number;

  constructor(name:string,age:number){
    this.userName = name;
    this.userAge = age
  }
  run(){
    return this.userName;
  }
}
let p2 = new Persons('charles',23)
p2.run()

// 抽象类 ：abstract

// 不完成具体功能
// 抽象类不能new
// 抽象类可以继承，如果要继承，就必须实现该类的抽象方法

abstract class Person3 {
 abstract run():void;
 abstract change():void;
}

class children extends Person3 {
  run():void {

  };
  change(): void {
    
  };
}
// let p3 = new Person3() 不支持new

// 抽象类使用场景

abstract class Db{
  abstract connection():void;
  abstract auth():void;
}

class mySql extends Db{
  connection(): void {
    
  };
  auth(): void {
    
  }
}

// implements 对于类的约束

interface Ip1 {
  name:string;
  age:number;
}

interface Ip2{
  change():void
}

class Person4 implements Ip1,Ip2 {
  name: string;
  age:number; 
  change(){

  }
}