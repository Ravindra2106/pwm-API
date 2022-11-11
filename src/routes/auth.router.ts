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
    handler:[authController.applications],
  },
  {
    path:"/services",
    method:"get",
    handler:[authController.applications],
  },
  {
    path:"/contact_and_hours",
    method:"get",
    handler:[authController.applications],
  },
  {
    path:"/get_notifications",
    method:"get",
    handler:[authController.get_notifications],
  },
  {
    path:"/add_notifications",
    method:"post",
    handler:[authController.add_notifications],
  },
  {
    path:"/update_notifications",
    method:"post",
    handler:[authController.update_notifications],
  }
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
  handler: [authController.get_user],
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
]