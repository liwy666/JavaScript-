/*用来取代argument*/

/*收集实参的数组，是一个真数组（argument是伪数组）*/
function f(name, ...value) {
    value.forEach((item, index) => {

    });
    console.log(value);
}

f("kobe", 18, "男");//[18, "男"]
/*实例*/
let arr = [2, 3, 4];
console.log(...arr);//2 3 4
console.log([1, ...arr, 5]);//[1, 2, 3, 4, 5]
let arr = [2, 3, 4];
arr.forEach(function (value, index, array) {
    console.log(this);
});
arr.forEach(()=>{
    console.log(this);
});