import { authController } from "../controller/auth.controller";
export default [
  {
    path: "/log_user",
    method: "post",
    handler: [authController.log_user],
  },
  {
    path: "/add_user",
    method: "post",
    handler: [authController.add_user],
  },
  {
    path: "/applications",
    method: "get",
    handler: [authController.applications],
  },
  {
    path: "/about",
    method: "get",
    handler: [authController.applications],
  },
  {
    path: "/new_button",
    method: "get",
    handler: [authController.applications],
  },
  {
    path: "/update_about1",
    method: "put",
    handler: [authController.update_about1],
  },
  {
    path: "/create_schedule",
    method: "post",
    handler: [authController.create_schedule],
  },
  {
    path: "/announcements",
    method: "get",
    handler: [authController.announcements],
  },
  {
    path: "/updateannouncements",
    method: "put",
    handler: [authController.updateannouncements],
  },
  {
    path: "/new_annnouncement1",
    method: "post",
    handler: [authController.new_annnouncement1],
  },
  {
    path: "/services",
    method: "get",
    handler: [authController.services],
  },
  {
    path: "/postservices",
    method: "post",
    handler: [authController.postservices],
  },
  {
    path: "/putservices",
    method: "put",
    handler: [authController.putservices],
  },
  {
    path: "/eyeputservices",
    method: "put",
    handler: [authController.eyeputservices],
  },
  {
    path: "/eyeputservices1",
    method: "put",
    handler: [authController.eyeputservices1],
  },
  {
    path: "/contact_and_hours",
    method: "get",
    handler: [authController.applications],
  },
  // {
  //   path: "/add_service1",
  //   method: "post",
  //   handler: [authController.applications],
  // },

  {
    path: "/contact_and_hours",
    method: "put",
    handler: [authController.contact_and_hours],
  },
  {
    path: "/notifications",
    method: "get",
    handler: [authController.notifications],
  },
  {
    path: "/newnotifications",
    method: "post",
    handler: [authController.newnotifications],
  },
  {
    path: "/updatenotifications",
    method: "put",
    handler: [authController.updatenotifications],
  },
  {
    path: "/add_user",
    method: "post",
    handler: [authController.add_user],
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
