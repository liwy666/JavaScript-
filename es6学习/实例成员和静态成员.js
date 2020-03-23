function Star(name, age) {
    this.name = name;
    this.age = age;
}

//实例成员就是构造函数通过this添加的程序员
//实例成员只能通过实例化的对象来访问
var ldh = new Star('刘德华', 18);
console.log(ldh.name);//'刘德华'
console.log(Star.name);//undefined
//静态成员只能在构造函数身上添加的成员
Star.sex = '男';
//静态成员只能通过构造函数来访问
console.log(ldh.sex);//undefined
console.log(Star.sex);//男