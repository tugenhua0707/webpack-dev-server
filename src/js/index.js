
/*
class funA {
  constructor(name) {
    this.name = name;
  }
  init() {
    console.log(this.name + " hello world");
  }
}

var test = new funA("kongzhi");
test.init();  // kongzhi hello world

// 函数B 继承 函数A
class funB extends funA {
  constructor(name,age) {
    super(name);
    this.age = age;
  }
  info() {
    console.log(this.name + " " + this.age + " hello world");
  }
}

var BB = new funB('tugenhua', '28');
BB.init();   //tugenhua hello world
BB.info();   //tugenhua 28 hello world
*/
/*
import obj from './a.js';
console.log(obj); // {Object}
console.log(obj.run); // function run() { console.log("导出一个函数");}
console.log(obj.run()); // 导出一个函数
// function run() { console.log("导出一个函数");}
*/
/*
let arrs = [2,4,6,8,10,15];
arrs.forEach((item,index) => console.log(item,index));

let newArr = arrs.filter((item) => (item > 10));
console.log(newArr); //[15];
*/
/*
//产生一个随机数
let num = Math.random();
console.log(`your num is ${num}`); // your num is 0.22690744329927992
*/
/*
function getVal() {
  return [1, 2];
}
var [x,y] = getVal(); //函数返回值的解构
console.log('x:'+x+', y:'+y);   //输出：x:1, y:2
*/

/*
function funA(name='tom'){  //如果没有传这个参数，才会有默认值，
  console.log(`Hello ${name}`);
}
funA();//输出：Hello tom
funA('kongzhi');//输出：Hello kongzhi

funA();//输出：Hello tom
funA('kongzhi');//输出：Hello kongzhi
*/
/*
var s = new Set();

s.add(1).add(2).add(2);
// 注意2被加入了两次

console.log(s.size) // 2

console.log(s.has(1)) // true
console.log(s.has(2)) // true
console.log(s.has(3)) // false

s.delete(2);
console.log(s.has(2)) // false

var items = new Set([1, 2, 3, 4, 5]);
var array = Array.from(items);
console.log(array); // [1, 2, 3, 4, 5]

// 去除数组重复成员的另一种方法。
function dedupe(array) {
  return Array.from(new Set(array));
}

console.log(dedupe([1, 1, 2, 3])) // [1, 2, 3]
*/
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
