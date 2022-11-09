"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("../controller/auth.controller");
exports.default = [
    {
        path: "/get_user",
        method: "get",
        handler: [auth_controller_1.authController.get_user],
    },
    //     {
    //       path: "/add_user",
    //       method: "post",
    //       handler: [authController.add_user],
    //   },
    //   {
    //     path: "/update_user",
    //     method: "put",
    //     handler: [authController.update_user],
    // },
    // {
    //   path: "/delete_user",
    //   method: "delete",
    //   handler: [authController.delete_user],
    // },
    // {
    //   path: "/create_user",
    //   method: "post",
    //   handler: [authController.create_user],
    // },
    // {
    //   path: "/forget_password",
    //   method: "post",
    //   handler: [authController.forget_password],
    // },
    // {
    //   path: "/login",
    //   method: "post",
    //   handler: [authController.login],
    // } ,
    // {
    //   path: "/dashboard",
    //   method: "post",
    //   handler: [authController.dashboard],
    // },   
];
//# sourceMappingURL=auth.router.js.map