/*
* 1.闭包(closure)指有权访问另一个函数作用域中变量的函数
* 2.一个作用域可以访问另一个函数的局部变量
* 3.我们fn外面的作用域可以fn内部的局部变量
* 4.闭包的主要作用：延伸变量的作用范围
* */
function fn() {
    var num = 10;
    return function () {
        console.log(num);
    }
}

var f = fn();
f();
/*事例*/
/*
<div class="nav">
    <ul>
    <li>1</li>
    <li>12</li>
    <li>123</li>
    <li>1234</li>
    <li>12345</li>
    </ul>
</div>
*/
//点击li显示当前索引
var lis = document.querySelector('ul').querySelectorAll('li');
for (var i = 0; i < lis.length; i++) {
    (function (i) {
        lis[i].onclick = function () {
            console.log(i);
        }
    })(i);
}
//点击li3秒后显示当前索引
for (var i = 0; i < lis.length; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(lis[i].innerHTML);
        }, 3000)
    })(i);
}
