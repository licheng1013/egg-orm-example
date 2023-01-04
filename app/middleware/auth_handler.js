const {okMsg, failMsg} = require("../model/result");
module.exports = () => {
    return async function authHandler(ctx, next) {
        console.log("认证中间件!")
        try {
            await next();
        } catch (err) {
        }
    };
};
