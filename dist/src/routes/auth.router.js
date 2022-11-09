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
        handler: [auth_controller_1.authController.announcements],
    },
    {
        path: "/updateannouncements",
        method: "put",
        handler: [auth_controller_1.authController.updateannouncements],
    },
    {
        path: "/services",
        method: "get",
        handler: [auth_controller_1.authController.services],
    },
    {
        path: "/postservices",
        method: "post",
        handler: [auth_controller_1.authController.postservices],
    },
    {
        path: "/putservices",
        method: "put",
        handler: [auth_controller_1.authController.putservices],
    },
    {
        path: "/contact_and_hours",
        method: "get",
        handler: [auth_controller_1.authController.applications],
    },
    {
        path: "/notifications",
        method: "get",
        handler: [auth_controller_1.authController.applications],
    },
    {
        path: "/updatenotifications",
        method: "put",
        handler: [auth_controller_1.authController.updatenotifications],
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