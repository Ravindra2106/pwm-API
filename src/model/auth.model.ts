import { dbClient } from "../config/db";

export class AuthModel {
  static schedule: any;
  static log_user(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log("body", body);
      dbClient.query(
        {
          sql: "CALL `pmw`.`get_user`(?, ?);",
          values: [body.user_namee, body.passletter],
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err);
          } else {
            console.log("response", res);
            resolve(res);
          }
        }
      );
    });
  }
  static add_user(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log("body", body);
      dbClient.query(
        {
          sql: "CALL `pmw`.`addnewapp`(?,?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?); ",
          values: [
            body.name_app,
            body.app_descr,
            body.keywrd,
            body.prime_color,
            body.prime_text_color,
            body.second_color,
            body.second_text_color,
            body.add_app_icon,
            body.splash_src,
            body.add_scrshot,
            body.mon_from,
            body.mon_to,
            body.tue_from,
            body.tue_to,
            body.wed_from,
            body.wed_to,
            body.thurs_from,
            body.thurs_to,
            body.fri_from,
            body.fri_to,
            body.sat_from,
            body.sat_to,
            body.sun_from,
            body.sun_to,
            body.full_addr,
            body.map_codnate,
            body.mobile,
            body.mail_id,
            body.url,
            body.fb,
            body.tweet,
            body.insta,
            body.linkin,
          ],
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err);
          } else {
            console.log("response", res);
            resolve(res);
          }
        }
      );
    });
  }
  static applications(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log("body", body);
      dbClient.query(
        {
          sql: "CALL `pmw`.`applications`();",
          values: [],
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err);
          } else {
            console.log("response", res);
            resolve(res);
          }
        }
      );
    });
  }
  static about(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log("body", body);
      dbClient.query(
        {
          sql: "CALL `pmw`.`get_about`();",
          values: [
            //   body._change_app_icon,
            // body._primary_color, body._primary_text_color, body._secondary_color,
            // body._secondary_text_color, body._app_name, body._app_description,
            // body._keywords, body._splash_screen, body._upload_screenshots
          ],
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err);
          } else {
            console.log("response", res);
            resolve(res);
          }
        }
      );
    });
  }
  static update_about1(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log("body", body);
      dbClient.query(
        {
          sql: "CALL `pmw`.`_about`(?, ?, ?, ?, ?,?,?, ?, ?,?);",
          values: [
            // body._change_app_icon,
            body._primary_color,
            body._primary_text_color,
            body._secondary_color,
            body._secondary_text_color,
            body._app_name,
            body._app_description,
            body._keywords,
            body._upload_app_icon,
            body._splash_screen,
            body._upload_screenshots,
          ],
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err);
          } else {
            console.log("response", res);
            resolve(res);
          }
        }
      );
    });
  }
  static new_button(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log("body", body);
      dbClient.query(
        {
          sql: "CALL `pmw`.`new_button`();",
          values: [],
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err);
          } else {
            console.log("response", res);
            resolve(res);
          }
        }
      );
    });
  }
  static create_schedule(body: any) {
    console.log("body", body);
    return new Promise(async function (resolve, reject) {
      console.log("body", body);
      dbClient.query(
        {
          sql: "CALL `powerwellness`.` create_schedule`(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
          values: [
            body.sch_name,
            body.sch_activity,
            body.sch_date,
            body.sch_from_time,
            body.sch_to_time,
            body.sch_activity_type,
            body.sch_description,
            body.sch_instructor,
            body.sch_activity_url,
            body.sch_sch_col_unf1,
            body.sch_sch_col_unf2,
            body.sch_resource_location,
            body.app_num,
          ],
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err);
          } else {
            console.log("response", res);
            resolve(res);
          }
        }
      );
    });
  }
  static get_schedule(body: any) {
    console.log("body", body);
    return new Promise(async function (resolve, reject) {
      console.log("body", body);
      dbClient.query(
        {
          sql: "CALL `pmw`.`get_schedule`();",
          values: [body.upload_schedule],
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err);
          } else {
            console.log("response", res);
            resolve(res);
          }
        }
      );
    });
  }
  static announcements(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log("body", body);
      dbClient.query(
        {
          sql: "CALL `pmw`.`announcement`();",
          values: [],
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err);
          } else {
            console.log("response", res);
            resolve(res);
          }
        }
      );
    });
  }
  static updateannouncements(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log("body", body);
      dbClient.query(
        {
          sql: "CALL `pmw`.`update_announcement`(?, ?, ?, ?, ?, ?);",
          values: [
            body._date_from,
            body._date_to,
            body._image,
            body._title,
            body._description,
            body._status,
          ],
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err);
          } else {
            console.log("response", res);
            resolve(res);
          }
        }
      );
    });
  }
  static new_annnouncement1(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log("body in new_announcement1", body);

      dbClient.query(
        {
          sql: "CALL `pmw`.`new_announcement`(?, ?, ?, ?, ?, ?);",
          values: [
            body._date_from,
            body._date_to,
            body._image,
            body.title,
            body._descrp,
            body._status,
          ],
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err);
          } else {
            console.log("response", res);
            resolve(res);
          }
        }
      );
    });
  }
  static services(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log("body", body);
      dbClient.query(
        {
          sql: "CALL `powerwellness`.`get_services`(?);",
          values: [body.app_num],
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err);
          } else {
            console.log("response", res);
            resolve(res);
          }
        }
      );
    });
  }
  static postservices(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log("body", body);
      dbClient.query(
        {
          sql: "CALL `powerwellness`.`create_services`(?, ?, ?, ?, ?);",
          values: [
            body.entitle,
            body.web_url,
            body.phone_no,
            body.photo,
            body.app_num,
          ],
        },
        function (err: Error, res: any) {
          if (err) {
            console.log("err", err);
            resolve(err);
          } else {
            console.log("response", res);
            resolve(res);
          }
        }
      );
    });
  }
  static putservices(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log("body", body);
      dbClient.query(
        {
          sql: "CALL `powerwellness`.`update_services`(?, ?, ?, ?, ?,?);",
          values: [
            body.id,
            body.entitle,
            body.web_url,
            body.phone_no,
            body.photo,
            body.app_num,
          ],
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err);
          } else {
            console.log("response", res);
            resolve(res);
          }
        }
      );
    });
  }
  static eyeputservices(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log("body", body);
      dbClient.query(
        {
          sql: "CALL `powerwellness`.`update_eyeicon`(?, ?);",
          values: [body.svc_id, body.app_num],
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err);
          } else {
            console.log("response", res);
            resolve(res);
          }
        }
      );
    });
  }
  static update_eyeicon_services(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log("body", body);
      dbClient.query(
        {
          sql: "CALL `powerwellness`.`update_eyeicon_services`(?, ?, ?);",
          values: [body.svc_id, body.flag, body.app_num],
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err);
          } else {
            console.log("response", res);
            resolve(res);
          }
        }
      );
    });
  }
  static contact_and_hours(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log("body", body);
      dbClient.query(
        {
          sql: "CALL `pmw`.`update_contact_and_hours`(?,?,?,?, ?, ?,?, ?, ?, ?, ?, ?,?, ?, ?,?,?, ?,?,?, ?, ?, ?);",
          values: [
            body.mon_from,
            body.mon_to,
            body.tue_from,
            body.tue_to,
            body.wed_from,
            body.wed_to,
            body.thurs_from,
            body.thurs_to,
            body.fri_from,
            body.fri_to,
            body.sat_from,
            body.sat_to,
            body.sun_from,
            body.sun_to,
            body.full_addr,
            body.map_codnate,
            body.mobile,
            body.mail_id,
            body.url,
            body.fb,
            body.tweet,
            body.insta,
            body.linkin,
          ],
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err);
          } else {
            console.log("response", res);
            resolve(res);
          }
        }
      );
    });
  }
  static notifications(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log("body", body);
      dbClient.query(
        {
          sql: "CALL `pmw`.`announcement`();",
          values: [],
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err);
          } else {
            console.log("response", res);
            resolve(res);
          }
        }
      );
    });
  }
  static newnotifications(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log("body", body);
      dbClient.query(
        {
          sql: "CALL `pmw`.`new_notifications`(?, ?, ?, ?, ?);",
          values: [
            body._date_from,
            body._date_to,
            body._image,
            body.title,
            body._descrp,
            body._status,
          ],
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err);
          } else {
            console.log("response", res);
            resolve(res);
          }
        }
      );
    });
  }
  static updatenotifications(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log("body", body);
      dbClient.query(
        {
          sql: "CALL `pmw`.`update_notifications`(?, ?, ?, ?, ?)`();",
          values: [
            body._image,
            body._notify_title,
            body._notify_url,
            body._date_from,
            body._date_to,
          ],
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err);
          } else {
            console.log("response", res);
            resolve(res);
          }
        }
      );
    });
  }
  static get_users(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log("body", body);
      dbClient.query(
        {
          sql: "CALL `powerwellness`.`get_users`(?);",
          values: [body.app_num],
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err);
          } else {
            console.log("response", res);
            resolve(res);
          }
        }
      );
    });
  }

  //   static update_user(body: any) {
  //     return new Promise(async function (resolve, reject) {
  //       console.log('body', body);
  //       dbClient.query(
  //         {
  //           sql: 'CALL `slambook`.`update_user`(?,?,?,?);',
  //           values: [body.auth_id,body.username,body.phonenumber,body.security],
  //         },
  //         function ( err: Error,res: any) {
  //           if (err) {
  //             // console.log('err',err);
  //             resolve (err)
  // ;          } else {
  //             console.log('response',res);
  //             resolve(res);
  //           }
  //         }
  //       );
  //     });
  //   }
  //   static delete_user(body: any) {
  //     return new Promise(async function (resolve, reject) {
  //       console.log('body', body);
  //       dbClient.query(
  //         {
  //           sql:'CALL `slambook`.`delete_user`(?);',
  //           values: [body.value1],
  //         },
  //         function ( err: Error,res: any) {
  //           if (err) {
  //             // console.log('err',err);
  //             resolve (err)
  // ;          } else {
  //             console.log('response',res);
  //             resolve(res);
  //           }
  //         }
  //       );
  //     });
  //   }
  //   static create_user(body: any) {
  //     return new Promise(async function (resolve, reject) {
  //       console.log('body', body);
  //       dbClient.query(
  //         {
  //           sql:'CALL `slambook`.`create_user`(?,?,?,?,?,?,?,?);',
  //           values: [body.first_name,body.last_name,body._email,body.phonenumber,body.security,body.dob,body.gen,body.role],
  //         },
  //         function ( err: Error,res: any) {
  //           if (err) {
  //             // console.log('err',err);
  //             resolve (err)
  // ;          } else {
  //             console.log('response',res);
  //             resolve(res);
  //           }
  //         }
  //       );
  //     });
  //   }
  //   static forget_password(body: any) {
  //     return new Promise(async function (resolve, reject) {
  //       console.log('body', body);
  //       dbClient.query(
  //         {
  //           sql:'CALL `slambook`.`forget_password`(?,?);',
  //           values: [body._email,body._password],
  //         },
  //         function ( err: Error,res: any) {
  //           if (err) {
  //             // console.log('err',err);
  //             resolve (err)
  // ;          } else {
  //             console.log('response',res);
  //             resolve(res);
  //           }
  //         }
  //       );
  //     });
  //   }
  //   static login(body: any) {
  //     return new Promise(async function (resolve, reject) {
  //       console.log('body', body);
  //       dbClient.query(
  //         {
  //           sql:'CALL `slambook`.`forget_password`(?,?);',
  //           values: [body._email,body._password],
  //         },
  //         function ( err: Error,res: any) {
  //           if (err) {
  //             // console.log('err',err);
  //             resolve (err)
  // ;          } else {
  //             console.log('response',res);
  //             resolve(res);
  //           }
  //         }
  //       );
  //     });
  //   }
  //   static dashboard(body: any) {
  //     return new Promise(async function (resolve, reject) {
  //       console.log('body', body);
  //       dbClient.query(
  //         {
  //           sql:'CALL `slambook`.`dashboard`(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);',
  //           values: [body._my_name,body._nike_name,body._born_place,body._current_place,
  //             body._contact_number,body._age,body._food,body._city,body._animal,body._tv_show,body._color_,body._movie,body._celebrity,body._song,body._about_me,
  //             body._my_hobbies,body._best_memories,body._my_dreams,body._social_media,body._image],
  //         },
  //         function ( err: Error,res: any) {
  //           if (err) {
  //             // console.log('err',err);
  //             resolve (err)
  // ;          } else {
  //             console.log('response',res);
  //             resolve(res);
  //           }
  //         }
  //       );
  //     });
  //   }
}
