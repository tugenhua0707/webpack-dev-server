# ES6学习笔记
## 1. ES6类继承
### 一：创建类：
### 比如我们可以像java一样，如下创建一个类；
<pre>
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
</pre>
### 上面的代码会编译成如下代码：
<pre>
function funA(name) {
  this.name = name;
    this.init = function() {
        console.log(this.name + ' hello world');
    }
}
var test = new funA("kongzhi");
test.init();  // kongzhi hello world
</pre>

### 我们也可以实现类的继承；而不需要像ES5中的原型继承那样的写法，我们可以使用extends关键字即可，像java一样；
### 下面是函数B继承函数；代码如下：
<pre>
// 函数B 继承 上面的函数A
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
</pre>

## 2. ES6模块
### 在ES6标准中，javascript原生支持module了。将不同功能的代码分别写在不同文件中，各模块只需 导出(export) 公共接口部分，然后在需要使用的地方通过模块的 导入(import) 就可以了。
### 2-1. 导出一组对象
### 比如a.js模块代码如下：
<pre>
class funA {
  constructor(name) {
    this.name = name;
  }
  init() {
    console.log(this.name + " hello world");
  }
}

function run() {
  console.log("导出一个函数");
}

function cModule(){
  console.log("该模块为私有的，不需要导出");
}
export {funA,run};
</pre>
### 在上面的代码中定义类funA, 函数run，及函数cModule, 然后通过export导出 {funA,run},cModule函数没有导出，当做私有函数来处理；
### 那现在我们可以在index.js引入a.js的模块代码如下：
<pre>
  import {funA, run} from './a.js';
  console.log(run);
  // function run() { console.log("导出一个函数");}
</pre>
### a.js 通过export导出了一组对象 {funA,run},那么在index.js导入一组对象通过
import即可；

### 2-2. 内联导出
### 比如a.js模块代码改为如下：
<pre>
  export class funA {
    constructor(name) {
      this.name = name;
    }
    init() {
      console.log(this.name + " hello world");
    }
  }

  export function run() {
    console.log("导出一个函数");
  }

  function cModule(){
    console.log("该模块为私有的，不需要导出");
  }
</pre>
### index.js代码调用还是和上面一样如下：
<pre>
  import {funA, run} from './a.js';
  console.log(run);
  // function run() { console.log("导出一个函数");}
</pre>
### 2-3. 导入默认对象
### 导出时使用关键字default，可将对象标注为default对象导出。default关键字在每一个模块中只能使用一次。它既可以用于内联导出，也可以用于一组对象导出声明中。比如a.js代码如下：
<pre>  
  class funA {
    constructor(name) {
      this.name = name;
    }
    init() {
      console.log(this.name + " hello world");
    }
  }

  function run() {
    console.log("导出一个函数");
  }

  function cModule(){
    console.log("该模块为私有的，不需要导出");
  }
  export default {funA,run}
</pre>
### index.js代码如下调用：
<pre>
  import obj from './a.js';
  console.log(obj); // {Object}
  console.log(obj.run); // function run() { console.log("导出一个函数");}
  console.log(obj.run()); // 导出一个函数
</pre>

## 3.箭头函数
### ES6中新增箭头操作符 => 来简化了函数的书写，操作符左边为输入参数，右边是进行操作及返回值，
比如如下代码：
<pre>
  let arrs = [2,4,6,8,10,15];
  arrs.forEach((item,index) => console.log(item,index));

  let newArr = arrs.filter((item) => (item > 10));
  console.log(newArr); //[15];
</pre>
### 对于forEach遍历代码，会被解析成如下代码：
<pre>
  arrs.forEach(function(item, i) {
    return console.log(item, i);
  });
</pre>
## 4. 字符串模板
### ES6中允许使用反引号` 来创建字符串，此种方法创建的字符串里面可以包含由美元符号加花括号
包裹的变量${vraible}。比如如下代码：
<pre>
  //产生一个随机数
  let num = Math.random();
  console.log(`your num is ${num}`); // your num is 0.22690744329927992
</pre>

## 5. 理解变量的结构赋值
### 若一个函数要返回多个值，常规的做法是返回一个对象，将每个值做为这个对象的属性返回。在ES6中，利用解构这一特性，可以直接返回一个数组，然后数组中的值会自动被解析到对应接收该值的变量中。
比如如下代码：
<pre>
  function getVal() {
    return [1, 2];
  }
  var [x,y] = getVal(); //函数返回值的解构
  console.log('x:'+x+', y:'+y);   //输出：x:1, y:2
</pre>
### 我们以前编写函数的时候，总是指定函数的默认值使用 || 符号；比如如下代码：
<pre>
  function funA(name){
    var name = name || 'kongzhi'; //传统的指定默认参数的方式
    console.log('Hello '+name);
  }
  //运用ES6的默认参数
  function funA(name='tom'){  //如果没有传这个参数，才会有默认值，
    console.log(`Hello ${name}`);
  }
  funA();//输出：Hello tom
  funA('kongzhi');//输出：Hello kongzhi

  funA();//输出：Hello tom
  funA('kongzhi');//输出：Hello kongzhi
</pre>
### name='tom' 的含义是 如果没有给name传值的话，那么他们默认就是tom值，如果有传值的话，
就是传的值；
## 6. 理解Set数据结构
### ES6提供了新的数据结构Set，类似于数组，但是元素都是唯一的；Set本身是一个构造函数，用来生成
### Set的数据结构的。Set结构的实列有以下属性。
### Set.prototype.constructor：构造函数，默认就是Set函数。
### Set.prototype.size：返回Set实例的成员总数。

### Set实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。
### 6-1 下面是操作方法。
### add(value)：添加某个值，返回Set结构本身。
### delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
### has(value)：返回一个布尔值，表示该值是否为Set的成员。
### clear()：清除所有成员，没有返回值。
### 比如如下代码：
<pre>
  var s = new Set();
  s.add(1).add(2).add(2);
  // 注意2被加入了两次

  console.log(s.size) // 2
  console.log(s.has(1)) // true
  console.log(s.has(2)) // true
  console.log(s.has(3)) // false
  s.delete(2);
  console.log(s.has(2)) // false
</pre>
### Array.from方法可以将Set结构转为数组。如下代码：
<pre>
  var items = new Set([1, 2, 3, 4, 5]);
  var array = Array.from(items);
  console.log(array); // [1, 2, 3, 4, 5]

  // 去除数组重复成员的另一种方法。
  function dedupe(array) {
    return Array.from(new Set(array));
  }
  console.log(dedupe([1, 1, 2, 3])) // [1, 2, 3]
</pre>
### 6-2 遍历操作
### Set结构的实例有四个遍历方法，可以用于遍历成员。
### keys()：返回键名的遍历器
### values()：返回键值的遍历器
### entries()：返回键值对的遍历器
### forEach()：使用回调函数遍历每个成员
### key方法、value方法、entries方法返回的都是遍历器对象。由于Set结构没有键名，只有键值（或者说键名和键值是同一个值），所以key方法和value方法的行为完全一致。比如如下代码：
<pre>
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
</pre>
### Set结构的实例的forEach方法，用于对每个成员执行某种操作，没有返回值。
<pre>
  let set = new Set([1, 2, 3]);
  set.forEach((value, key) => console.log(value * 2) )
  // 2
  // 4
  // 6
</pre>




