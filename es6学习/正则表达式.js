/**创建*/
//1.调用RegExp创建
var reg = new RegExp('/123/');
//利用字面表达式创建
var rg = /123/;
reg.test(123);//true;
reg.test('abc');//false
/**修饰符img*/
/*
* i=>ignorecase 忽视单词大小写
* m=>mulitilime 可以进行多行匹配
* g=>global 全局匹配
* */

/**test
 * 如果字符串 string 中含有与 RegExpObject 匹配的文本，则返回 true，否则返回 false。
 * */
var rg = /123/;
reg.test(123);//true;
/**exec
 * 用正则表达式模式在字符串中查找，并返回该查找结果的第一个值（数组），如果匹配失败，返回null。
 * */
var reg = new RegExp("abc");
var str = "3abc4，5abc6";
reg.exec(str);//["abc", index: 1, input: "3abc4，5abc6", groups: undefined]
/**match
 * 用正则表达式模式在字符串中查找，并返回该查找结果的第一个值（数组），如果匹配失败，返回null。
 * */
var s = "The rain in Spain falls mainly in the plain";
var re = /(a)in/ig;
r = s.match(re);  //["ain", "ain", "ain", "ain"]

/**分组匹配
 * */
let reg = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(\d|x)$/;
reg.exec('130828199012040617');
// ["130828199012040617", "130828", "1990", "12", "04", "1", "7", index: 0, input: "130828199012040617", groups: undefined]