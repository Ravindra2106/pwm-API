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
exports.AuthService = void 0;
const auth_model_1 = require("../model/auth.model");
class AuthService {
    log_user(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.log_user(body).then((res) => {
                    console.log('res>>>', res);
                    if (body.email === res.user_namee && body.password === res.passletter) {
                        resolve(res);
                    }
                    else {
                        console.log('here');
                    }
                });
            });
        });
    }
    add_user(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.add_user(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    applications(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.applications(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    about(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.about(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    update_about1(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.update_about1(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }


    add_schedule(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.add_schedule(body).then((res) => {

                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    announcements(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.announcements(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    new_annnouncement1(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.new_annnouncement1(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    updateannouncements(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.updateannouncements(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    // delete_announcement1(body: any){
    //     return new Promise(async function (resolve, reject) {
    //          AuthModel.delete_announcement1(body).then((res: any) => {
    //             console.log(res);
    //             resolve(res);
    //         });
    //     });
    // }
    services(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.services(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    contact_and_hours(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.contact_and_hours(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    postservices(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.postservices(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    notifications(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.notifications(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    putservices(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.putservices(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    updatenotifications(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.updatenotifications(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
                    
}

exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map