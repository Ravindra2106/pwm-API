import { dbClient } from "../config/db";

export class AuthModel {
  static log_user(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log('body', body);
      dbClient.query(
        {
          sql: 'CALL `pmw`.`log_user`(?,?); ',
          values: [body.user_namee,body.passletter],
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err)
              ;
          } else {
            console.log('response', res);
            resolve(res);
          }
        }
      );
    });
  }
  static applications(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log('body', body);
      dbClient.query(
        {
          sql: 'CALL `pmw`.`applications`();',
          values: [ ],
        },
        function (err: Error, res: any) {

          if (err) {
            // console.log('err',err);
            resolve(err)
              ;
          } else {
            console.log('response', res);
            resolve(res);
          }
        }
      );
    });
  }
  static about(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log('body', body);
      dbClient.query(
        {
          sql: 'CALL `pmw`.`about`();',
          values: [ ],
        },
        function (err: Error, res: any) {

          if (err) {
            // console.log('err',err);
            resolve(err)
              ;
          } else {
            console.log('response', res);
            resolve(res);
          }
        }
      );
    });
  }
  static new_button(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log('body', body);
      dbClient.query(
        {
          sql: 'CALL `pmw`.`new_button`();',
          values: [ ],
        },
        function (err: Error, res: any) {

          if (err) {
            // console.log('err',err);
            resolve(err)
              ;
          } else {
            console.log('response', res);
            resolve(res);
          }
        }
      );
    });
  }
  static schedule(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log('body', body);
      dbClient.query(
        {
          sql: 'CALL `pmw`.`schedule`();',
          values: [ ],
        },
        function (err: Error, res: any) {

          if (err) {
            // console.log('err',err);
            resolve(err)
              ;
          } else {
            console.log('response', res);
            resolve(res);
          }
        }
      );
    });
  }
  static announcements(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log('body', body);
      dbClient.query(
        {
          sql: 'CALL `pmw`.`announcements`();',
          values: [ ],
        },
        function (err: Error, res: any) {

          if (err) {
            // console.log('err',err);
            resolve(err)
              ;
          } else {
            console.log('response', res);
            resolve(res);
          }
        }
      );
    });
  }
  static services(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log('body', body);
      dbClient.query(
        {
          sql: 'CALL `pmw`.`services`();',
          values: [ ],
        },
        function (err: Error, res: any) {

          if (err) {
            // console.log('err',err);
            resolve(err)
              ;
          } else {
            console.log('response', res);
            resolve(res);
          }
        }
      );
    });
  }
  static contact_and_hours(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log('body', body);
      dbClient.query(
        {
          sql: 'CALL `pmw`.`contact_and_hours`();',
          values: [ ],
        },
        function (err: Error, res: any) {

          if (err) {
            // console.log('err',err);
            resolve(err)
              ;
          } else {
            console.log('response', res);
            resolve(res);
          }
        }
      );
    });
  }
  static notifications(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log('body', body);
      dbClient.query(
        {
          sql: 'CALL `pmw`.`notifications`();',
          values: [ ],
        },
        function (err: Error, res: any) {

          if (err) {
            // console.log('err',err);
            resolve(err)
              ;
          } else {
            console.log('response', res);
            resolve(res);
          }
        }
      );
    });
  }
  static add_user(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log('body', body);
      dbClient.query(
        {
          sql: 'CALL `pmw`.`addnewapp`(?,?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?); ',
          values: [body.name_app,
          body.app_descr,
          body.keywrd,
          body.prime_color,
          body.prime_text_color,
          body.second_color,
          body.second_text_color,
          body.add_app_icon, body.splash_src, body.add_scrshot,
          body.mon_from,body.mon_to,body.tue_from,body.tue_to,body.wed_from,body.wed_to,
          body.thurs_from,body.thurs_to,body.fri_from,body.fri_to,body.sat_from,body.sat_to,
          body.sun_from,body.sun_to,
          body.full_addr,body.map_codnate,body.mobile,body.mail_id,
          body.url,body.fb,body.tweet,body.insta,body.linkin]
        },
        function (err: Error, res: any) {
          if (err) {
            // console.log('err',err);
            resolve(err)
              ;
          } else {
            console.log('response', res);
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
    static get_user(body: any) {
      return new Promise(async function (resolve, reject) {
        console.log('body', body);
        dbClient.query(
          {
            sql:'CALL `pmw`.`get_user`();    ',
            values: [],
          },
          function ( err: Error,res: any) {
            if (err) {
              // console.log('err',err);
              resolve (err)
  ;          } else {
              console.log('response',res);
              resolve(res);
            }
          }
        );
      });
    }
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
    static get_notifications(body: any) {
      return new Promise(async function (resolve, reject) {
        console.log('body', body);
        dbClient.query(
          {
            sql:'CALL `pmw`.`get_notifications`();',
            values: [],
          },
          function ( err: Error,res: any) {
            if (err) {
              // console.log('err',err);
              resolve (err)
  ;          } else {
              console.log('response',res);
              resolve(res);
            }
          }
        );
      });
    }
    static add_notifications(body: any) {
      return new Promise(async function (resolve, reject) {
        console.log('body', body);
        dbClient.query(
          {
            sql:'CALL `pmw`.`add_notifications`(?,?,?,?,?);   ',
            values: [body._image,body._notify_title,body._notify_url,body._date_from,body._date_to],
          },
          function ( err: Error,res: any) {
            if (err) {
              // console.log('err',err);
              resolve (err)
  ;          } else {
              console.log('response',res);
              resolve(res);
            }
          }
        );
      });
    }
    static update_notifications(body: any) {
      return new Promise(async function (resolve, reject) {
        console.log('body', body);
        dbClient.query(
          {
            sql:'CALL `pmw`.`update_notifications`(?,?,?,?,?);',
            values: [body._image,body._notify_title,body._notify_url,body._date_from,body._date_to],
          },
          function ( err: Error,res: any) {
            if (err) {
              // console.log('err',err);
              resolve (err)
  ;          } else {
              console.log('response',res);
              resolve(res);
            }
          }
        );
      });
    }
  //   static get_notifications(body: any) {
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
