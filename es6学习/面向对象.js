class Father {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    sum() {
        console.log(this.x + this.y);
    }

    say() {
        return "我是父亲";
    }
}
var that;
class Son extends Father {
    constructor(x, y) {
        super(x, y);//调用父类构造函数,必须在子类之前调用
        that = this;
        this.x = x;
        this.y = y;
        this.btn = document.querySelector('button');
        this.btn.onclick = this.sing();
    }

    say() {
        //调用父类的普通方法
        console.log(super.say());
    }

    dance() {
        //这里的this指向的是调用者本身
        console.log(this);
    }

    sing() {
        //这里的this指向按钮
        console.log(this);
        //指向constructor里面的this
        console.log(that);
    }
}

var son = new Son(1, 2);
son.sum();