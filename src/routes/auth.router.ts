import { authController }  from "../controller/auth.controller";
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
    path:"/applications",
    method:"get",
    handler:[authController.applications],
  },
  {
    path:"/about",
    method:"get",
    handler:[authController.applications],
  },
  {
    path:"/new_button",
    method:"get",
    handler:[authController.applications],
  },
  {
    path:"/schedule",
    method:"get",
    handler:[authController.applications],
  },
  {
    path:"/announcements",
    method:"get",
    handler:[authController.announcements],
  },
  {
    path:"/updateannouncements",
    method:"put",
    handler:[authController.updateannouncements],
  },
  {
    path:"/services",
    method:"get",
    handler:[authController.services],
  },
  {
    path:"/postservices",
    method:"post",
    handler:[authController.postservices],
  },
  {
    path:"/putservices",
    method:"put",
    handler:[authController.putservices],
  },
  
  {
    path:"/contact_and_hours",
    method:"get",
    handler:[authController.applications],
  },
  {
    path:"/notifications",
    method:"get",
    handler:[authController.applications],
  },
  {
    path:"/updatenotifications",
    method:"put",
    handler:[authController.updatenotifications],
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
]