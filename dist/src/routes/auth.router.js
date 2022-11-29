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
        path: "/update_about1",
        method: "put",
        handler: [auth_controller_1.authController.update_about1],
    },
    {
        path: "/create_schedule",
        method: "post",
        handler: [auth_controller_1.authController.create_schedule],
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
        path: "/new_annnouncement1",
        method: "post",
        handler: [auth_controller_1.authController.new_annnouncement1],
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
        path: "/eyeputservices",
        method: "put",
        handler: [auth_controller_1.authController.eyeputservices],
    },
    {
        path: "/update_eyeicon_services",
        method: "put",
        handler: [auth_controller_1.authController.update_eyeicon_services],
    },
    {
        path: "/contact_and_hours",
        method: "get",
        handler: [auth_controller_1.authController.applications],
    },
    {
        path: "/contact_and_hours",
        method: "put",
        handler: [auth_controller_1.authController.contact_and_hours],
    },
    {
        path: "/notifications",
        method: "get",
        handler: [auth_controller_1.authController.notifications],
    },
    {
        path: "/newnotifications",
        method: "post",
        handler: [auth_controller_1.authController.newnotifications],
    },
    {
        path: "/updatenotifications",
        method: "put",
        handler: [auth_controller_1.authController.updatenotifications],
    },
    {
        path: "/updatenotifications",
        method: "put",
        handler: [auth_controller_1.authController.updatenotifications],
    },
    {
        path: "/get_users",
        method: "get",
        handler: [auth_controller_1.authController.get_users],
    },
    // {
    //   path: "/add_user",
    //   method: "post",
    //   handler: [authController.add_user],
    // },
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