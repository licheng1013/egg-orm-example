// config/config.default.js
module.exports = {
    keys: "SDFABDLIFSDJFSLI", // 框架配置的key
    // 加载 errorHandler 中间件,按数组顺序进行加载
    middleware: ['errorHandler','authHandler'],
    // 只对 / 前缀的 url 路径生效
    errorHandler: {
        match: '/',
    },
};



