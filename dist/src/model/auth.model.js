"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModel = void 0;
const db_1 = require("../config/db");
class AuthModel {
    static log_user(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`login`(?,?);',
                    values: [body.user_namee, body.passletter],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static add_user(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`create_app`(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);',
                    values: [body.name_app,
                        body.app_descript,
                        body.keywrd,
                        body.prime_color,
                        body.prime_text_color,
                        body.second_color,
                        body.second_text_color,
                        body.load_app_icon, body.splash_scrn, body.load_scrshot,
                        body.mon_from, body.mon_to, body.tue_from, body.tue_to,
                        body.wed_from, body.wed_to,
                        body.thurs_from, body.thurs_to, body.fri_from, body.fri_to,
                        body.sat_from, body.sat_to,
                        body.sun_from, body.sun_to,
                        body.full_addr, body.map_codnate, body.mobile, body.mail_id,
                        body.url, body.fb, body.tweet, body.insta, body.linkin]
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static applications(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`all_applications`();',
                    values: [],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    // static about(body: any) {
    //   return new Promise(async function (resolve, reject) {
    //     console.log('body', body);
    //     dbClient.query(
    //       {
    //         sql: 'CALL `pmw`.`about`();',
    //         values: [ ],
    //       },
    //       function (err: Error, res: any) {
    //         if (err) {
    //           // console.log('err',err);
    //           resolve(err)
    //             ;
    //         } else {
    //           console.log('response', res);
    //           resolve(res);
    //         }
    //       }
    //     );
    //   });
    // }
    // static new_button(body: any) {
    //   return new Promise(async function (resolve, reject) {
    //     console.log('body', body);
    //     dbClient.query(
    //       {
    //         sql: 'CALL `pmw`.`new_button`();',
    //         values: [ ],
    //       },
    //       function (err: Error, res: any) {
    //         if (err) {
    //           // console.log('err',err);
    //           resolve(err)
    //             ;
    //         } else {
    //           console.log('response', res);
    //           resolve(res);
    //         }
    //       }
    //     );
    //   });
    // }
    // static schedule(body: any) {
    //   return new Promise(async function (resolve, reject) {
    //     console.log('body', body);
    //     dbClient.query(
    //       {
    //         sql: 'CALL `pmw`.`schedule`();',
    //         values: [ ],
    //       },
    //       function (err: Error, res: any) {
    //         if (err) {
    //           // console.log('err',err);
    //           resolve(err)
    //             ;
    //         } else {
    //           console.log('response', res);
    //           resolve(res);
    //         }
    //       }
    //     );
    //   });
    // }
    // static announcements(body: any) {
    //   return new Promise(async function (resolve, reject) {
    //     console.log('body', body);
    //     dbClient.query(
    //       {
    //         sql: 'CALL `pmw`.`announcements`();',
    //         values: [ ],
    //       },
    //       function (err: Error, res: any) {
    //         if (err) {
    //           // console.log('err',err);
    //           resolve(err)
    //             ;
    //         } else {
    //           console.log('response', res);
    //           resolve(res);
    //         }
    //       }
    //     );
    //   });
    // }
    // static services(body: any) {
    //   return new Promise(async function (resolve, reject) {
    //     console.log('body', body);
    //     dbClient.query(
    //       {
    //         sql: 'CALL `pmw`.`services`();',
    //         values: [ ],
    //       },
    //       function (err: Error, res: any) {
    //         if (err) {
    //           // console.log('err',err);
    //           resolve(err)
    //             ;
    //         } else {
    //           console.log('response', res);
    //           resolve(res);
    //         }
    //       }
    //     );
    //   });
    // }
    // static contact_and_hours(body: any) {
    //   return new Promise(async function (resolve, reject) {
    //     console.log('body', body);
    //     dbClient.query(
    //       {
    //         sql: 'CALL `pmw`.`contact_and_hours`();',
    //         values: [ ],
    //       },
    //       function (err: Error, res: any) {
    //         if (err) {
    //           // console.log('err',err);
    //           resolve(err)
    //             ;
    //         } else {
    //           console.log('response', res);
    //           resolve(res);
    //         }
    //       }
    //     );
    //   });
    // }
    // static notifications(body: any) {
    //   return new Promise(async function (resolve, reject) {
    //     console.log('body', body);
    //     dbClient.query(
    //       {
    //         sql: 'CALL `pmw`.`notifications`();',
    //         values: [ ],
    //       },
    //       function (err: Error, res: any) {
    //         if (err) {
    //           // console.log('err',err);
    //           resolve(err)
    //             ;
    //         } else {
    //           console.log('response', res);
    //           resolve(res);
    //         }
    //       }
    //     );
    //   });
    // }
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
    //   static get_user(body: any) {
    //     return new Promise(async function (resolve, reject) {
    //       console.log('body', body);
    //       dbClient.query(
    //         {
    //           sql:'CALL `pmw`.`get_user`();    ',
    //           values: [],
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
    static get_notifications(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`get_notifications`(?);',
                    values: [body.app_num],
                }, function (err, res) {
                    if (err) {
                        console.log('err', err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static add_notifications(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`create_notifications`(?,?,?,?,?,?);',
                    values: [body.txt, body.url, body.img,
                        body.start_from, body.end_to, body.app_num],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static update_notifications(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body>>>>>>>>>>>', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`update_notifications`(?,?,?,?,?,?,?);',
                    values: [body.notify_id, body.txt, body.url, body.start_from, body.end_to, body.img, body.app_num],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static update_eyeIcon(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`update_eyeicon1`(?, ?,?);',
                    values: [body.notify_id, body.flag, body.app_num],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static delete_notification(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`delete_notifications`(?,?); ',
                    values: [body.app_num, body.notify_id],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static get_announcements(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`get_announcements`(?);',
                    values: [body.app_num],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static add_announcements(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                console.log("send value", body.send);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`create_announcements`(?,?,?,?,?,?,?,?,?);',
                    values: [body.entitle, body.img,
                        body.msg, body.start_from, body.end_to, body.send, body.dt,
                        body.clock, body.app_num],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static update_announcements(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`update_announcements`(?,?,?,?,?,?,?,?,?,?); ',
                    values: [body.id, body.entitle, body.img, body.msg,
                        body.start_from, body.end_to, body.send, body._Date, body._time, body.app_num],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static delete_announcement(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`delete_announcements`(?,?); ',
                    values: [body.app_num, body.announc_id]
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    //   static pre_populate(body: any) {
    //     return new Promise(async function (resolve, reject) {
    //       console.log('body', body);
    //       dbClient.query(
    //         {
    //           sql:'CALL `pmw`.`pre_populate`(?);   ',
    //           values: [body.user_namee],
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
    //   static get_details(body: any) {
    //     return new Promise(async function (resolve, reject) {
    //       console.log('body', body);
    //       dbClient.query(
    //         {
    //           sql:'CALL `pmw`.`get_details`(?);        ',
    //           values: [body.user_namee],
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
    static update_contact_and_hours(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`update_contact_and_hours`(?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?); ',
                    values: [body.mon_from,
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
                        body.map_coordinate,
                        body.mobile,
                        body.mailid,
                        body.weburl,
                        body.fb,
                        body.tweet,
                        body.insta,
                        body.linked,
                        body.app_num],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static get_contact_and_hours(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`get_contact_and_hours`(?);',
                    values: [body.app_num],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static services(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`get_services`(?);',
                    values: [body.app_num],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static postservices(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`create_services`(?, ?, ?, ?, ?);',
                    values: [body.entitle, body.web_url, body.phone_no, body.photo, body.app_num],
                }, function (err, res) {
                    if (err) {
                        console.log('err', err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static putservices(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`update_services`(?, ?, ?, ?, ?,?);',
                    values: [body.id, body.entitle, body.web_url, body.phone_no, body.img_upload, body.app_num],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    // static eyeputservices(body: any) {
    //   return new Promise(async function (resolve, reject) {
    //     console.log('body', body);
    //     dbClient.query(
    //       {
    //         sql: 'CALL `powerwellness`.`update_eyeicon1`(?, ?,?);',
    //         values: [body.svc_id,body.flag, body.app_num],
    //       },
    //       function (err: Error, res: any) {
    //         if (err) {
    //           // console.log('err',err);
    //           resolve(err)
    //             ;
    //         } else {
    //           console.log('response', res);
    //           resolve(res);
    //         }
    //       }
    //     );
    //   });
    // }
    static eyeputservices1(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`update_eyeicon_services`(?,?,?); ',
                    values: [body.svc_id, body.flag, body.app_num],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static update_about(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body<><><><', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`update_about`(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
                    values: [
                        body.prime_color, body.prime_text_color, body.second_color, body.second_text_color,
                        body.name_app, body.app_descrip, body.keywrd, body.load_icon, body.splash_scr, body.load_scr,
                        body.app_num
                    ],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static update_title_position(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`update_title_position`(?, ?, ?);',
                    values: [
                        body.new_postion,
                        body.tile_num,
                        body.app_num
                    ],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static get_about(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`get_about`(?);',
                    values: [body.app_num],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static create_tiles(body) {
        console.log("body", body);
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`create_tiles`(?, ?, ?,?, ?,?,?);',
                    values: [
                        body.bt_title,
                        body.bt_descript,
                        body.bt_icon,
                        body.bt_url,
                        body.bt_background_color,
                        body.tile_position + 1,
                        body.app_num
                    ],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static get_tiles(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`get_tiles`(?);',
                    values: [body.app_num],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static update_is_checked(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.`update_is_checked`(?,?,?);',
                    values: [
                        body.check_value,
                        body.tile_num,
                        body.app_num
                    ],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static get_users(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("body", body);
                db_1.dbClient.query({
                    sql: "CALL `powerwellness`.`get_users`(?);",
                    values: [body.app_num],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log("response", res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static create_schedule(body) {
        console.log("model body>>", body);
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `powerwellness`.` create_schedule`(?, ?, ?, ?, ?, ?,?,?,?,?, ?,? ,?);',
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
                        body.app_num
                    ],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
}
exports.AuthModel = AuthModel;
//# sourceMappingURL=auth.model.js.map