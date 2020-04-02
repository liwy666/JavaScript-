/*关于对象的解构赋值*/
let obj = {name: 'kobe', age: 19, six: "男"};
//用哪个取哪个
let {name, age} = obj;
let {six} = obj;
console.log(name, age);//{name: "kobe", age: 18}
/*关于数组的解构赋值*/
let arr = [1, 2, 3, 4, 5];
let [a, b, c] = arr;
let [, d] = arr;
console.log(a, b, c);//1 2 3
console.log(d);//2

/*使用*/
let obj2 = {username: 'kobe', age: 19, six: "男"};

function f({username, age}) {
    console.log(username, age);
}
f("kkl", 19);//undefined undefined
f(obj2);//kobe 19
