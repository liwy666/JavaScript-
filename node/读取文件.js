//1.使用require加载fs核心模块
var fs = require('fs');
//2.读取文件
fs.readFile('./test.txt', function (error, data) {
        //成功：data:内容,error:null
        //失败：date:undefined,error:错误对象
        console.log(data.toString()); 
    }
);
