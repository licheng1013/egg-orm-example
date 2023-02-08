const Service = require('egg').Service;

class TestService extends Service {
    // 分页
    async index() {
        throw new Error("出现错误!") //测试异常捕获
    }
}
module.exports = TestService;
