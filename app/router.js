// app/router.js
module.exports = (app) => {
    const { router, controller } = app;
    // 名称，请求路径，路由js文件名称, controller.admin = app/controller/admin.js
    router.resources('admin', '/admin', controller.admin);
    router.get("/err",controller.test.index)
};
