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
//借用父构造函数继承属性
//1.父构造函数
function Father(uname, age) {
    this.name = uname;
    this.age = age;
}

Father.prototype.say = function () {
    console.log("说");
};

//2.字构造函数
function Son(name, age, score) {
    Father.call(this, name, age);
    this.score = score;
}

//这样赋值，如果子类修改原型对象，父类的原型对象也会跟着修改
//Son.prototype = Father.prototype;
//如果利用对象的形式修改了原型对象，别忘了利用constructor指回原来的构造函数
Son.prototype.constructor = Son;
//这个是子构造函数专门的方法
Son.prototype.exam = function () {
    console.log("考试");
};
var son = new Son("刘德华", 18, 100);
console.log(son);//{name: "刘德华", age: 18}
console.log(Father.prototype);
console.log(Son.prototype.constructor);
