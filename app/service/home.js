// app/service/news.js
const Service = require('egg').Service;
const tableName = "t_admin"

class AdminService extends Service {
    async index() {
        return await this.app.mysql.select(tableName)
    }
    async create() {
        return "insert"
    }
    async show() {
        return await this.app.mysql.get(tableName, {admin_id: 1})
    }
    async destroy() {
        return "remove"
    }
    async update() {
        return "update"
    }
}

module.exports = AdminService;
