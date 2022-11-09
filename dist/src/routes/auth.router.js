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
<<<<<<< HEAD
        handler: [auth_controller_1.authController.about],
    },
    {
        path: "/update_about1",
        method: "put",
        handler: [auth_controller_1.authController.update_about1],
    },
    {
        path: "/add_schedule",
        method: "post",
        handler: [auth_controller_1.authController.add_schedule],
=======
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
>>>>>>> cb898fe3489c90cf289e017ed12b94e59317694c
    },
    {
        path: "/announcements",
        method: "get",
        handler: [auth_controller_1.authController.announcements],
    },
    {
<<<<<<< HEAD
        path: "/new_annnouncement1",
        method: "post",
        handler: [auth_controller_1.authController.new_annnouncement1],
    },
    // {
    //   path:"/delete_announcement1",
    //   method:"delete",
    //   handler:[authController.applications],
    // },
    {
        path: "/update_announcements1",
        method: "put",
        handler: [auth_controller_1.authController.applications],
=======
        path: "/updateannouncements",
        method: "put",
        handler: [auth_controller_1.authController.updateannouncements],
>>>>>>> cb898fe3489c90cf289e017ed12b94e59317694c
    },
    {
        path: "/services",
        method: "get",
<<<<<<< HEAD
        handler: [auth_controller_1.authController.applications],
    },
    {
        path: "/add_service1",
        method: "post",
        handler: [auth_controller_1.authController.applications],
    },
    {
        path: "/update_service1",
        method: "put",
        handler: [auth_controller_1.authController.applications],
    },
    {
        path: "/contact_and_hours",
        method: "put",
        handler: [auth_controller_1.authController.contact_and_hours],
=======
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
>>>>>>> cb898fe3489c90cf289e017ed12b94e59317694c
    },
    {
        path: "/notifications",
        method: "get",
        handler: [auth_controller_1.authController.applications],
    },
<<<<<<< HEAD
=======
    {
        path: "/updatenotifications",
        method: "put",
        handler: [auth_controller_1.authController.updatenotifications],
    },
>>>>>>> cb898fe3489c90cf289e017ed12b94e59317694c
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