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

    handler:[authController.about],
  },
  {
    path:"/update_about1",
    method:"put",
    handler:[authController.update_about1],
  },
  {
    path:"/add_schedule",
    method:"post",
    handler:[authController.add_schedule],
  },
  {
    path:"/announcements",
    method:"get",
    handler:[authController.announcements],
  },
  {
    path:"/new_annnouncement1",
    method:"post",
    handler:[authController.new_annnouncement1],
  },
  // {
  //   path:"/delete_announcement1",
  //   method:"delete",
  //   handler:[authController.applications],
  // },
  {
    path:"/updateannouncements",
    method:"put",
    handler:[authController.updateannouncements],

  },  
  {
    path:"/contact_and_hours",
    method:"put",
    handler:[authController.contact_and_hours],

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