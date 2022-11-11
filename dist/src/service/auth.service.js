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
                    if (body.user_name === res.user_namee && body.password === res.passletter) {
                        resolve(res);
                    }
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
    new_button(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.new_button(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    schedule(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.schedule(body).then((res) => {
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
                auth_model_1.AuthModel.services(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    notificatins(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.services(body).then((res) => {
                    console.log(res);
                    resolve(res);
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
    //     update_user(body: any){
    //         return new Promise(async function (resolve, reject) {
    //              AuthModel.update_user(body).then((res: any) => {
    //                 console.log(res);
    //                 resolve(res);
    //             });
    //         });
    //     }
    //     delete_user(body: any){
    //         return new Promise(async function (resolve, reject) {
    //              AuthModel.delete_user(body).then((res: any) => {
    //                 console.log(res);
    //                 resolve(res);
    //             });
    //         });
    //     }
    get_user(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.get_user(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    //     forget_password(body: any){
    //         return new Promise(async function (resolve, reject) {
    //              AuthModel.forget_password(body).then((res: any) => {
    //                 console.log(res);
    //                 resolve(res);
    //             });
    //         });
    //     }
    //     login(body: any){
    //         return new Promise(async function (resolve, reject) {
    //              AuthModel.login(body).then((res: any) => {
    //                 console.log(res);
    //                 resolve(res);
    //             });
    //         });
    //     }
    get_notifications(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.get_notifications(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    add_notifications(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.add_notifications(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map