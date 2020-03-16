//1.使用require加载fs核心模块
var fs = require('fs');
//2.写入并覆盖文件
fs.writeFile('./test.txt', "写入测试", function (error) {
        console.log(error);
    }
);