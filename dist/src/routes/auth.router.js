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
    // {
    //   path:"/about",
    //   method:"get",
    //   handler:[authController.about],
    // },
    // {
    //   path:"/new_button",
    //   method:"get",
    //   handler:[authController.new_button],
    // },
    // {
    //   path:"/schedule",
    //   method:"get",
    //   handler:[authController.schedule],
    // },
    // {
    //   path:"/announcements",
    //   method:"get",
    //   handler:[authController.announcements],
    // },
    // {
    //   path:"/services",
    //   method:"get",
    //   handler:[authController.services],
    // },
    // {
    //   path:"/contact_and_hours",
    //   method:"get",
    //   handler:[authController.contact_and_hours],
    // },
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
    {
        path: "/update_notifications",
        method: "put",
        handler: [auth_controller_1.authController.update_notifications],
    },
    {
        path: "/update_eyeIcon",
        method: "put",
        handler: [auth_controller_1.authController.update_eyeIcon],
    },
    {
        path: "/delete_notification",
        method: "put",
        handler: [auth_controller_1.authController.delete_notification],
    },
    {
        path: "/get_announcements",
        method: "get",
        handler: [auth_controller_1.authController.get_announcements],
    },
    {
        path: "/add_announcements",
        method: "post",
        handler: [auth_controller_1.authController.add_announcements],
    },
    {
        path: "/update_announcements",
        method: "put",
        handler: [auth_controller_1.authController.update_announcements],
    },
    {
        path: "/delete_announcement",
        method: "put",
        handler: [auth_controller_1.authController.delete_announcement],
    },
    // {
    //   path: "/get_details",
    //   method: "get",
    //   handler: [authController.get_details],
    // },
    // {
    //   path: "/pre_populate",
    //   method: "get",
    //   handler: [authController.pre_populate],
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
        path: "/update_contact_and_hours",
        method: "put",
        handler: [auth_controller_1.authController.update_contact_and_hours],
    },
    {
        path: "/get_contact_and_hours",
        method: "get",
        handler: [auth_controller_1.authController.get_contact_and_hours],
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
    // {
    //   path: "/eyeputservices",
    //   method: "put",
    //   handler: [authController.eyeputservices],
    // },
    {
        path: "/eyeputservices1",
        method: "put",
        handler: [auth_controller_1.authController.eyeputservices1],
    },
    { path: "/get_about",
        method: "get",
        handler: [auth_controller_1.authController.get_about]
    },
    {
        path: "/update_about",
        method: "put",
        handler: [auth_controller_1.authController.update_about]
    },
    {
        path: "/create_tiles",
        method: "post",
        handler: [auth_controller_1.authController.create_tiles],
    },
    {
        path: "/get_tiles",
        method: "get",
        handler: [auth_controller_1.authController.get_tiles],
    },
    {
        path: "/update_is_checked",
        method: "put",
        handler: [auth_controller_1.authController.update_is_checked],
    },
    {
        path: "/update_title_position",
        method: "put",
        handler: [auth_controller_1.authController.update_title_position],
    },
    {
        path: "/get_users",
        method: "get",
        handler: [auth_controller_1.authController.get_users],
    },
    {
        path: "/create_schedule",
        method: "post",
        handler: [auth_controller_1.authController.create_schedule]
    },
];
//# sourceMappingURL=auth.router.js.map