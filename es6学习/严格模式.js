/*开启*/
"use strict";
/*为某个函数开启严格模式*/
function f() {
    'use strict';
}
/*1.变量必须先申明再删除*/
/*2.不能删除已经定义的变量*/
/*3.全局作用域中的函数this是undefined*/
function f1() {
    console.log(this);//undefinedv
}
/*4.setTimeout中的this还是指向window*/
/*5.参数名称不能同名*/
/*6.不允许在非函数模块申明函数*/