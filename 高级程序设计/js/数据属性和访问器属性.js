/*面向对象程序设计*/
/**
 * s5在定义只有内部才用的特性（ attribute）时，描述了属性（ property）的各种特征。
 ECMA-262 定义这些特性是为了实现 JavaScript 引擎用的，因此在 JavaScript 中不能直接访问它们。为了
 表示特性是内部值，该规范把它们放在了两对儿方括号中，例如[[Enumerable]]。
 */

/*
* 由于在 ECMAScript 6 语言规范前，该属性从来没有被包括在 EcmaScript 语言规范中，
* 所以不建议使用。为了确保 Web 浏览器的兼容性，__proto__ 属性已在 ECMAScript 6 语言规范中标准化，
* 建议使用  Object.getPrototypeOf 和 Object.setPrototypeOf 来进行设置或读取
*/
/*ECMAScript 中有两种属性：数据属性和访问器属性*/
/*有value 的是数据属性，没有的是访问器属性。*/
/*在 不 支 持 Object.defineProperty() 方 法 的 浏 览 器 中 不 能 修 改 [[Configurable]] 、[[Enumerable]]。*/

/*1.数据属性(数据属性包含一个数据值的位置。在这个位置可以读取和写入值。数据属性有 4 个描述其行为的特性)
* [[Configurable]]：能否delete 删除、能否修改属性的特性、默认true
* [[Enumerable]]：能否通过 for-in 循环返回属性、默认true
*[[Writable]]:能否修改属性值，默认true
* [[Value]]：包含这个属性的数据值,默认undefined
* */
//修改属性的默认特性，esma5
//可以多次调用 Object.defineProperty()方法修改同一个属性， 但在把 configurable ,特性设置为 false 之后就会有限制
//调用Object.defineProperty()时，configurable、enumerable、writable 默认值是 false。
var person = {};
Object.defineProperty(person, "name", {
    writable: false,
    value: "Nicholas"
});


/*2.访问属性（访问器属性不包含数据值；它们包含一对儿 getter 和 setter 函数（不过，这两个函数都不是必需的））
* [[Get]]：在读取属性时调用的函数。默认值为 undefined。
* [[Set]]：在写入属性时调用的函数。默认值为 undefined。
* */
//访问器属性不能直接定义，必须使用 Object.defineProperty()来定义
var book = {
    _year: 2004,
};
Object.defineProperty(book, "year", {
    get: function () {
        return this._year;
    },
    set: function (newValue) {
        this._year = newValue;
    }
});
//在es5之前要实现，需要使用：
var book2 = {
    _year: 2004,
};
book2.__defineGetter__("year", function () {
    return this._year;
});
book2.__defineSetter__("year", function (newValue) {
    this._year = newValue;
});

//定义多个属性（ECMAScript 5 又定义了一个 Object.defineProperties()方法。利用这个方法可以通过描述符一次定义多个属性）*/
var book3 = {};
Object.defineProperties(book3, {
    _year: {
        value: 2004
    },
    edition: {
        value: 1
    },
    year: {
        get: function () {
            return this._year;
        },
        set: function (newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});

//方法返回指定对象上一个自有属性对应的属性描述符。
var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
console.log(descriptor);
//   {configurable: true
//   enumerable: true
//   value: 2004
//   writable: true}
