/**闭包是指有权访问另一个函数作用域中的变量的函数。*/
/*当函数被调用时：
* 1.创建执行环境和作用域链
* 2.初始化活动对象
* 在作用域链中。外部函数当活动对象处于第二位，外部函数当再外部函数对象处于第三位，以此内推。。。直至全局执行环境
* */

/*
*1.活动对象就是作用域链上正在被执行和引用的变量对象,变量对象包含了活动对象
* 2.
* */
function createComparisonFunction(propertyName) {
    return function (object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    };
}
//返回匿名函数，作用域链包含了createComparisonFunction（）函数的活动对象和全局变量对象。
//当createComparisonFunction函数执行完成后活动对象不会被销毁，因为匿名函数当作用域链仍在引用这个活动对象
var compare = createComparisonFunction("name");
//调用函数
var result = compare({ name: "Nicholas" }, { name: "Greg" });
//解除对匿名函数的引用(以便释放内存)
compare = null;