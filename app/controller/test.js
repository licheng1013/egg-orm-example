// app/controller/home.js
const result = require("../model/result");
const Controller = require('egg').Controller;

class TestController extends Controller {
    async index() {
        throw new Error("出现错误!") //测试异常捕获
        //this.ctx.body = result.okData("HelloWorld");
    }
}

module.exports = TestController;
