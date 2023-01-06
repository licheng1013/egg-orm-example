// app/service/news.js
const Service = require('egg').Service;
const tableName = "t_admin"

class AdminService extends Service {
    // 分页
    async index() {
        return await this.app.mysql.select(tableName)
    }
    // 创建
    async create(body) {
        console.log(body)
        const result = await this.app.mysql.insert(tableName, body);
        console.log(result);
        if (result.affectedRows !== 1) {
            throw new Error("插入失败!")
        }

    }
    // 单个
    async show(id) {
        return await this.app.mysql.get(tableName, {admin_id: id})
    }
    // 删除
    async destroy() {
        return "remove"
    }
    // 修改
    async update() {
        return "update"
    }
}

module.exports = AdminService;
