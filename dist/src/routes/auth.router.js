"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("../controller/auth.controller");
exports.default = [
    {
        path: "/log_user",
        method: "post",
        handler: [auth_controller_1.authController.log_user],
    },
    {
        path: "/add_user",
        method: "post",
        handler: [auth_controller_1.authController.add_user],
    },
    {
        path: "/applications",
        method: "get",
        handler: [auth_controller_1.authController.applications],
    },
    {
        path: "/about",
        method: "get",
        handler: [auth_controller_1.authController.applications],
    },
    {
        path: "/new_button",
        method: "get",
        handler: [auth_controller_1.authController.applications],
    },
    {
        path: "/schedule",
        method: "get",
        handler: [auth_controller_1.authController.applications],
    },
    {
        path: "/announcements",
        method: "get",
        handler: [auth_controller_1.authController.applications],
    },
    {
        path: "/services",
        method: "get",
        handler: [auth_controller_1.authController.applications],
    },
    {
        path: "/contact_and_hours",
        method: "get",
        handler: [auth_controller_1.authController.applications],
    },
    {
        path: "/get_notifications",
        method: "get",
        handler: [auth_controller_1.authController.get_notifications],
    },
    {
        path: "/add_notifications",
        method: "post",
        handler: [auth_controller_1.authController.add_notifications],
    },
    // ,
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
    {
        path: "/get_user",
        method: "get",
        handler: [auth_controller_1.authController.get_user],
    },
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