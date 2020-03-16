//经典递归
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

//arguments.callee 是一个指向正在执行的函数的指针，因此可以用它来实现对函数 的递归调用，例如:
//但在严格模式下，不能通过脚本访问 arguments.callee，访问这个属性会导致错误
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}

//使用命名函数表达式来达成相同的结果
 factorial = (function f(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * f(num - 1);
    }
});