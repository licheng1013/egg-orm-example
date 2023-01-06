// app/controller/home.js
const result = require("../model/result");
const Controller = require('egg').Controller;

class TestController extends Controller {
    async index() {
        this.ctx.service.test.index()
        //this.ctx.body = result.okData("HelloWorld");
    }
}

module.exports = TestController;
