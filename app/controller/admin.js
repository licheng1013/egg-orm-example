// app/controller/home.js
const result = require("../model/result");
const Controller = require('egg').Controller;
// 参照 -> https://www.eggjs.org/zh-CN/basics/router 来编写对应类
class AdminController extends Controller {
    // 列表
    async index() {
        this.ctx.body = result.okData(await this.ctx.service.home.index());
    }

    // 查询
    async show() {
        this.ctx.body = result.okData(await this.ctx.service.home.show());
    }
    // 创建
    async create() {
        await this.ctx.service.home.create()
        this.ctx.body = result.okData("插入成功!");
    }
    // 删除
    async destroy() {
        await this.ctx.service.home.destroy()
        this.ctx.body = result.okData("删除成功!");
    }
    // 修改
    async update() {
        await this.ctx.service.home.update()
        this.ctx.body = result.okMsg("修改成功!");
    }
}

module.exports = AdminController;
