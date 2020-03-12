function SuperType(){
    this.property = true;
}
SuperType.prototype.getSuperValue = function () {
    return this.property;
};
function SubType() {
    this.subProperty = false;
}
//继承SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function (){
    return this.subProperty;
};

var instance = new SubType();

console.log(instance.getSubValue());

/*
* call（）：第一个参数是this值没有变化，变化的是其余参数都直接传递给函数。在使用call（
方法时，传递给函数的参数必须逐个列举出来。例：call(obj,a,b,c)
* apply（）：传递给函数的是参数数组。 例：apply(obj,[a,b,c])
* */
Object.create();
