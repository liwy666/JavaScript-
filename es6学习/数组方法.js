var arr = [1, 2, 3];
/**forEach*/
arr.forEach(function (value, index, array) {

});
/**filter()*/
/*返回一个新数组，主要用于筛选数组*/
var arr2 = arr.filter(function (vlaue, index, array) {
    return vlaue >= 2;
});
console.log(arr2);//[2,3]
/**some()*/
/*返回一个bool，查找数组中是否有满足条件的元素*/
var flag = arr.some(function (value, index, array) {
    return value => 2;
});
console.log(flag);//true