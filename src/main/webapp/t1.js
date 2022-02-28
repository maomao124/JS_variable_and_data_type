/**
 * Project name(项目名称)：JS_variable_and_data_type
 * File name(文件名): t1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/2/28
 * Time(创建时间)： 16:13
 * Version(版本): 1.0
 * Description(描述)： 无
 */

let name = "小明";      // 声明一个变量 name 并赋值为“小明”
let age = 11;          // 声明一个变量 age
const PI = 3.1415       // 声明一个常量 PI，并赋值为 3.1415
console.log(PI)         // 在控制台打印 PI

var str = 'We\'ll never give up.';
var num1 = 123;
var num2 = 3.14;
var y = 123e6;
var a = true;   // 定义一个布尔值 true
var b = false;  // 定义一个布尔值 false
var c = 2 > 1;  // 表达式 2 > 1 成立，其结果为“真（true）”，所以 c 的值为布尔类型的 true
var str1 = "123";
var sym1 = Symbol(str1);
var sym2 = Symbol(str1);
console.log(sym1);          // 输出 Symbol(123)
console.log(sym2);          // 输出 Symbol(123)
console.log(sym1 == sym2);

var person =
    {
        name: 'Bob',
        age: 20,
        tags: ['js', 'web', 'mobile'],
        city: 'Beijing',
        hasCar: true,
        zipcode: null
    };
console.log(person.name);       // 输出 Bob
console.log(person.age);        // 输出 20

var arr = [1, 2, 3, 4];
// var arr = new Array(1, 2, 3, 4);
console.log(arr);       // 输出 [1, 2, 3, 4]

var arr2 = [1, 2, 3.14, 'Hello', null, true];
console.log(arr2[0]);  // 输出索引为 0 的元素，即 1
console.log(arr2[5]);  // 输出索引为 5 的元素，即 true
console.log(arr2[6]);  // 索引超出了范围，返回 undefined


function sayHello(name)
{
    return "Hello, " + name;
}

var res = sayHello("Peter");
console.log(res);  // 输出 Hello, Peter