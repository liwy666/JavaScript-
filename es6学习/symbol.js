/**typeof 返回类型有七种：string number,boolean,undefined,object,function，symbol*/
let symbol = Symbol('one');
let symbol2 = Symbol();
let symbol3 = Symbol();
console.log(symbol);//Symbol(one)
console.log(symbol2);//Symbol()
console.log(symbol2 === symbol3);//false
console.log(symbol2 == symbol3);//false
console.log(typeof symbol2);//symbol

/**iterator
 * 迭代器
 * */