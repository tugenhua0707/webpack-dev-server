
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

