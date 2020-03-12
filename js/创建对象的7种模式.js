/*创建对象*/

/*1.工厂模式*/

/*虽然解决了创建多个相似对象的问题，但却没有解决对象识别的问题（即怎样知道一个对象的类型）*/
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        alert(this.name);
    };
    return o;
}

var person1 = createPerson("Nicholas", 29, "Software Engineer");
var person2 = createPerson("Greg", 27, "Doctor");

/*2.构造函数模式*/

/*以这种方式创建函数，会导致不同的作用域链和标识符解析，但创建 Function 新实例的机制仍然是相同的。因此，不同实例上的同名函数是不相等的*/
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        alert(this.name);
    };
}

person1 = new Person("Nicholas", 29, "Software Engineer");
person2 = new Person("Greg", 27, "Doctor");
/*这两个对象都有一个 constructor（构造函数）属性，该属性指向 Person，*/
alert(person1.constructor == Person); //true
alert(person2.constructor == Person); //true
/*对象的 constructor 属性最初是用来标识对象类型的。但是，提到检测对象类型，还是 instanceof 操作符要更可靠一些*/
console.log(person1 instanceof Object); //true
console.log(person1 instanceof Person); //true
console.log(person2 instanceof Object); //true
console.log(person2 instanceof Person); //true

/*3.原型模式*/

/*我们创建的每个函数都有一个 prototype（原型）属性，这个属性是一个指针，指向一个对象，而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。*/
function Person() {
}

//复杂添加
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
    alert(this.name);
};
//简便添加创建
Person.prototype = {
    constructor: Person,//一定要写，原因：否则constructor 属性不再指向 Person 了(如果 constructor 的值真的很重要)
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName: function () {
        alert(this.name);
    }
};
Object.defineProperty(Person.prototype, "constructor", {
    enumerable: false,
    value: Person
});//重设 constructor 属性会导致它的[[Enumerable]]特性被设置为 true。默认情况下，原生的 constructor 属性是不可枚举的，因此如果你兼容ES5


person1 = new Person();
person1.sayName(); //"Nicholas"
person2 = new Person();
person2.sayName(); //"Nicholas
console.log(person1.sayName == person2.sayName); //true
/*展示了 Person 构造函数、 Person 的原型属性以及 Person 现有的两个实例之间的关系*/
person2.constructor.prototype.sayAge = function () {
    console.log(this.age);
};
person1.sayAge();//29
/*虽然在所有实现中都无法访问到[[Prototype]]，但可以通过 isPrototypeOf()方法来确定对象之间是否存在这种关系*/8
console.log(Person.prototype.isPrototypeOf(person1)); //true
console.log(Person.prototype.isPrototypeOf(person2)); //true
/*Object.getPrototypeOf()：在所有支持的实现中，这个方法返回[[Prototype]]的值。例如：*/
console.log(Object.getPrototypeOf(person1) == Person.prototype); //true
console.log(Object.getPrototypeOf(person1).name); //"Nicholas
/*使用 hasOwnProperty()方法可以检测一个属性是存在于实例中，还是存在于原型中*/
console.log(person1.hasOwnProperty("name")); //false 来自原型
person1.name = "Greg";
console.log(person1.hasOwnProperty("name")); //true 来自对象
/*而 in 操作符将始终返回true*/
console.log('name' in person1);//true 来自对象
person1.delete('name');
console.log('name' in person1);//true 来自原型
/*要取得对象上所有可枚举的实例属性，可以使用 ECMAScript 5 的 Object.keys()方法 (返回一个数组字符串)*/
var keys = Object.keys(Person.prototype);
console.log(keys); //"name,age,job,sayName"
var p1 = new Person();
p1.name = "Rob";
p1.age = 31;
var p1keys = Object.keys(p1);
console.log(p1keys); //"name,age"
/*如果你想要得到所有实例属性，无论它是否可枚举，都可以使用 Object.getOwnPropertyNames()方法。*/
keys = Object.getOwnPropertyNames(Person.prototype);
alert(keys); //"constructor,name,age,job,sayName"

/*4.动态原型模式(和大多数语言的构造函数差不多了)(所有信息都封装在了构造函数中，而通过在构造函数中初始化原型（仅在必要的情况下），
又保持了同时使用构造函数和原型的优点)*/
function PersonTwo(name, age, job) {
//属性
    this.name = name;
    this.age = age;
    this.job = job;
//方法
    if (typeof this.sayName != "function") {
        PersonTwo.prototype.sayName = function () {
            alert(this.name);
        };
    }
}

var friend = new PersonTwo("Nicholas", 29, "Software Engineer");
friend.sayName();