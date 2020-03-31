/**call方法*/
function fun(x, y) {
    console.log(x + y);
    console.log(this);
}

var object = {
    name: "object"
};
//可以调用函数
fun.call();
//可以改变函数的this指向
fun().call(object, 1, 2);