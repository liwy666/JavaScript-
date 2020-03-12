function Person() {
}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
    console.log(this.name);
};
/*Person.prototype = {
    //constructor : Person,//一定要写，原因：否则constructor 属性不再指向 Person 了
    name : "Nicholas",
    age : 29,
    job: "Software Engineer",
    sayName : function () {
        alert(this.name);
    }
};*/
person1 = new Person();
person2 = new Person();
person2.constructor.prototype.sayAge = function () {
    console.log(this.age);
};
console.log(person2.constructor.prototype);//29

