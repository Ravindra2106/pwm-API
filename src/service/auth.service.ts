import { AuthModel } from "../model/auth.model"


export class AuthService {

    log_user(body: any) {
        return new Promise(async function (resolve, reject) {
            AuthModel.log_user(body).then((res: any) => {
                if (body.user_name === res.user_namee && body.password === res.passletter ) {
                    resolve(res);
                }
            });
        });
    }
    applications(body: any) {
        return new Promise(async function (resolve, reject) {
            AuthModel.applications(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    about(body: any) {
        return new Promise(async function (resolve, reject) {
            AuthModel.about(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    new_button(body: any) {
        return new Promise(async function (resolve, reject) {
            AuthModel.new_button(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    schedule(body: any) {
        return new Promise(async function (resolve, reject) {
            AuthModel.schedule(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    announcements(body: any) {
        return new Promise(async function (resolve, reject) {
            AuthModel.announcements(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    services(body: any) {
        return new Promise(async function (resolve, reject) {
            AuthModel.services(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    contact_and_hours(body: any) {
        return new Promise(async function (resolve, reject) {
            AuthModel.services(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    notificatins(body: any) {
        return new Promise(async function (resolve, reject) {
            AuthModel.services(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    add_user(body: any) {
        return new Promise(async function (resolve, reject) {
            AuthModel.add_user(body).then((res: any) => {
                console.log(res);
                resolve(res);
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
    get_user(body: any){
            return new Promise(async function (resolve, reject) {
                 AuthModel.get_user(body).then((res: any) => {
                    console.log(res);
                    resolve(res);
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
    get_notifications(body: any){
            return new Promise(async function (resolve, reject) {
                 AuthModel.get_notifications(body).then((res: any) => {
                    console.log(res);
                    resolve(res);
                });
            });
        }
        add_notifications(body: any){
            return new Promise(async function (resolve, reject) {
                 AuthModel.add_notifications(body).then((res: any) => {
                    console.log(res);
                    resolve(res);
                });
            });
        }
        update_notifications(body: any){
            return new Promise(async function (resolve, reject) {
                 AuthModel.update_notifications(body).then((res: any) => {
                    console.log(res);
                    resolve(res);
                });
            });
        }
}