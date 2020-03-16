/**原型链继承模式*/

/* 1.原型链虽然很强大，可以用它来实现继承，但它也存在一些问题。其中，最主要的问题来自包含引 用类型值的原型。
* 2.原型链的第二个问题是:在创建子类型的实例时，不能向超类型的构造函数中传递参数。
*/
function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function () {

    return this.property;
};

function SubType() {
    this.subProperty = false;
}

//开始继承
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
    return this.subProperty;
};
//要注意 instance.constructor 现在指向的是SuperType，这是因为原来SubType.prototype中的constructor被重写了的缘故
var instance = new SubType();
console.log(instance.getSuperValue());//true


/*借用构造函数*/

/*
* 1.如果仅仅是借用构造函数，那么也将无法避免构造函数模式存在的问题——方法都在构造函数中定义，因此函数复用就无从谈起了。
*/
function SuperType() {
    this.colors = ["red", "blue", "green"];
}

function SubType() {
    //继承了 SuperType
    SuperType.call(this);
}

var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors); //"red,blue,green,black"
var instance2 = new SubType();
alert(instance2.colors); //"red,blue,green"

/**组合继承*/

/*组合继承最大的 问题就是无论什么情况下，都会调用两次超类型构造函数:
一次是在创建子类型原型的时候，另一次是 在子类型构造函数内部。
没错，子类型最终会包含超类型对象的全部实例属性，但我们不得不在调用子 类型构造函数时重写这些属性。*/
function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
};

function SubType(name, age) {
//继承属性
    SuperType.call(this, name);
    this.age = age;//第二次调用SuperType()
}

//继承方法
SubType.prototype = new SuperType();//第一次调用SuperType()
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
    alert(this.age);
};

/**原型式继承*/
function object(o) {
    function F() {
    }

    F.prototype = o;
    return new F();
}

var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
alert(person.friends); //"Shelby,Court,Van,Rob,Barbie"
/*ECMAScript 5 通过新增 Object.create()方法规范化了原型式继承。
* Object.create()与 object()方法的行为相同。
* */
var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
console.log(person.friends);//"Shelby,Court,Van,Rob,Barbie"
/**寄生式继承*/

/*
* 在主要考虑对象而不是自定义类型和构造函数的情况下，寄生式继承也是一种有用的模式。
* 前面示 范继承模式时使用的 object()函数不是必需的;任何能够返回新对象的函数都适用于此模式。
* */
function createAnother(original) {
    var clone = object(original); //通过调用函数创建一个新对象
    clone.sayHi = function () { //以莫种方式来增强这个对象
        console.log("hi");
    };
    return clone;//返回这个对象
}

var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = createAnother(person);
anotherPerson.sayHi(); //"hi"

/**组合寄生*/

/*它只调用了一次 SuperType 构造函数，并且因此避免了在 SubType. prototype 上面创建不必要的、多余的属性。
与此同时，原型链还能保持不变;因此，还能够正常使用 instanceof 和 isPrototypeOf()。
开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。*/
function object(o) {
    function F() {
    };
    F.prototype = o;
    return new F();
}

function inheritPrototype(subType, superType) {
    var prototype = object(superType.prototype);//创建对象
    prototype.constructor = subType;//增强对象
    subType.prototype = prototype;//指定对象
}

function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
};

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function () {
    console.log(this.age);
};