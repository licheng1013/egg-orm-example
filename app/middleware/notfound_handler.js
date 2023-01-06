// app/middleware/notfound_handler.js
const {okMsg, failMsg} = require("../model/result");
module.exports = () => {
    return async function notFoundHandler(ctx, next) {
        await next();
        console.log("404中间件!")
        if (ctx.status === 404 && !ctx.body) {
           ctx.body = failMsg("路由不存在!")
        }
    };
};
