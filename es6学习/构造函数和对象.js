/**创建对象的三种方式*/
/*1.new*/
var object = new Object();
/*2.字面量*/
var object2 = {};

/*3.构造函数*/
function Star(name, age) {
    this.name = name;
    this.age = age;
    this.sing = function () {
        console.log("我会唱歌");
    }
}

//缺点 ：因为sing是复杂对象，所以会开辟两个内存空间存放同一对象sing()
var object3 = new Star();
var object4 = new Star();
console.log(object3.sing() === object4.sing());//false

/**构造函数和原型*/
//javascript规定每个构造函数都有一个prototype属于，指向另一对象。prototype就是一个对象，这个对象的所有方法和属性，都会被构造函数所拥有
//我们可以把不变的方法和属性，直接定义在prototype对象上
//原型是什么？一个对象，我们也称prototype为原型对象
//原型对象的作用是什么？共享方法

//重写
function Star(name, age) {
    this.name = name;
    this.age = age;
    /* this.sing = function () {
         console.log("我会唱歌");
     }*/
}

Star.prototype.sing = function () {
    console.log("我会唱歌");
};
console.log(object3.sing() === object4.sing());//true

/**对象原型__proto__*/
//建议使用  Object.getPrototypeOf 和 Object.setPrototypeOf 来进行设置或读取
//对象(实例)都有一个__proto__指向构造函数的prototype原型对象，之所以我们可以可以使用构造函数prototype原型对象的属于和方法，就是因为对象有__proto__原型的存在
console.log(object4);
//对象身上有个__proto__属性，指向构造函数的原型对象
console.log(object4.__proto__ === Star.prototype);//true
//查找sing()方法的规则：因为有__proto__的存在，就去构造函数原型对象prototype身上去查找sing这个方法

/**区分*/
//prototype原型对象
//__proto__对象的原型

/**constructor 构造函数*/
//__proto__对象的原型和构造函数（prototype）原型对象都有一个constructor属于，constructor我们称为构造函数，因为它指回构造函数本身。
//constructor主要用于记录对象引用哪个构造函数,它可以让原型对象重新指向原来的构造函数。

Star.prototype = {
    constructor: Star,//一定要写，原因：否则constructor 属性不再指向 Star 了
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName: function () {
        alert(this.name);
    }
};

/**构造函数、实例、原型对象的关系*/
//Star构造函数 ->（Star.prototype）->Star原型对象prototype
//Star原型对象prototype ->(Star.prototype.constructor)->Star构造函数
//Star构造函数 ->（new Star()）->实例
//实例->(实例.__proto__)->Star原型对象prototype

/**原型链*/
console.log(object4.__proto__);//Star.prototype
console.log(Star.prototype.__proto__);//Object.prototype
console.log(Object.prototype.__proto__);//null

/**this指向问题*/
//1.在构造函数中，里面this指向的对象实例
//2.原型对象函数里面的this指向对象实例