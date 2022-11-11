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
                    sql: 'CALL `pmw`.`get_user`(?, ?);',
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
                    sql: 'CALL `pmw`.`addnewapp`(?,?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?); ',
                    values: [body.name_app,
                        body.app_descr,
                        body.keywrd,
                        body.prime_color,
                        body.prime_text_color,
                        body.second_color,
                        body.second_text_color,
                        body.add_app_icon, body.splash_src, body.add_scrshot,
                        body.mon_from, body.mon_to, body.tue_from, body.tue_to, body.wed_from, body.wed_to,
                        body.thurs_from, body.thurs_to, body.fri_from, body.fri_to, body.sat_from, body.sat_to,
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
                    sql: 'CALL `pmw`.`applications`();',
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
    static about(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `pmw`.`get_about`();',
                    values: [
                    //   body._change_app_icon,
                    // body._primary_color, body._primary_text_color, body._secondary_color,
                    // body._secondary_text_color, body._app_name, body._app_description,
                    // body._keywords, body._splash_screen, body._upload_screenshots
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
    static update_about1(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `pmw`.`_about`(?, ?, ?, ?, ?,?,?, ?, ?,?);',
                    values: [
                        // body._change_app_icon,
                        body._primary_color, body._primary_text_color, body._secondary_color,
                        body._secondary_text_color, body._app_name, body._app_description,
                        body._keywords, body._upload_app_icon, body._splash_screen, body._upload_screenshots
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
    // static new_button(body: any) {
    //   return new Promise(async function (resolve, reject) {
    //     console.log('body', body);
    //     dbClient.query(
    //       {
    //         sql: 'CALL `pmw`.`new_button`();',
    //         values: [],
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
    static add_schedule(body) {
        console.log("body", body);
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `pmw`.`add_schedule`(?);',
                    values: [
                        body._upload_schedule
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
    static announcements(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `pmw`.`announcement`();',
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
    static new_annnouncement1(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body in new_announcement1', body);
                db_1.dbClient.query({
                    sql: 'CALL `pmw`.`new_announcement`(?, ?, ?, ?, ?, ?); ',
                    values: [
                        body._date_from, body._date_to, body._image, body._title, body._descrp, body._status
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
    static updateannouncements(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `pmw`.`updateannouncements`(?, ?, ?, ?, ?, ?);',
                    values: [body._date_from, body._date_to, body._image, body._title, body._description, body._status],
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
    // static delete_announcement1(body: any) {
    //   return new Promise(async function (resolve, reject) {
    //     console.log('body', body);
    //     dbClient.query(
    //       {
    //         sql: 'CALL `pmw`.`new_announcement`(?, ?, ?, ?, ?, ?); ',
    //         values: [ 
    //           body._date_from,body._date_to,body._image,body.title,body._descrp,body._status
    //         ],
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
    //         values: [],
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
    static postservices(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `pmw`.`add_service`(?, ?, ?, ?, ?);',
                    values: [body.sr_no, body._image, body.web_url, body.ph_no, body.sr_title],
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
    static putservices(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `pmw`.`update_services`(?, ?, ?, ?, ?);',
                    values: [body.sr_no, body._image, body.web_url, body.ph_no, body.sr_title],
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
    static contact_and_hours(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `pmw`.`update_contact_and_hours`(?,?,?,?, ?, ?,?, ?, ?, ?, ?, ?,?, ?, ?,?,?, ?,?,?, ?, ?, ?);',
                    values: [
                        body.mon_from, body.mon_to, body.tue_from,
                        body.tue_to, body.wed_from, body.wed_to,
                        body.thurs_from, body.thurs_to, body.fri_from,
                        body.fri_to, body.sat_from, body.sat_to,
                        body.sun_from, body.sun_to, body.full_addr,
                        body.map_codnate, body.mobile, body.mail_id,
                        body.url, body.fb, body.tweet, body.insta, body.linkin
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
    // static notifications(body: any) {
    //   return new Promise(async function (resolve, reject) {
    //     console.log('body', body);
    //     dbClient.query(
    //       {
    //         sql: 'CALL `pmw`.`notifications`();',
    //         values: [],
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
    static updatenotifications(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `pmw`.`update_notifications`(?, ?, ?, ?, ?)`();',
                    values: [body._image, body._notify_title, body._notify_url, body._date_from, body._date_to],
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