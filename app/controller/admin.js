// app/controller/home.js
const result = require("../model/result");
const Controller = require('egg').Controller;
// 参照 -> https://www.eggjs.org/zh-CN/basics/router 来编写对应类方法，
class AdminController extends Controller {
    // 分页-> 注意方法名是固定的->  假设你的路由 /admin 则请求 GET /admin
    async index() {
        this.ctx.body = result.okData(await this.ctx.service.admin.index());
    }

    // 单个-> 注意方法名是固定的->  假设你的路由 /admin 则请求 GET /admin/:id
    async show() {
        this.ctx.body = result.okData(await this.ctx.service.admin.show());
    }
    // 创建-> 注意方法名是固定的->假设你的路由 /admin 则请求 POST /admin
    async create() {
        await this.ctx.service.admin.create(this.ctx.request.body)
        this.ctx.body = result.okData("插入成功!");
    }
    // 删除-> 注意方法名是固定的->假设你的路由 /admin 则请求 DELETE /admin/:id
    async destroy() {
        await this.ctx.service.admin.destroy()
        this.ctx.body = result.okData("删除成功!");
    }
    // 修改-> 注意方法名是固定的->  假设你的路由 /admin 则请求 PUT /admin/:id
    async update() {
        await this.ctx.service.admin.update()
        this.ctx.body = result.okMsg("修改成功!");
    }
}

module.exports = AdminController;
