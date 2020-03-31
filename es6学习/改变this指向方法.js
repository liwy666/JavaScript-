/**call*/
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
/**apply*/
/*
* 1.也是参数调用
* 2.但是它的参数是数组
* 3.apply的主要应用 比如我们可以利用apply借助于数学内置对象求最大值
* */
var arr = [1, 2, 4, 3];
var max = Math.max.apply(Math, arr);
var min = Math.min.apply(Math, arr);

/**bind*/
/*不会调用原来函数
* 返回新函数
* */
o = {
    name: "andy"
};

function f(a, b) {
    console.log(this);
}

var f2 = f.bind(o, 1, 2);

var btn = document.querySelector('button');
btn.onclick = function () {
    this.disabled = true;
    setTimeout(function () { 
        this.disabled = false;
    }.bind(this), 3000)
};